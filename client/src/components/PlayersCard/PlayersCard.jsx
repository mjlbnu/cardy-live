import React from "react";
import "./PlayersCard.css";
import { Gamers } from "../../Data/GamersData";
import { UilClipboardNotes } from "@iconscout/react-unicons";

const PlayersCard = () => {
  return (
    <div className="players-card">
      {Gamers.map((gamer, id) => {
        return (
          <div key={gamer.id}>
            <div className="gamer">
              <div>
                <div className="online-dot"></div>
                <img src={gamer.img} alt="" className="gamer-image" />
                <div className="name">
                  <span>{gamer.name}</span>
                  <span>Online</span>
                </div>
              </div>
              <div className="btn-container">
                <UilClipboardNotes />
                <button className="button pc-button">Throw</button>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PlayersCard;
