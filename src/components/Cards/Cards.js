import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import Card from "./Card";
import axios from "axios";

/**Card components */
const Cards = () => {
  const [data, setData] = useState({});
  const [prevData, setPrevData] = useState({});

  useEffect(() => {
    axios
      .get("https://mh34-api.vercel.app/temp/data.json")
      .then((resp) => {
        setData(resp.data[resp.data.length - 1]);
        setPrevData(resp.data[resp.data.length - 2]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="title p1">Current stats:</div>
      <div className="card-container">
        {data.confirmed & prevData.confirmed ? (
          <>
            <Card
              value={data.confirmed}
              title="Confirmed"
              bg="confirmed"
              inc={data.confirmed - prevData.confirmed}
            />
            <Card
              value={data.active}
              title="Active"
              bg="active"
              inc={data.active - prevData.active}
            />
            <Card
              value={data.recovered}
              title="Recovred"
              bg="recovred"
              inc={data.recovered - prevData.recovered}
            />
            <Card
              value={data.deceased}
              title="Deceased"
              bg="deceased"
              inc={data.deceased - prevData.deceased}
            />
          </>
        ) : (
          <PulseLoader loading color="#AADEF0" />
        )}
      </div>
    </div>
  );
};

export default Cards;
