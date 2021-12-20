import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export const Header: FC = () => {
  return (
    <div className="head">
      <h1 className="logo">Buy Homes</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/market">
            Market
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add">
            Add House
          </Link>
        </li>
      </ul>
    </div>
  );
};
