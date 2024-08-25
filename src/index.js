import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TestModeContextProvider } from "./Context/TestModeContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { AlertContextProvider } from "./Context/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertContextProvider>
    <ThemeContextProvider>
      <TestModeContextProvider>
        <App />
      </TestModeContextProvider>
    </ThemeContextProvider>
  </AlertContextProvider>
);
