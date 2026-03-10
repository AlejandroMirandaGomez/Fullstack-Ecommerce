import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("Falta MONGO_URI en el archivo .env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado a la base ecommerce");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error iniciando servidor:", err.message);
    process.exit(1);
  }
}

startServer();
