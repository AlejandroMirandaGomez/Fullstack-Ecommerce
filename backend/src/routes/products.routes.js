import { Router } from "express";
import { upload } from "../utils/upload.js"; // GridFS + multer

import {
  createProduct,
  getAllProducts,
  getProductById,
  getProductImage,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

/**
 * Productos (CRUD)
 */
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Crear producto + imagen (multipart/form-data)
// - file field: "image"
// - text fields: name, price, discount, inStock, subcategory, category
router.post("/", upload.single("image"), createProduct);

router.put("/:id", upload.single("image"), updateProduct);
router.delete("/:id", deleteProduct);

/**
 * Imágenes (GridFS)
 * Sirve la imagen del producto por id de archivo en GridFS
 */
router.get("/image/:fileId", getProductImage);

export default router;
