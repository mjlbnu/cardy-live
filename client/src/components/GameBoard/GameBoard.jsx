import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import "./GameBoard.css";
import { useSelector } from "react-redux";
import Timer from "../Timer/Timer";

const GameBoard = () => {
  const timer = useSelector((state) => state.timerReducer);

  const renderTimer = () => {
    //return <Timer data={timer.seconds} />;
  };

  return (
    <div className="GameBoard">
      {renderTimer()}
      <CardsContainer />
    </div>
  );
};

export default GameBoard;
