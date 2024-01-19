import ProductForm from "../../components/ProductForm";
import useEditProduct from "./useEditProduct";

export default function EditProduct() {
  const { productName, productFormRef, handleSubmit} = useEditProduct();
  return (
    <ProductForm
      ref={productFormRef}
      pageTitle={`Editar ${productName}`}
      buttonLabel="Salvar alterações"
      onSubmit={handleSubmit}
    />
  );
}
