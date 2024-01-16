import ProductsTable from "../../components/ProductsTable";
import { Container, InputSearchContainer, ListHeader } from "./styles";

export default function Home() {
  return (
    <Container>
      <ListHeader>
        <div className="list-text">
            <h1>Lista de produtos</h1>
            <span>3 produtos</span>
        </div>
      </ListHeader>
        <InputSearchContainer>
          <input type="text" placeholder="Pesquise um produto pelo nome..."/>
        </InputSearchContainer>

      <ProductsTable />
    </Container>
  )
}
