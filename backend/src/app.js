import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";

const app = express();

// Middlewares globales
app.use(cors()); // Permite peticiones desde otros orígenes
app.use(express.json()); // Permite recibir JSON

// Health check (útil para pruebas)
app.get("/health", (req, res) => {
  res.json({ ok: true, message: "API ecommerce funcionando" });
});

// Rutas
app.use("/api/products", productsRoutes);

export default app;
