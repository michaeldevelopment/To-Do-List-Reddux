import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodosProvider } from "./Context/index";

ReactDOM.render(
  <>
    <TodosProvider>
      <App />
    </TodosProvider>
  </>,
  document.getElementById("root")
);
