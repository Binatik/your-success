import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./store/redux/index.js";
import { theme } from "@src/store/styled/theme/theme.js";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);
