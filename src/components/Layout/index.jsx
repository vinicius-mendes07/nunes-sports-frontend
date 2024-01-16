import { Outlet } from 'react-router-dom'
import Header from "../Header";
import { Container } from './styles';

export default function Layout() {
  return (
    <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    </>

  )
}
