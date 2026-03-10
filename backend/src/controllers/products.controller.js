// src/controllers/products.controller.js
import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";
import { Readable } from "stream";
import crypto from "crypto";
import path from "path";
import Product from "../models/product.model.js";

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function getBucket() {
  const db = mongoose.connection?.db;
  if (!db) throw new Error("MongoDB no conectado todavía");
  return new GridFSBucket(db, { bucketName: "productImages" });
}

function uploadBufferToGridFS({ buffer, originalname, mimetype }) {
  const bucket = getBucket();

  const ext = path.extname(originalname || "") || "";
  const filename = `${crypto.randomBytes(16).toString("hex")}${ext}`;

  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(filename, {
      contentType: mimetype,
      metadata: { originalName: originalname },
    });

    uploadStream.on("error", reject);
    uploadStream.on("finish", () => {
      resolve({
        _id: uploadStream.id,
        filename,
        contentType: mimetype,
      });
    });

    Readable.from(buffer).pipe(uploadStream);
  });
}

/**
 * GET /api/products
 * Time: O(n)  Space: O(n)
 */
export async function getAllProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).lean();

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const mapped = products.map((p) => ({
      ...p,
      imageUrl: `${baseUrl}/api/products/image/${p.imageFileId}`,
    }));

    return res.json(mapped);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

/**
 * GET /api/products/:id
 * Time: O(1)  Space: O(1)
 */
export async function getProductById(req, res) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID de producto inválido" });
    }

    const product = await Product.findById(id).lean();
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    return res.json({
      ...product,
      imageUrl: `${baseUrl}/api/products/image/${product.imageFileId}`,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

/**
 * POST /api/products
 * multipart/form-data:
 *  - image (file)
 *  - name, price, discount, inStock, subcategory, category (text)
 *
 * Time: O(k)  Space: O(1)  (k = tamaño imagen, se sube por streaming)
 */
export async function createProduct(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Falta imagen (field: image)" });
    }

    const { name, price, discount, inStock, subcategory, category } = req.body;

    if (!name || price === undefined || !subcategory || !category) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    // 1) Subir imagen a GridFS
    const file = await uploadBufferToGridFS({
      buffer: req.file.buffer,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
    });

    // 2) Guardar producto referenciando la imagen
    const product = await Product.create({
      name: String(name).trim(),
      price: Number(price),
      discount: discount === undefined ? 0 : Number(discount),
      inStock: inStock === undefined ? true : String(inStock) !== "false",
      subcategory: String(subcategory).trim(),
      category: String(category).trim(),

      imageFileId: file._id,
      imageFilename: file.filename,
      imageContentType: file.contentType,
    });

    return res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

/**
 * PUT /api/products/:id
 * Puede venir nueva imagen (image)
 *
 * Time: O(k)  Space: O(1)
 */
export async function updateProduct(req, res) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID de producto inválido" });
    }

    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });

    const { name, price, discount, inStock, subcategory, category } = req.body;

    if (name !== undefined) product.name = String(name).trim();
    if (price !== undefined) product.price = Number(price);
    if (discount !== undefined) product.discount = Number(discount);
    if (inStock !== undefined) product.inStock = String(inStock) !== "false";
    if (subcategory !== undefined)
      product.subcategory = String(subcategory).trim();
    if (category !== undefined) product.category = String(category).trim();

    // Si llega nueva imagen, subimos nueva y borramos la anterior
    if (req.file) {
      const oldFileId = product.imageFileId;

      const file = await uploadBufferToGridFS({
        buffer: req.file.buffer,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
      });

      product.imageFileId = file._id;
      product.imageFilename = file.filename;
      product.imageContentType = file.contentType || req.file.mimetype;

      try {
        await getBucket().delete(oldFileId);
      } catch (_) {
        // no rompemos el update si falló borrar
      }
    }

    await product.save();
    return res.json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

/**
 * DELETE /api/products/:id
 * Time: O(1)  Space: O(1)
 */
export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "ID de producto inválido" });
    }

    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });

    try {
      await getBucket().delete(product.imageFileId);
    } catch (_) {}

    await Product.deleteOne({ _id: product._id });
    return res.json({ message: "Producto eliminado" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

/**
 * GET /api/products/image/:fileId
 * Time: O(k)  Space: O(1)
 */
export async function getProductImage(req, res) {
  try {
    const { fileId } = req.params;

    if (!isValidObjectId(fileId)) {
      return res.status(400).json({ message: "fileId inválido" });
    }

    const bucket = getBucket();
    const _id = new mongoose.Types.ObjectId(fileId);

    // Encontrar metadata para Content-Type
    const files = await mongoose.connection.db
      .collection("productImages.files")
      .find({ _id })
      .limit(1)
      .toArray();

    if (files.length === 0)
      return res.status(404).json({ message: "Imagen no encontrada" });

    const ct =
      files[0].contentType ||
      files[0]?.metadata?.contentType ||
      "application/octet-stream";
    res.set("Content-Type", ct);

    const stream = bucket.openDownloadStream(_id);
    stream.on("error", () =>
      res.status(404).json({ message: "Imagen no encontrada" }),
    );
    return stream.pipe(res);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
