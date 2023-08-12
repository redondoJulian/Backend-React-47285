import { promises as fs } from "fs";

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./src/data/products.json";
  }

  async addProduct(product) {
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const prod = products.find((prod) => prod.code === product.code);
    if (prod) {
      return "Producto ya existente, ingrese otro";
    } else {
      products.push(product);
      await fs.writeFile(this.path, JSON.stringify(products));
    }
  }
  async getProducts() {
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    return products;
  }
  async getProductById(id) {
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const prod = products.find((prod) => prod.id === id);
    if (prod) {
      return prod;
    } else {
      return "Este producto no existe";
    }
  }
  async updateProduct(id, product) {
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const index = products.findIndex((prod) => prod.id === id);
    if (index != -1) {
      products[index].title = product.title;
      products[index].description = product.description;
      products[index].price = product.price;
      products[index].code = product.code;
      products[index].stock = product.stock;
      products[index].thumbnail = product.thumbnail;
      await fs.writeFile(this.path, JSON.stringify(products));
    } else {
      return "El id del producto no existe";
    }
  }
  async deleteProduct(id) {
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const prod = products.find((prod) => prod.id === id);
    if (prod) {
      await fs.writeFile(
        this.path,
        JSON.stringify(products.filter((prod) => prod.id != id))
      );
    } else {
      return "El id del producto no existe";
    }
  }
}

class Product {
  constructor(title, description, price, code, stock, thumbnail) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.code = code;
    this.stock = stock;
    this.thumbnail = thumbnail;
    this.id = Product.incrementarID();
  }

  static incrementarID() {
    if (this.idIncrement) {
      this.idIncrement++;
    } else {
      this.idIncrement = 1;
    }
    return this.idIncrement;
  }
}

export default ProductManager;
