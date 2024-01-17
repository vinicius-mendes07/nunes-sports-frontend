import { StyledButton } from "./styles";
import PropTypes from 'prop-types'

export default function Button({type, onClick}){
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >
      Cadastrar
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
}
