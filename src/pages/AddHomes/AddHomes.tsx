import axios from "axios";
import React, { FC, useState } from "react";
import { Header } from "../../conponents/Header/Header";
import { displayHouseState } from "../../interfaces";
import "./AddHomes.css";

export const AddHomes: FC = () => {
  const [addHouse, setAddHouse] = useState<displayHouseState>({
    home_name: "",
    home_address: "",
    home_price: 0,
    home_img: "",
    home_disc: "",
  });
  const {
    home_name,
    home_address,
    home_price,
    home_img,
    home_disc,
  }: displayHouseState = addHouse;

  const eventHandler = (e: any) => {
    setAddHouse({ ...addHouse, [e.target.name]: e.target.value });
  };
  const sendIt: any = (e: any): void => {
    e.preventDefault();
    axios.post("http://localhost:4500/homes", {
      home_name,
      home_address,
      home_price,
      home_img,
      home_disc,
    });
    setAddHouse({
      home_name: "",
      home_address: "",
      home_price: 0,
      home_img: "",
      home_disc: "",
    });
  };
  return (
    <div>
      <Header />
      <h1 className="page-bannar">Add Homes</h1>
      <form className="add-homes-forms" onSubmit={(e) => sendIt(e)}>
        <input
          type="text"
          placeholder="Home Name"
          className="half"
          name="name"
          value={home_name}
          onChange={(e) => {
            eventHandler(e);
          }}
        ></input>
        <input
          type="text"
          placeholder="Address"
          className="half"
          name="address"
          value={home_address}
          onChange={(e) => {
            eventHandler(e);
          }}
        ></input>
        <input
          type="number"
          placeholder="price"
          className="half"
          name="price"
          value={home_price}
          onChange={(e) => {
            eventHandler(e);
          }}
        ></input>
        <input
          type="text"
          placeholder="Image URL"
          className="half"
          name="image"
          value={home_img}
          onChange={(e) => {
            eventHandler(e);
          }}
        ></input>
        <textarea
          placeholder="Discription"
          className="full"
          name="disc"
          value={home_disc}
          onChange={(e) => {
            eventHandler(e);
          }}
        ></textarea>
        <input type="submit" className="submit-btn"></input>
      </form>
    </div>
  );
};
