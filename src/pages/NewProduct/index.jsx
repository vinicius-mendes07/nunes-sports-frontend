import { useRef } from "react";
import ProductForm from "../../components/ProductForm";
import ProductsService from "../../services/ProductsService";

export default function NewProduct() {
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
  return (
    <>
      <ProductForm
        ref={productFormRef}
        pageTitle="Cadastrar novo produto"
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
