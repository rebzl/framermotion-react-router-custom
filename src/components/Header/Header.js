import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.scss";

/**
 * history = Actual path in url
 * path = The url we are sending to
 * Change the color letter of the menu when the page is active
 */
const isActive = (history, path) => {
  //   console.log(history);
  if (history.location.pathname === path) {
    return { color: "#10f8e4" };
  }
};

const Header = ({ history }) => {
  console.log(history);
  return (
    <header id="navbar">
      <nav className="container">
        <Link to="/" className="navbar-logo" style={isActive(history, "/")}>
          landscape
        </Link>
        <div className="navbar-menu">
          <Link className="navbar-link" to="/about">
            About
          </Link>

          <Link className="navbar-link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="navbar-link" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);
