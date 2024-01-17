import api from "./utils/api";

class ProductsService {
  listProducts() {
    return api.get('/products');
  }

  async createProduct({name, description, price}) {
    const product = await api.post('/products', {name, description, price: +price});

    return product;
  }
}

export default new ProductsService();
