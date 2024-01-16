import { Link } from "react-router-dom";
import { Container } from "./styles";

import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

export default function ProductsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tenis</td>
            <td>tenis de corrida</td>
            <td>150</td>
            <td>
              <Link to="/edit/124">
                <img src={edit} alt="edit" />
              </Link>
              <button>
                <img src={trash} alt="delete" />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Tenis</td>
            <td>tenis de corrida</td>
            <td>150</td>
            <td>
              <Link to="/edit/124">
                <img src={edit} alt="edit" />
              </Link>
              <button>
                <img src={trash} alt="delete" />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Tenis</td>
            <td>tenis de corrida</td>
            <td>150</td>
            <td>
              <Link to="/edit/124">
                <img src={edit} alt="edit" />
              </Link>
              <button>
                <img src={trash} alt="delete" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
