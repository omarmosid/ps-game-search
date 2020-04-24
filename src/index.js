import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalProvider } from "./context/global-context";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider>
        <CSSReset />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>,
  rootElement
);
