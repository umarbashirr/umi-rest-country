import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CountryContextProvider from "./context/CountryContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <CountryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountryContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
