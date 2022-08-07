import React from "react";
import "./Ranking.css";
import { RankingData } from "../../Data/RankingData";

const Ranking = () => {
  return (
    <div className="Ranking">
      <h3>Ranking</h3>
      {RankingData.map((player) => {
        return (
          <div className="player">
            <span>{player.name}</span>
            <span>{player.points} points</span>
          </div>
        );
      })}
    </div>
  );
};

export default Ranking;
