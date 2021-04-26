import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/global.scss";

ReactDOM.render(
  <div>
    <App name='Max' />
  </div>,
  document.getElementById("app")
);
