import React from "react";
import Logo from "../Logo/Logo";
import BoxSearch from "../BoxSearch/BoxSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./LeftSide.css";

const LeftSide = () => {
  return (
    <div className="LeftSide">
      <Logo />
      <ProfileCard />
      <BoxSearch />
    </div>
  );
};

export default LeftSide;
