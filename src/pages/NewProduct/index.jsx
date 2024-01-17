import ProductForm from "../../components/ProductForm";
import { Container } from "./styles";

export default function NewProduct() {
  return (
    <Container>
      <ProductForm
        pageTitle="Cadastrar novo produto"
      />
    </Container>
  )
}
