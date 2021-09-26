import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import "./Renter.css";

const Renter = (props) => {
  const { img, name, id, address, unit, amount } = props.renter;
  const element = <FontAwesomeIcon icon={faHouseUser} />;
  return (
    <div className="main-cart">
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top mx-auto mt-3" src={img} alt="" />
          <div className="card-body">
            <h4 className="card-title">Name: {name}</h4>
            <div className="text-start">
              <h5>Id: {id}</h5>
              <h5>Home Town: {address}</h5>
              <h5>Unit: {unit}</h5>
              <h5>Rent Amount: {amount}</h5>
            </div>
          </div>
          <div className="card-footer">
            <button
              onClick={() => props.addToCart(props.renter)}
              className=" cart-btn"
            >
              {element} Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renter;
