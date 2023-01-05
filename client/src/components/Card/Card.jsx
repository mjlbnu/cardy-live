import React from "react";
import "./Card.css";

const Card = (props) => {
  const handleChoose = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.userid);
  };

  return (
    <div className="card">
      <div className="circle">
        <h2>{props.index}</h2>
      </div>
      <div className="content">
        <p>{props.text}</p>
        <button
          className="button card-button"
          data-userid={props.userId}
          onClick={handleChoose}
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default Card;
