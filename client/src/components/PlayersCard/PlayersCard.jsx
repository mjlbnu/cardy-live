import React, { useEffect, useState } from "react";
import { getPlayers } from "../../actions/UserAction";
import "./PlayersCard.css";
import { useDispatch, useSelector } from "react-redux";
import UserImg from "../../img/img1.png";
import CardsReady from "../CardsReady/CardsReady";
import CardsPlayed from "../CardsPlayed/CardsPlayed";
import CardsEmpty from "../CardsEmpty/CardsEmpty"
import {
  getGamerStatements,
  setGamerStatements,
  setLie,
} from "../../actions/StatementsAction";
import { startTimer } from "../../actions/TimerAction";
import { Config } from "../../Config/Config";
import { useSocket } from "../../context/SocketContext";

// Recebe o searchTerm como prop
const PlayersCard = ({ searchTerm }) => {
  const { socket } = useSocket(); // Acessa o contexto
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userReducer);
  const { user } = useSelector((state) => state.authReducer.authData);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const handlePlayButton = async (e) => {
    e.preventDefault();
    const gamerId = e.target.dataset.gamerid;
    socket.emit("send-setLie");
    dispatch(getGamerStatements(gamerId, socket));
    socket.emit("send-setTimer");
  };

  useEffect(() => {
    dispatch(getPlayers());
  }, []);

  useEffect(() => {
    socket.emit("new-user-add", user._id);
    socket.on("get-users", (users) => {
      setOnlineUsers(users);
    });

    socket.on("get-gamerStatements", (statements) => {
      dispatch(setGamerStatements(statements));
    });

    socket.on("get-setLie", (lie) => {
      dispatch(setLie(lie));
    });

    socket.on("get-setTimer", () => {
      dispatch(startTimer(Config.timerDuration));
    });

    // Limpeza do socket ao desmontar o componente
    return () => {
      socket.off("get-users");
      socket.off("get-gamerStatements");
      socket.off("get-setLie");
      socket.off("get-setTimer");
    };
  }, [user]);

  const checkOnlineStatus = (userId) => onlineUsers.some((user) => user.userId === userId);

  const isAdmin = () => user.isAdmin;

  if (!users) return null;

  // Filtra os players
  const filteredUsers = users.filter((user) =>
    user.firstname.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="players-card">
      {loading
        ? "Fetching players"
        : filteredUsers.map((user) => {
          return (
            <div key={user._id}>
              <div className="gamer">
                <div>
                  <div
                    className={`online-dot ${!checkOnlineStatus(user._id) ? "offline-dot" : ""
                      }`}
                  ></div>
                  <img src={UserImg} alt="" className="gamer-image" />
                  <div className="name">
                    <span>{user.firstname}</span>
                    <span>
                      {checkOnlineStatus(user._id) ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
                <div className="btn-container">
                  {user.statement.length > 0 ? (
                    user.statement[0].played ? <CardsPlayed /> : <CardsReady />
                  ) : (
                    <CardsEmpty />
                  )}
                  {isAdmin() && (
                    <button
                      className="button pc-button"
                      data-gamerid={user._id}
                      onClick={handlePlayButton}
                      disabled={user.statement.length === 0}
                    >
                      Play
                    </button>
                  )}
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
