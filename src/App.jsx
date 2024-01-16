import { RouterProvider } from 'react-router-dom'
import Router from './Router'

function App() {

  return (
    <RouterProvider router={Router}/>
      // <BrowserRouter>
      //   <Router />
      // </BrowserRouter>
  )
}

export default App
