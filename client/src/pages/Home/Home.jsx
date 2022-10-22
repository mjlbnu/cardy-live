import { useState, React } from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import LeftSide from "../../components/LeftSide/LeftSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";
const Home = () => {
  const [showStatements, setShowStatements] = useState(false);

  return (
    <div className="Home">
      <LeftSide />
      <GameBoard />
      <RightSide />
    </div>
  );
};

export default Home;
