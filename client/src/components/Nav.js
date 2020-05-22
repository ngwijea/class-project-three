
import React from "react";
import { Link } from "react-router-dom";
import Navbar from './NavBar';

function Nav() {
  return (
    <ul className="nav nav-tabs nav-fill">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Five Star Foodies
        </Link>
      </li>
      <li className="nav-item">
        <Navbar />
        {/* <Link
          to="/login"
          className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link> */}
      </li>
    </ul>
  );
}

export default Nav;