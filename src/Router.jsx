import { createBrowserRouter, } from 'react-router-dom'
import Layout from "./components/Layout";
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
      }
    ]
  },
])

//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//         {
//             index: true,
//             element: <Home />
//         },
//     ]
// },
// {
//     path: "/items",
//     element: <ItemsLayout />,
//     children: [
//         {
//             index: true,
//             element: <StockItems />
//         },
//         {
//             path: "item/:itemId",
//             element: <Item />
//         },
//         {
//             path: "item/new",
//             element: <CreateItem />
//         },
//         {
//             path: "item/update/:itemId",
//             element: <UpdateItem />
//         }
//     ]
// },

export default Router;
