import api from "./utils/api";

class ProductsService {
  listProducts() {
    return api.get('/products')
  }
}

export default new ProductsService();
