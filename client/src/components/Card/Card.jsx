import React from "react";
import "./Card.css";
import { startTimer } from "../../actions/TimerAction";
import { setLie } from "../../actions/StatementsAction";
import * as StatementsApi from "../../api/StatementsRequest";
import { useDispatch, useSelector } from "react-redux";
import { getRankingAgr, savePlayerPoints } from "../../actions/RankingAction";
import { useState } from "react";

const Card = (props) => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timerReducer);
  const { lie } = useSelector((state) => state.lieReducer);
  const { user } = useSelector((state) => state.authReducer.authData);
  const [hit, setHit] = useState(false);

  const handleChoose = async (e) => {
    e.preventDefault();

    console.log("Tempo:", timer.seconds);
    console.log("Escolheu:", e.target.dataset.index);
    const userId = e.target.dataset.userid;
    const statement = await StatementsApi.getGamerStatements(userId, true);
    console.log("Correta:", statement.data.lie);

    if (+e.target.dataset.index === statement.data.lie) {
      setHit(true);
      const playerPoints =  {
        gameId: "id1",
        userId: user._id,
        points: timer.seconds
      };
      dispatch(savePlayerPoints(playerPoints));
      dispatch(getRankingAgr);
    };

    dispatch(startTimer(0));
    dispatch(setLie(statement.data.lie));
  };

  return (
    <div className="card">
      <div
        className={`circle ${lie === props.index ? "circle_lie" : ""}`}
        style={{
          background:
            lie === props.index
              ? "linear-gradient(180deg, #f41a1a 0%, #690dd3 50%)"
              : "linear-gradient(180deg, #f4971a 0%, #f261b0 50%)",
        }}
      >
        <h2>{props.index}</h2>
      </div>
      <div className="content">
        <p>{props.text}</p>
        {lie === null && (
          <button
            className="button card-button"
            data-userid={props.userId}
            data-index={props.index}
            onClick={handleChoose}
          >
            Choose
          </button>
        )}
        {lie === props.index && (
          <p>Here's the lie!</p>
        )}
        {lie === props.index && hit && (
          <p>Acertou miseravi!</p>
        )}
        {lie === props.index && !hit && (
          <p>Erroooou!</p>
        )}
      </div>
    </div>
  );
};

export default Card;
