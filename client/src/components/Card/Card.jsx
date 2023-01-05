import React from "react";
import "./Card.css";
import * as StatementsApi from "../../api/StatementsRequest";
import { useSelector } from "react-redux";

const Card = (props) => {
  const timer = useSelector((state) => state.timerReducer);

  const handleChoose = async (e) => {
    e.preventDefault();
    
    console.log("Tempo:", timer.seconds);
    console.log("Escolheu:", e.target.dataset.index);
    const userId = e.target.dataset.userid;
    const statement = await StatementsApi.getGamerStatements(userId, true);
    console.log('Correta:', statement.data.lie);
    +e.target.dataset.index === statement.data.lie
      ? console.log("Acerto miseravi") 
      : console.log("Erroooou!")
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
          data-index={props.index}
          onClick={handleChoose}
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default Card;
