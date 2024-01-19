import PropTypes from 'prop-types';
import { Container } from "./styles";

export default function InputSearch({ onChange, value }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquise um produto pelo nome..."
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
