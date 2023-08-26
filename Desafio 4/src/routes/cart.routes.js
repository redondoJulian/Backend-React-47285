import { Router } from "express";
import CarritoManager from "../Clases/carritoManager.js";

const cartRoute = Router();
const carro = new CarritoManager();

cartRoute.get("/", async (req, res) => {
  res.send(await carro.getCarrito());
});

cartRoute.post("/:cid", async (req, res) => {
  const pid = req.params.cid;
  console.log(pid);

  const producto = res.send(await carro.addCarrito(parseInt(pid)));

  if (producto === "producto inexistente") {
    res.status(404).send(producto);
  }
  if (producto === "numero incrementado en Carrito") {
    res.status(202).send(producto);
  }
  if (producto === "producto agregado a carrito") {
    res.status(200).send(producto);
  }
});

export default cartRoute;
