import React from 'react';
import Favorite from './Favorite'
import Generator from './Generator'
import Random from './Random'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <Router>

        <ul>
            <li>
            color generator
            </li>
            <li>
            <Link to="/random">random</Link>
            </li>
            <li>
            <Link to="/generator">Generator</Link>
            </li>
            <li>
            <Link to="/favorite">Favorite</Link>
            </li>
        </ul>

        <Switch>
          <Route path="/generator">
            <Generator />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/random">
            <Random />
          </Route>
        </Switch>

        </Router>


        </>
    )
    };

export default Navbar
