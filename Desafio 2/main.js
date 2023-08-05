import { promises as fs } from "fs";

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./productos.json";
  }

  async addProduct(product) {
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const prod = products.find((prod) => prod.code === product.code);
    if (prod) {
      console.log("Producto ya existente, ingrese otro");
    } else {
      products.push(product);
      await fs.writeFile(this.path, JSON.stringify(products));
    }
  }
  async getProducts() {
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    console.log(products);
  }
  async getProductById(id) {
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const prod = products.find((prod) => prod.id === id);
    if (prod) {
      console.log(prod);
    } else {
      console.log("Este producto no existe");
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
      console.log("El id del producto no existe");
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
      console.log("El id del producto no existe");
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

/*        FUNCIONES PARA EL DESAFIO         */
/*

productManager.addProduct();
productManager.getProducts();
productManager.getProductById();
productManager.updateProduct();
productManager.deleteProduct();


*/

//Productos ya agregados por defecto
const producto1 = new Product("Arroz", "Rico", 300, "AA123", 20, []);
const producto2 = new Product("Fideos", "Rico", 200, "AA321", 20, []);
const producto3 = new Product("Pan", "Rico", 100, "AA231", 20, []);

const productManager = new ProductManager();

//Productos para agregar: producto1, producto2, producto3
productManager.addProduct(producto1);

//Para obtener todos los productos
//productManager.getProducts();

//Para obtener un solo producto por su id
//productManager.getProductById(1);

//Para actualizar el contenido de un producto (id, nuevas propiedades)
//productoMod: modificador de prueba hecho por mi
const productoMod = {
  title: "Papa",
  description: "Rica",
  price: 400,
  code: "AA456",
  stock: 20,
  thumbnail: [],
};
//productManager.updateProduct(1, productoMod);

//Para eliminar un producto por su id
//productManager.deleteProduct(2);
