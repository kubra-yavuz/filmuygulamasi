import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css"; // Buraya Bootstrap CSS dosyasını dahil edin
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS dosyasını import edin
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
