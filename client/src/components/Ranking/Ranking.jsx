import React from "react";
import "./Ranking.css";
import { RankingData } from "../../Data/RankingData";
import Timer from "../Timer/Timer";
import { useSelector } from "react-redux";

const Ranking = () => {
  const timer = useSelector((state) => state.timerReducer);

  const renderTimer = () => {
    return <Timer />;
  }

  return (
    <div className="Ranking">
      <h3>Ranking</h3>
      {RankingData.map((player) => {
        return (
          <div className="player" key={player.points}>
            <span>{player.name}</span>
            <span>{player.points} points</span>
          </div>
        );
      })}
    </div>
  );
};

export default Ranking;
