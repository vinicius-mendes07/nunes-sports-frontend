import { Container } from "./styles";

import emptyBox from '../../../../assets/images/empty-box.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="empty box" />
      <p>Nenhum produto cadastrado. Clique em <strong>"Criar novo produto"</strong> para cadastrar algum.</p>
    </Container>
  );
}
