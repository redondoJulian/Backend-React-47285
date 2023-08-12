import express from "express";
import ProductManager from "./productManager.js";

const productManager = new ProductManager();

const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hola, buenos dias");
});

app.get("/products", async (req, res) => {
  const products = await productManager.getProducts();
  const { limit } = req.query;
  if (!limit) {
    res.send(products);
  }
  if (limit) {
    res.send(products.slice(0, parseInt(limit)));
  }
});

app.get("/products/:pid", async (req, res) => {
  const { pid } = req.params;

  const product = await productManager.getProductById(parseInt(pid));
  if (!product) {
    res.status(404).send({});
  }
  res.send(product);
});

app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
