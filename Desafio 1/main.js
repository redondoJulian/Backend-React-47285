class ProductManager {
  constructor() {
    this.products = [];
    this.id = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    //Busca si hay un codigo que sea igual al que introdujo el usuario
    const checkExist = this.products.find((product) => product.code === code);
    //Si existe:
    if (checkExist) {
      return "El producto con ese código ya existe";
    } else {
      //En caso contrario:
      const product = {
        id: this.id++, //Agrega 1 al último ID existente
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(product); //Hace un push metiendo toda la información al products del "ProductManager"
      return product; //Retorna el producto agregado
    }
  }

  //Para obtener el producto mediante su id
  getProductById(id) {
    //Busca si encuentra un producto con el id introducido
    if (this.products.some((product) => product.id === id)) {
      return this.products.find((product) => product.id === id); //Retorna el producto encontrado
    } else {
      //Si no encuentra nada, aparece este mensaje: "No existe"
      return "No existe";
    }
  }

  //Para devolver todos los productos agregados
  getproducts() {
    return this.products;
  }
}

//Crea un objeto para ProductManager para poder manipular las funciones
const productManager = new ProductManager();

//Para poder usar la funcion de "addProduct()", "getProducts()" o "getProductsById()", si o si hay que usar "productManager"
//Ejemplos:
//productManager.addProduct(nombre,descripcion,precio,imagen,codigo,stock)
productManager.addProduct(
  "notebook",
  "descripción para una notebook",
  40000,
  "sin imagen",
  "COD-001",
  50
);
productManager.addProduct(
  "netbook",
  "descripción para una netbook",
  20000,
  "sin imagen",
  "COD-002",
  30
);

//Para Obtener producto por su id
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));

//Para Obtener TODOS los productos
console.log(productManager.getproducts());
