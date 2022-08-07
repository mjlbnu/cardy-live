import React from "react";
import "./RightSide.css";
import { UilSetting } from "@iconscout/react-unicons";
import { UilHome } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import Chat from "../../img/comment.png";
import Ranking from "../Ranking/Ranking";

function RightSide() {
  return (
    <div className="RightSide">
      <div className="nav-icons">
        <UilHome />
        <UilUser />
        <img src={Chat} alt="" />
        <UilSetting />
      </div>
      <Ranking />
    </div>
  );
}

export default RightSide;
