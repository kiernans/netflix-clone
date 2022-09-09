import React, { FC } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="left-items">
        <Link to="/">
          <div>Netflix</div>
        </Link>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="#">TV Shows</Link>
        <Link to="#">Movies</Link>
        <Link to="#">New & Popular</Link>
        <Link to="#">My List</Link>
        <Link to="#">Browse by Languages</Link>
      </div>
      <div className="right-items">
        <input placeholder="Search..."></input>
        <Link to="#">Kids</Link>
        <Link to="#">DVD</Link>
        <div>Notification</div>
        <div>Profile</div>
      </div>
    </div>
  );
};

export default Navbar;
