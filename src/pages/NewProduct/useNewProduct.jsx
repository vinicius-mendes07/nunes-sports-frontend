import { useRef } from "react";
import ProductsService from "../../services/ProductsService";

export default function useNewProduct() {
  const productFormRef = useRef(null);

  async function handleSubmit(product) {
    try {
      await ProductsService.createProduct(product);

      productFormRef.current.resetFields();
      alert('produto cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar o produto!');
    }
  }

  return {
    productFormRef,
    handleSubmit,
  };
}
