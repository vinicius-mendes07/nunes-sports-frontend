import { StyledButton } from "./styles";
import PropTypes from 'prop-types'

export default function Button({type, onClick, children}){
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
}
