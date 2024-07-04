import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Buraya Bootstrap CSS dosyasını dahil edin
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS dosyasını import edin
import App from "./App";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
