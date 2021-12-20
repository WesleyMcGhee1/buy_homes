import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home: FC = () => {
  return (
    <div>
      <header>
        <div className="header-con">
          <h1 className="bannar">Welcome to ByHomes</h1>
          <p className="disc">
            Where you can buy all the best homes in one place!
          </p>
          <Link to="/market">
            <button className="link-btn">Buy Homes!</button>
          </Link>
        </div>
      </header>
    </div>
  );
};
