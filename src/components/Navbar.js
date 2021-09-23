import React from "react";
import Favorite from "./Favorite";
import Generator from "./Generator";
import Random from "./Random";
import Home from "./Home";

import Colorp from "../context/coloercontext";
import "./style/Navbar.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Router>
        <ul className="navbar">
          <li className="title">color generator</li>

          <li className="pages">
            <Link to="/random">random</Link>
          </li>
          <li className="pages">
            <Link to="/generator">Generator</Link>
          </li>
          <li className="pages">
            <Link to="/favorite">Favorite</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/generator">
            <Colorp>
              <Generator />
            </Colorp>
          </Route>
          <Route exact path="/favorite">
            <Colorp>
              <Favorite />
            </Colorp>
          </Route>
          <Route exact path="/random">
            <Colorp>
              <Random />
            </Colorp>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navbar;
