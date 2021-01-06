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
          <ul>
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
              <Link to="/innocent">Innocent</Link>
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