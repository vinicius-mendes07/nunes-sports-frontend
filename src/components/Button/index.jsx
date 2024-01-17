import { StyledButton } from "./styles";
import PropTypes from 'prop-types'

export default function Button({type, onClick, children, disabled}){
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
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
}

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
  disabled: false,
}
