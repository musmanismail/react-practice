import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link className="btn btn-success" to="/">
            Sum
          </Link>
          <Link className="btn btn-success" to="/items-list">
            Items List
          </Link>
          <Link className="btn btn-success" to="/people">
            People
          </Link>
          <Link className="btn btn-success" to="/person-list">
            Perons List
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
