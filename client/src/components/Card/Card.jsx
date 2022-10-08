import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="circle">
        <h2>01</h2>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="button card-button">Choose</button>
      </div>
    </div>
  );
}

export default Card;
