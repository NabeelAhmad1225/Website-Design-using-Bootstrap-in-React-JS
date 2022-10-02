import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light">
          Funda of Wed IT
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-light">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/about" className="nav-link text-light">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact" className="nav-link text-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
