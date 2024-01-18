import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from "../Button";
import { Container, Footer, Overlay } from "./styles";

export default function Modal({
  visible,
  onCancel,
  onConfirm,
  cancelLabel,
  danger,
  title,
  children,
  isLoading,
}) {
  let container = document.getElementById('modal-portal');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'modal-portal');
    document.body.appendChild(container);
  }

  if(!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <div className="modal-body">
          {children}
        </div>

        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            onClick={onConfirm}
            danger={danger}
            disabled={isLoading}
          >
            Confirmar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    container
  )
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  danger: PropTypes.bool,
  isLoading: PropTypes.bool,
}

Modal.defaultProps = {
  cancelLabel: 'Cancelar',
  danger: false,
  isLoading: false,
}
