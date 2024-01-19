import { Container } from "./styles";
import nunesSports from '../../assets/images/nunesSports.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <img src={nunesSports} alt="nunes sports logo" />
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/new">Criar novo produto</Link>
      </div>
    </Container>
  );
}
