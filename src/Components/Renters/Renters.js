import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Renter from "../Renter/Renter";
import "./Renters.css";

const Renters = () => {
  // data load
  const [renters, setRenters] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./Renters.JSON")
      .then((res) => res.json())
      .then((data) => setRenters(data));
  }, []);

  // EVENT HANDLER FOR BUTTON
  const addToCart = (rent) => {
    const newCart = [...cart, rent];
    setCart(newCart);
  };

  return (
    <div className="main-container container mt-4">
      <div className="renters-container">
        <div className="renter">
          {renters.map((renter) => (
            <Renter
              key={renter.id}
              renter={renter}
              addToCart={addToCart}
            ></Renter>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Renters;
