import ProductsTable from "./components/ProductsTable";
import { Container } from "./styles";
import SearchNotFound from "./components/SearchNotFound";
import ErrorComponent from "./components/ErrorComponent";
import EmptyList from "./components/EmptyList";
import Modal from "../../components/Modal";
import useHome from "./useHome";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";

export default function Home() {
  const {
    products,
    searchTerm,
    hasError,
    isLoading,
    isDeleteModalVisible,
    productToDelete,
    isLoadingDelete,
    filteredProducts,
    handleDeleteProduct,
    handleCloseDeleteModal,
    handleConfirmDeleteProduct,
    handleChangeSearchTerm,
    handleTryAgain,
  } = useHome();

  return (
    <Container>
      <Header hasError={hasError} isLoading={isLoading} qtyOfFilteredProducts={filteredProducts.length} />

      {hasError && <ErrorComponent handleTryAgain={handleTryAgain} />}

      {(!hasError && products.length < 1 && !isLoading) && (
        <EmptyList />
      )}

      {isLoading && 'Carregando...'}

      {(!hasError && products.length > 0) && (
        <InputSearch onChange={handleChangeSearchTerm} value={searchTerm} />
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
