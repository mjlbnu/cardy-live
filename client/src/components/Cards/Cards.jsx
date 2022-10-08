import React from "react";
import "./Cards.css";
import Card1 from "../../img/card1.svg";
import Card2 from "../../img/card2.svg";
import Card3 from "../../img/card3.svg";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <img src={Card1} alt="" />
        <span>{text}</span>
      </div>
      <div className="card">
        <img src={Card2} alt="" />
      </div>
      <div className="card">
        <img src={Card3} alt="" />
      </div>
    </div>
  );
}

export default Cards;
