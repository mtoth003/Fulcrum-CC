import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { EstimateProvider } from "./contexts/EstimateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EstimateProvider>
      <App />
    </EstimateProvider>
  </React.StrictMode>
);
