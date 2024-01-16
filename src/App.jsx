import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom'
import Router from './Router'
import GlobalStyles from './assets/styles/global'
import defaultTheme from './assets/styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={Router}/>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
