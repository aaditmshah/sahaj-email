import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {Provider} from "./_snowpack/pkg/react-redux.js";
import App from "./components/App.js";
import store from "./store.js";
import "./index.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("app"));
