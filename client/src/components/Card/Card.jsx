import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="circle">
        <h2>{props.index}</h2>
      </div>
      <div className="content">
        <p>{props.text}</p>
        <button className="button card-button">Choose</button>
      </div>
    </div>
  );
};

export default Card;
