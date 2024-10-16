import React from "react";
import "./Card.css";
import { startTimer } from "../../actions/TimerAction";
import { setLie } from "../../actions/StatementsAction";
import * as StatementsApi from "../../api/StatementsRequest";
import { useDispatch, useSelector } from "react-redux";
import { savePlayerPoints } from "../../actions/RankingAction";
import { useState } from "react";
import { useSocket } from "../../context/SocketContext";

const Card = (props) => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timerReducer);
  const { lie } = useSelector((state) => state.lieReducer);
  const { user } = useSelector((state) => state.authReducer.authData);
  const [hit, setHit] = useState(false);
  const { socket } = useSocket(); // Acessa o contexto

  const handleChoose = async (e) => {
    e.preventDefault();

    const userId = e.target.dataset.userid;
    const statement = await StatementsApi.getGamerStatements(userId, true);

    const playerPoints = {
      gameId: "id1",
      userId: user._id,
      points: timer.seconds,
    };

    if (+e.target.dataset.index === statement.data.lie) {
      setHit(true);
      await dispatch(savePlayerPoints(playerPoints));
    }

    socket.emit("send-userReady", playerPoints);
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
        <h2 style={{ fontSize: lie === props.index ? "1.5rem" : "4.5rem" }}>
          {lie === props.index && <p>Here's the lie!</p>}
          {lie === props.index && hit && <p>Acertou miseravi!</p>}
          {lie === props.index && !hit && <p>Erroooou!</p>}
          {lie !== props.index && <p>{props.index}</p>}
        </h2>
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
      </div>
    </div>
  );
};

export default Card;
