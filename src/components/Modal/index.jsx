import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
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
  confirmLabel,
}) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animatedElementRef = useRef(null);

  useEffect(() => {
    if(visible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const elementRef = animatedElementRef.current;
    if(!visible && elementRef) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if(elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    }
  }, [visible]);

  let container = document.getElementById('modal-portal');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'modal-portal');
    document.body.appendChild(container);
  }

  if(!shouldRender) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay $isLeaving={!visible} ref={animatedElementRef}>
      <Container $isLeaving={!visible} $danger={danger}>
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
            {confirmLabel}
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
  confirmLabel: PropTypes.string,
  danger: PropTypes.bool,
  isLoading: PropTypes.bool,
}

Modal.defaultProps = {
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  danger: false,
  isLoading: false,
}
