import PropTypes from 'prop-types';
import { Container } from "./styles";
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';

export default function SearchNotFound({searchTerm}) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="magnifier" />
      <p>Nenhum resultado encontrado para "{searchTerm}"</p>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
