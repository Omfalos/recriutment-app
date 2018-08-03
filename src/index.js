import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./weather-icons.min.css";
import "./index.css";
import store from "./store";
import ConnectedApp from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
