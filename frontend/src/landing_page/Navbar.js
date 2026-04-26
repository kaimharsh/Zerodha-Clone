import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const navStyle = ({ isActive }) => ({
    color: isActive ? "#387ed1" : "#444",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
      <div className="container p-2">
        {/* LOGO → HOME → NEVER BLUE */}
        <Link className="navbar-brand" to="/">
          <img src="media/image/logo.svg" style={{ width: "30%" }} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" style={navStyle}>
                Signup
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link" style={navStyle}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/products" className="nav-link" style={navStyle}>
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link" style={navStyle}>
                Pricing
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/support" className="nav-link" style={navStyle}>
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
