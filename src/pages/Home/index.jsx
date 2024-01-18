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
import Modal from "../../components/Modal";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredProducts = useMemo(() => products.filter((product) => (
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [products, searchTerm]);

  const loadProducts = useCallback(async () => {
    try {
      const {data} = await ProductsService.listProducts();

      setProducts(data);
      setHasError(false);
    } catch (error){
      setHasError(true);
      setProducts([]);
      console.log(error?.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  function handleDeleteProduct(product) {
    setIsDeleteModalVisible(true);
    setProductToDelete(product);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  async function handleConfirmDeleteProduct() {
    try {
      setIsLoadingDelete(true);
      await ProductsService.deleteProduct(productToDelete.id);
      handleCloseDeleteModal();
      setProducts((prevState) => prevState.filter((product) => (
        product.id !== productToDelete.id
      )));
    } catch {
      alert('Ocorreu um erro ao deletar o produto!');
    } finally {
      setIsLoadingDelete(false);
    }
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadProducts();
  }

  return (
    <Container>
      <ListHeader>
        <div className="list-text">
            <h1>Lista de produtos</h1>
            {(!hasError && !isLoading) && (
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

      <Modal
        danger
        visible={isDeleteModalVisible}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteProduct}
        title={`Tem certeza que deseja remover o produto ”${productToDelete?.name}”?`}
        isLoading={isLoadingDelete}
      >
        <p>Essa ação não poderá ser desfeita!</p>
      </Modal>
    </Container>
  )
}
