import axios, { AxiosResponse } from "axios";
import React, { FC, useState, useEffect } from "react";
import { Header } from "../../conponents/Header/Header";
import { ListHomes } from "../../conponents/ListHomes/ListHomes";
import { addHouseState } from "../../interfaces";
import "./Market.css";

export const Market: FC = () => {
  const [data, setData] = useState<addHouseState[]>([]);

  const getHouses = (): void => {
    axios.get("http://localhost:4500/homes").then((res: AxiosResponse) => {
      let newData: addHouseState[] = res.data;
      setData(newData);
    });
  };

  const deleteHouses = (house_id: number): void => {
    axios
      .delete(`http://localhost:4500/homes/${house_id}`)
      .then((res: AxiosResponse) => {
        setData(
          data.filter((datas: addHouseState): any => datas.home_id !== house_id)
        );
      });
  };

  useEffect((): void => {
    getHouses();
  }, []);
  return (
    <div>
      <Header />
      <h1 className="page-bannar">Market</h1>
      <div className="market-con">
        {data.map((house: addHouseState, key: number) => {
          return (
            <ListHomes key={key} house={house} deleteHouse={deleteHouses} />
          );
        })}
      </div>
    </div>
  );
};
