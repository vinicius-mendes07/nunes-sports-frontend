import { useCallback, useEffect, useMemo, useState } from "react";
import ProductsService from "../../services/ProductsService";

export default function useHome() {
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

  return {
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
  }
}
