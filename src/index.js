import { StrictMode } from "react";
import ReactDOM from "react-dom";
import 'react-bootstrap'
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
