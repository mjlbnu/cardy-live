import React from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import LeftSide from "../../components/leftSide/LeftSide";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <LeftSide />
      <GameBoard />
      <div className="rightSide">RightSide</div>
    </div>
  );
};

export default Home;
