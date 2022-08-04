import React from "react";
import "./PlayersCard.css";
import { Gamers } from "../../Data/GamersData";

const PlayersCard = () => {
  return (
    <div className="PlayersCard">
      {Gamers.map((gamer, id) => {
        return (
          <div className="Gamer">
            <div>
              <img src={gamer.img} alt="" className="GamerImg" />
              <div className="name">
                <span>{gamer.name}</span>
                <span>@{gamer.username}</span>
              </div>
            </div>
            <button className="button pc-button">Reveal</button>
          </div>
        );
      })}
    </div>
  );
};

export default PlayersCard;
