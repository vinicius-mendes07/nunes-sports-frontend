import { StyledButton } from "./styles";
import PropTypes from 'prop-types'

export default function Button({type,
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
      danger={danger}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
  disabled: false,
  danger: false,
}
