import ProductForm from "../../components/ProductForm";
import { Container } from "./styles";

export default function NewProduct() {
  return (
    <Container>
      <h1>Criar novo produto</h1>
      <ProductForm />
    </Container>
  )
}
