import React from "react";
import { Link } from "react-router-dom";
import { addHouseState } from "../../interfaces";
import "./ListHomes.css";

interface Props {
  house: addHouseState;
  deleteHouse(house_id: number): void;
}

export const ListHomes = ({ house, deleteHouse }: Props) => {
  let url: string = `/houses/${house.home_id}`;
  return (
    <div className="homes">
      <h2 className="home-title">{house.home_name}</h2>
      <div className="img-con">
        <img
          src={house.home_img}
          alt={house.home_name}
          className="home-img"
        ></img>
      </div>
      <p className="home-price">${house.home_price}</p>
      <div className="btn-con">
        <button
          className="delete-btn"
          onClick={() => deleteHouse(house.home_id)}
        >
          X
        </button>
        <button className="view-btn">
          <Link className="view-link" to={url}>
            View
          </Link>
        </button>
      </div>
    </div>
  );
};
