import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductsTable from "./components/ProductsTable";
import ProductsService from "../../services/ProductsService";
import { Container, InputSearchContainer, ListHeader } from "./styles";
import SearchNotFound from "./components/SearchNotFound";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [hasError, setHasError] = useState(false);

  const filteredProducts = useMemo(() => products.filter((product) => (
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [products, searchTerm])

  useEffect(() => {
    async function loadContacts() {
      const {data} = await ProductsService.listProducts();
      setProducts(data);
    }

    loadContacts()
  }, [])

  function handleDeleteProduct(product) {
    alert(product.name + ' deletado')
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <ListHeader>
        <div className="list-text">
            <h1>Lista de produtos</h1>
            <span>{filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}</span>
        </div>
      </ListHeader>
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise um produto pelo nome..."
          onChange={handleChangeSearchTerm}
          value={searchTerm}
        />
      </InputSearchContainer>

      {(products.length > 0 && filteredProducts.length < 1) && (
        <SearchNotFound searchTerm={searchTerm}/>
      )}

      {(products.length > 0 && filteredProducts.length > 0) && (
        <ProductsTable
          filteredProducts={filteredProducts}
          onDeleteProduct={handleDeleteProduct}
        />
      )}
    </Container>
  )
}
