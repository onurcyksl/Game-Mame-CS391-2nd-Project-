import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpLogin from "./SignUpLoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import GamesPage from "./game_page";
import CategoriesPage from "./categories_page";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign_up_login" component={SignUpLogin} />
      <Route path="/game_page" component={GamesPage} />
      <Route path="/categories" component={CategoriesPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
