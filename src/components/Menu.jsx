import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu-title">Star Wars API</h1>
      <span>
        <Link to="/people" className="menu-link">
          Characters
        </Link>
        <Link to="/starships" className="menu-link">
          Starships
        </Link>
      </span>
    </div>
  );
}

export default Menu;
