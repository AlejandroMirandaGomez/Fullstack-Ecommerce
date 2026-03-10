import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // MongoDB asigna automáticamente _id 
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    inStock: {
      type: Boolean,
      default: true,
    },

    subcategory: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },

    // GridFS: referencia al archivo guardado en MongoDB
    imageFileId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    // Metadatos útiles (opcionales pero recomendados)
    imageFilename: {
      type: String,
      required: true,
      trim: true,
    },

    imageContentType: {
      type: String,
      required: true,
      trim: true, // ej: "image/jpeg", "image/png"
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  },
);

// Evita recompilar el modelo en entornos con hot-reload
export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
