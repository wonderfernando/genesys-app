import { ThemeProvider,DefaultTheme } from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"
import { LightTheme } from "./styles/Theme/LightTheme"
import  DarkTheme  from "./styles/Theme/DefaultTheme"
import Router from "./Router"
import {useState} from "react"
function App() {
 
  const [theme, setTheme] =  useState<DefaultTheme>(LightTheme)
  function changeMode() {
    setTheme(theme.title=== "light" ? DarkTheme  : LightTheme )
  }
  return (
    <ThemeProvider theme={theme}>
      <Router isDarkMode={theme.title==="dark"} changeMode={changeMode}/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
