import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () => { 
  return (
    <header>
      <nav>
        <h6 className="logo">
          <Link to="/">Y</Link>
        </h6>
        <div className="nav-elements">
          <h4 className="main-title">
            <Link to="/">Hacker News</Link>
          </h4>
          <ul className="nav-links">
            <li>
              <Link to="newest">new</Link>
            </li>
            <li>
              <Link to="front">past</Link>
            </li>
            <li>
              <Link to="newcomments">comments</Link>
            </li>
            <li>
              <Link to="ask">ask</Link>
            </li>
            <li>
              <Link to="show">show</Link>
            </li>
            <li>
              <Link to="jobs">jobs</Link>
            </li>
            <li>
              <Link to="submit">submit</Link>
            </li>
          </ul>
        </div>
        <p className="login">
          <Link to="login">login</Link>
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
