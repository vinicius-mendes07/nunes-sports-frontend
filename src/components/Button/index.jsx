import { StyledButton } from "./styles";
import PropTypes from 'prop-types'

export default function Button({
  type,
  onClick,
  children,
  disabled,
  danger,
}){
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $danger={danger}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
  disabled: false,
  danger: false,
}
