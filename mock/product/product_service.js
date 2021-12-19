class ProductService {
    constructor(productClient) { //의존성 주입을 통해 맨위에 require를 사용하지 않을수 있게된다. 관심이 업어서
      this.productClient = productClient;
    }
  
    fetchAvailableItems() {
      return this.productClient
        .fetchItems()
        .then((items) => items.filter((item) => item.available));
    }
  }
  
  module.exports = ProductService;
  