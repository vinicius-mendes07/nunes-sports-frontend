import ProductForm from "../../components/ProductForm";
import useNewProduct from "./useNewProduct";

export default function NewProduct() {
  const { productFormRef, handleSubmit} = useNewProduct();
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
