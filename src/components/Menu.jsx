import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu-title">Star Wars API</h1>
      <span>
        <Link to="/people" className="menu-link">
          People
        </Link>
        <Link to="/starship" className="menu-link">
          Starship
        </Link>
      </span>
    </div>
  );
}

export default Menu;
