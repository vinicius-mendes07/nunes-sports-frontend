import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Container } from "./styles";

import edit from '../../../../assets/images/icons/edit.svg';
import trash from '../../../../assets/images/icons/trash.svg';

export default function ProductsTable({ filteredProducts, onDeleteProduct }) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description || '-'}</td>
              <td>R$ {product.price}</td>
              <td>
                <div className='actions'>
                  <Link to={`/edit/${product.id}`}>
                    <img src={edit} alt="edit" />
                  </Link>
                  <button
                    onClick={() => onDeleteProduct(product)}
                  >
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

ProductsTable.propTypes = {
  filteredProducts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.string.isRequired
  })).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
