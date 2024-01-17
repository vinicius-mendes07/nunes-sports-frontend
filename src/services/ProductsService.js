import api from "./utils/api";

class ProductsService {
  listProducts() {
    return api.get('/products');
  }

  async createProduct({name, description, price}) {
    return api.post('/products', {name, description, price});
  }

  getContactById(id) {
    return api.get(`/products/${id}`);
  }

  updateContact(id, product) {
    return api.put(`/products/${id}`, product);
  }
}

export default new ProductsService();
