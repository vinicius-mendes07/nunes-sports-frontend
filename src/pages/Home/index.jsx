import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductsTable from "./components/ProductsTable";
import ProductsService from "../../services/ProductsService";
import { Container, InputSearchContainer, ListHeader } from "./styles";
import SearchNotFound from "./components/SearchNotFound";
import ErrorComponent from "./components/ErrorComponent";
import { useCallback } from "react";
import EmptyList from "./components/EmptyList";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const filteredProducts = useMemo(() => products.filter((product) => (
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [products, searchTerm])

  const loadProducts = useCallback(async () => {
    try {
      const {data} = await ProductsService.listProducts();

      setProducts(data);
      setHasError(false)
    } catch (error){
      setHasError(true)
      setProducts([]);
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, []);

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  function handleDeleteProduct(product) {
    alert(product.name + ' deletado')
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadProducts()
  }

  return (
    <Container>
      <ListHeader>
        <div className="list-text">
            <h1>Lista de produtos</h1>
            {!hasError && (
              <span>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
              </span>
            )}
        </div>
      </ListHeader>

      {hasError && <ErrorComponent handleTryAgain={handleTryAgain} />}

      {(!hasError && products.length < 1 && !isLoading) && (
        <EmptyList />
      )}

      {isLoading && 'Carregando...'}

      {(!hasError && products.length > 0) && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquise um produto pelo nome..."
            onChange={handleChangeSearchTerm}
            value={searchTerm}
          />
        </InputSearchContainer>
      )}

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
