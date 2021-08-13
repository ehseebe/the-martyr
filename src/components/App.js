import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Synopsis from "./Synopsis";
import Trailer from "./Trailer";
import Innocent from "./Innocent";
import Press from "./Press";
import Reading from "./Reading";
import Timeline from "./Timeline";
import Screenings from "./Screenings";
import "../scss/main.scss";

const App = () => {
  return (
    <>
        <Router>
        <nav>
          <div id="mobile-menu">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/synopsis">
                <li>Synopsis</li>
              </a>
              <a href="/trailer">
                <li>Trailer</li>
              </a>
              {/* <a href="/innocent"><li>Was He Innocent?</li></a> */}
              <a href="/timeline">
                <li>Timeline</li>
              </a>
              <a href="/resources">
                <li>Resources</li>
              </a>
              <a href="/screenings">
                <li>Screenings</li>
              </a>
              <footer> © Anacolutha 2021. All rights reserved. </footer>
            </ul>
          </div>
          {/* <ul id="desktop-menu">
            <li>
              <Link to="/synopsis">Synopsis</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/reading">Resources</Link>
            </li>
            <li>
              <Link to="/trailer">Trailer</Link>
            </li>

            <li>
              <Link to="/screenings">Screenings</Link>
            </li>
          </ul> */}
        </nav>
        <div className="container">

        <Switch>
          <Route path="/synopsis">
            <Synopsis />
          </Route>
          <Route path="/trailer">
            <Trailer />
          </Route>
          <Route path="/innocent">
            <Innocent />
          </Route>
          <Route path="/press">
            <Press />
          </Route>
          <Route path="/resources">
            <Reading />
          </Route>
          <Route path="/timeline">
            <Timeline />
          </Route>
          <Route path="/screenings">
            <Screenings />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
