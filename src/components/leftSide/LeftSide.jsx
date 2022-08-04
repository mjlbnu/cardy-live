import React from "react";
import Logo from "../Logo/Logo";
import BoxSearch from "../BoxSearch/BoxSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./LeftSide.css";
import PlayersCard from "../PlayersCard/PlayersCard";

const LeftSide = () => {
  return (
    <div className="LeftSide">
      <Logo />
      <ProfileCard />
      <BoxSearch />
      <PlayersCard />
    </div>
  );
};

export default LeftSide;
