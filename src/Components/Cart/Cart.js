import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let name = [];
  for (const rent of cart) {
    total = total + rent.amount;
  }
  for (let renter of cart) {
    name = name + renter.name;
  }

  return (
    <div className="cart">
      <h2>Rent Calculaion</h2>
      <h3>Renter Added: {props.cart.length}</h3>
      <div className="text-start ms-3">
        <h4>Total: {total}</h4>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
