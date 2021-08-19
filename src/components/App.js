import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Synopsis from "./Synopsis";
import Trailer from "./Trailer";
import Innocent from "./Innocent";
import Press from "./Press";
import Reading from "./Reading";
import Timeline from "./Timeline";
import Screenings from "./Screenings";
import Bios from "./Bios";
import "../scss/main.scss";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Nav />
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
            <Route path="/bios">
              <Bios />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
          <Footer />
      </Router>
    </>
  );
};

export default App;
