import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import ProductsService from "../../services/ProductsService";

export default function EditProduct() {
  const [productName, setProductName] = useState('');
  const productFormRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProduct() {
      try {
        const { data } = await ProductsService.getProductById(id)
        productFormRef.current.setFieldsValues(data);
        setProductName(data.name);
      } catch {
        alert('Erro ao encontrar o produto!');
        navigate('/');
      }
    }
    loadProduct();
  }, [id, navigate]);

  async function handleSubmit(product) {

    try {
      const { data } = await ProductsService.updateProduct(id, product);

      setProductName(data.name);
      alert('produto editado com sucesso!');

    } catch {
      alert('Erro ao editar o produto!');
    }
  }
  return (
    <ProductForm
      ref={productFormRef}
      pageTitle={`Editar ${productName}`}
      buttonLabel="Salvar alterações"
      onSubmit={handleSubmit}
    />
  )
}
