import React, { FC, useState, useEffect } from "react";
import "./House.css";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { addHouseState } from "../../interfaces";

export const House: FC = () => {
  const [data, setData] = useState<addHouseState>();
  const { id } = useParams();
  const getHouse = (): void => {
    axios
      .get(`http://localhost:4500/homes/${id}`)
      .then((res: AxiosResponse) => {
        let newData = res.data;
        setData(newData);
      });
  };
  useEffect(() => {
    getHouse();
  }, []);
  if (!data) return <h1>Loading</h1>;
  return (
    <div>
      <h1>{data?.home_address}</h1>
    </div>
  );
};
