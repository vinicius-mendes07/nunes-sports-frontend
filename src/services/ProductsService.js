import api from "./utils/api";

class ProductsService {
  listProducts() {
    return api.get('/products');
  }

  async createProduct({name, description, price}) {
    return api.post('/products', {name, description, price});
  }

  getProductById(id) {
    return api.get(`/products/${id}`);
  }

  updateProduct(id, product) {
    return api.put(`/products/${id}`, product);
  }

  deleteProduct(id) {
    return api.delete(`/products/${id}`);
  }
}

export default new ProductsService();
