import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"
import { ThemeDefault } from "./styles/Theme/DefaultTheme"
import Router from "./Router"

function App() {
 
  return (
    <ThemeProvider theme={ThemeDefault}>
      <Router/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
