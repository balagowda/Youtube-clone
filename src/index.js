import { React } from "react";
// import ReactDOM from 'react-dom';
import App from "./App";
import 'react-lazy-load-image-component/src/effects/blur.css';

import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./_base.scss";
import store from "./redux/store";

// ReactDOM.render(<App/>,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
