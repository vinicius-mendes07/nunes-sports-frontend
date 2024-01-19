import { StyledButton } from "./styles";
import PropTypes from 'prop-types'

export default function Button({
  type,
  onClick,
  children,
  disabled,
  isLoading,
  danger,
}){
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      $danger={danger}
    >
      {!isLoading && children}
      {isLoading && 'Carregando...'}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  danger: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
  disabled: false,
  isLoading: false,
  danger: false,
}
