import { createBrowserRouter, } from 'react-router-dom'
import Layout from "./components/Layout";
import EditProduct from './pages/EditProduct';
import Home from "./pages/Home";
import NewProduct from './pages/NewProduct';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/new",
        element: <NewProduct />
      },
      {
        path: '/edit/:id',
        element: <EditProduct/>
      }
    ]
  },
])

export default Router;
