import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Synopsis from './Synopsis';
import Trailer from './Trailer';
import Innocent from './Innocent';
import Artwork from './Artwork';
import Reading from './Reading';
import Timeline from './Timeline';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
        <div id="mobile-menu">

    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a href="/"><li>Home</li></a>
      <a href="/synopsis"><li>Synopsis</li></a>
      <a href="/trailer"><li>Trailer</li></a>
      <a href="/innocent"><li>Innocent?</li></a>
      <a href="/artwork"><li>Artwork</li></a>
      <a href="/reading"><li>Reading</li></a>
      <a href="/timeline"><li>Timeline</li></a>
    </ul>
  </div>
          <ul id="desktop-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/synopsis">Synopsis</Link>
            </li>
            <li>
              <Link to="/trailer">Trailer</Link>
            </li>
            <li>
              <Link to="/innocent">Innocent?</Link>
            </li>
            <li>
              <Link to="/artwork">Artwork</Link>
            </li>
            <li>
              <Link to="/reading">Reading</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
          </ul>
        </nav>

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
          <Route path="/artwork">
            <Artwork />
          </Route>
          <Route path="/reading">
            <Reading />
          </Route>
          <Route path="/timeline">
            <Timeline />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <footer> footer </footer>
    </Router>
    
  )
}

export default App;