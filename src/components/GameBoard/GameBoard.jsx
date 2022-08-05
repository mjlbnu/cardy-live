import React from "react";
import Cards from "../Cards/Cards";
import Statements from "../Statements/Statements";
import "./GameBoard.css";

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <Statements />
      <Cards />
    </div>
  );
};

export default GameBoard;
