import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { ApplicationStore } from "./stores/ApplicationStore";
import Application from "./components/Application";
import "./global.css";

const app = ApplicationStore.create();

ReactDOM.render(
  <Provider app={app}>
    <Application />
  </Provider>,
  document.getElementById("root"),
);
