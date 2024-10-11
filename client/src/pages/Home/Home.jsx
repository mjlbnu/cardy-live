import { React } from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import LeftSide from "../../components/LeftSide/LeftSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";
import { SocketProvider } from "../../context/SocketContext";
const Home = () => {

  return (
    <SocketProvider>
      <div className="Home">
        <LeftSide />
        <GameBoard />
        <RightSide />
      </div>
    </SocketProvider>
  );
};

export default Home;
