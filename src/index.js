import React from "react";
import ReactDOM from "react-dom/client";
import "./view/index.css";
import App from "./view/App";
import { BrowserRouter } from "react-router-dom";

const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

// ReactDOM.reder(app, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(app)