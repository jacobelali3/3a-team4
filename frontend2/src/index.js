import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Home from "./Home/Home";

import News from "./News/News";

import Maps from "./Map/Maps";

import Table from "./Table/Table";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />

      <Switch>
        <Route exact path="/" component={Maps} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Table" component={Table} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
