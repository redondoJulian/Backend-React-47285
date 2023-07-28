class ProductManager {
  constructor() {
    this.products = [];
    this.id = 1;
  }

  test;

  addProduct(title, description, price, thumbnail, code, stock) {
    //Busca si hay un codigo que sea igual al que introdujo el usuario
    const checkExist = this.products.find((product) => product.code === code);
    //Si existe:
    if (checkExist) {
      return "El producto con ese código ya existe";
    } else {
      //En caso contrario:
      const product = {
        id: this.id++,
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
  getProduct(id) {
    //Busca si encuentra un producto con el id introducido
    if (this.products.some((product) => product.id === id)) {
      return this.products.find((product) => product.id === id); //Retorna el producto encontrado
    } else {
      //Si no encuentra nada, aparece este mensaje: "No existe"
      return "No existe";
    }
  }
}

//Crea un objeto para ProductManager para poder manipular las funciones
const productManager = new ProductManager();

//Para poder usar la funcion de "addProduct" o "getProduct", si o si hay que usar el objeto "productManager"
//Ejemplos:
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
console.log(productManager.getProduct(1));
console.log(productManager.getProduct(2));
