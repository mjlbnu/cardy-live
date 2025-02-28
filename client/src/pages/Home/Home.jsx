import { React } from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import LeftSide from "../../components/LeftSide/LeftSide";
import "./Home.css";
import { SocketProvider } from "../../context/SocketContext";
const Home = () => {

  return (
    <SocketProvider>
      <div className="Home">
        <LeftSide />
        <GameBoard />
      </div>
    </SocketProvider>
  );
};

export default Home;
