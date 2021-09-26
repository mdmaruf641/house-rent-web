import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>
          The <span>Royal</span> House
        </h1>
        <p>
          Holding No-754, Road- Y block, Post office- Firozshah, Thana- Khulshi,
          Chittagong, Bangladesh.
        </p>
        <h2>
          Total Rent Budget: 204,000<small> BDT</small>
        </h2>
      </div>
    </div>
  );
};

export default Header;
