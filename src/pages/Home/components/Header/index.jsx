import PropTypes from 'prop-types';
import { Container } from "./styles";

export default function Header({hasError, isLoading, qtyOfFilteredProducts}) {
  return (
    <Container>
      <div className="list-text">
          <h1>Lista de produtos</h1>
          {(!hasError && !isLoading) && (
            <span>
              {qtyOfFilteredProducts} {qtyOfFilteredProducts === 1 ? 'produto' : 'produtos'}
            </span>
          )}
      </div>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  qtyOfFilteredProducts: PropTypes.number.isRequired,
};
