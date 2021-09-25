import React, { useEffect, useState } from "react";
import Renter from "../Renter/Renter";
import "./Renters.css";

const Renters = () => {
  // data load
  const [renters, setRenters] = useState([]);
  useEffect(() => {
    fetch("./Renters.JSON")
      .then((res) => res.json())
      .then((data) => setRenters(data));
  }, []);
  return (
    <div className="main-container container">
      <div className="renters-container">
        <h1>hey {renters.length} renters</h1>
        <div className="renter">
          {renters.map((renter) => (
            <Renter renter={renter}></Renter>
          ))}
        </div>
      </div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Renters;
