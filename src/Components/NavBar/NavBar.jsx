import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ search, setSearch }) => {
  return (
    <div className="nav-div">
      <div className="logo">
        <h1>Xpolre</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-btn">
          Home
        </Link>
        <Link to="/movies" className="nav-btn">
          Movies
        </Link>
        <Link to="/series" className="nav-btn">
          Series
        </Link>
      </div>
      <div className="user-icon">
        <img src="me.jpg" alt="User" />
      </div>
    </div>
  );
};

export default NavBar;
