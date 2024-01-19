import PropTypes from 'prop-types';
import { Container } from "./styles";
import sad from '../../../../assets/images/sad.svg';
import Button from '../../../../components/Button';

export default function ErrorComponent({ handleTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="empty box" />
      <div>
        <strong>Ocorreu um erro trazer os produtos.</strong>
        <Button onClick={handleTryAgain}>Tentar novamente</Button>
      </div>
    </Container>
  );
}

ErrorComponent.propTypes = {
  handleTryAgain: PropTypes.func.isRequired,
};
