import React from 'react';
import "../scss/main.scss";

export default function Nav() {
    return (
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
            <a href="/bios">
              <li>Bios</li>
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
    )
}