import { Theme, ThemeProvider } from "@emotion/react"
import React from "react"
import "./App.css"
import Header from "./components/Header"

const theme: Theme = {
  colors: {
    primary: {
      50: "hotpink",
      100: "green",
      200: "orange",
    },
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
