import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reduce from "./redux_dir/reduce";
import { actionAddItem } from "./redux_dir/actionCreators";

const store = createStore(reduce);
store.dispatch(actionAddItem("Hello, there"));
store.dispatch(actionAddItem("Hello, there, Rostyk"));
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
