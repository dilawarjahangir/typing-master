import React from "react";
import HomePage from "./Pages/HomePage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TestModeContextProvider } from "./Context/TestModeContext";
import { useTheme } from "./Context/ThemeContext"; 

function App() {
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>

        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>

    </ThemeProvider>
  );
}

export default App;
