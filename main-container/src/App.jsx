import React from "react";
import ReactDOM from "react-dom";
import {LoginComponent} from 'login/LoginComponent'
import { ProductComponent } from 'products/ProductComponent'

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: main-container</div>
    <LoginComponent/>
    <ProductComponent msg="(called from main-container service)"/>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
