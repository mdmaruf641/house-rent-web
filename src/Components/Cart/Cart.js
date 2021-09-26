import React from "react";
import Name from "../Name/Name";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // total amount count
  let total = 0;
  for (const rent of cart) {
    total = total + rent.amount;
  }
  // name load
  let name = [];
  for (let renter of cart) {
    name = name + renter.name;
  }
  return (
    <div className="cart">
      <div className="cart-summery">
        <h2>Rent Calculaion</h2>
        <h3>Renter Added: {props.cart.length}</h3>
        <h4>Total: {total}</h4>
      </div>
      <div className="text-start cart-dtl">
        {cart.map((name) => (
          <Name name={name}></Name>
        ))}
      </div>
    </div>
  );
};

export default Cart;
