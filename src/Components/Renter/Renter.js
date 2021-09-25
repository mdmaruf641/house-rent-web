import React from "react";
import "./Renter.css";

const Renter = (props) => {
  console.log(props.renter.img);
  return (
    <div>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={props.renter.img} alt="" />
          <div className="card-body">
            <h4 className="card-title">Name: {props.renter.name}</h4>
            <h5>Id: {props.renter.id}</h5>
            <h5>Home Town: {props.renter.address}</h5>
            <h5>Unit: {props.renter.unit}</h5>
            <h5>Rent Amount: {props.renter.amount}</h5>
          </div>
          <div className="card-footer">
            <button className=" cart-btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renter;
