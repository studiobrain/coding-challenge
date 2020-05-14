import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import Application from "./index.js";
import { ApplicationStore } from "../../stores/ApplicationStore";

let app = ApplicationStore.create();

describe("Application: testing base functionality and it", () => {
  it("renders and provides accessable and global context", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider app={app}>
        <Application />
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
