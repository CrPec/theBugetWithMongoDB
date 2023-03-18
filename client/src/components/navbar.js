import React from "react";
import { getRandomColor } from "./../Utils";
import "../css/navbar.css";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

const stringColor = (str) => {
  return str.split("").map((char, i) => {
    return (
      <span style={{ color: getRandomColor() }} key={i}>
        {char}
      </span>
    );
  });
};

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div className="navbarContainer">
      <nav className="navbar fixed-top">
        <NavLink className="navbar-brand" to="/">
          <div className="logo">{stringColor("theBuget")}</div>
        </NavLink>
        <NavLink className="navbar-brand" to="/create">
          <div className="createItem" title="Add new item"></div>
        </NavLink>
      </nav>
    </div>
  );
}
