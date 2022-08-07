import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import Statements from "../Statements/Statements";
import "./GameBoard.css";

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <Statements />
      <CardsContainer />
    </div>
  );
};

export default GameBoard;
