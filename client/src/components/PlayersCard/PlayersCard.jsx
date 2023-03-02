import React, { useEffect, useRef, useState } from "react";
import { getUsers } from "../../actions/UserAction";
import "./PlayersCard.css";
import { useDispatch, useSelector } from "react-redux";
import { UilClipboardNotes, UilClipboardBlank } from "@iconscout/react-unicons";
import UserImg from "../../img/img1.png";
import {
  getGamerStatements,
  setGamerStatements,
  setLie,
} from "../../actions/StatementsAction";
import { startTimer } from "../../actions/TimerAction";
import { Config } from "../../Config/Config";
import { io } from "socket.io-client";

const PlayersCard = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userReducer);
  const { user } = useSelector((state) => state.authReducer.authData);
  const socket = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);

  const handleThrow = async (e) => {
    e.preventDefault();
    const gamerId = e.target.dataset.gamerid;
    //dispatch(setLie(null));
    socket.current.emit("send-setLie");
    dispatch(getGamerStatements(gamerId, socket));
    //dispatch(startTimer(Config.timerDuration));
    socket.current.emit("send-setTimer");
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);

    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });

    socket.current.on("get-gamerStatements", (statements) => {
      dispatch(setGamerStatements(statements));
    });

    socket.current.on("get-setLie", (lie) => {
      dispatch(setLie(lie));
    });

    socket.current.on("get-setTimer", () => {
      dispatch(startTimer(Config.timerDuration));
    });
  }, [user]);

  const checkOnlineStatus = (userId) => {
    const online = onlineUsers.find((user) => user.userId === userId);
    return online ? true : false;
  };

  if (!users) return null;

  return (
    <div className="players-card">
      {loading
        ? "Fetching players"
        : users.map((user) => {
            return (
              <div key={user._id}>
                <div className="gamer">
                  <div>
                    <div
                      className={`online-dot ${
                        !checkOnlineStatus(user._id) ? "offline-dot" : ""
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
                    {checkOnlineStatus(user._id) ? (
                      <UilClipboardNotes color="rgb(28, 153, 24)" />
                    ) : (
                      <UilClipboardBlank color="grey" />
                    )}
                    <button
                      className="button pc-button"
                      data-gamerid={user._id}
                      onClick={handleThrow}
                      disabled={!checkOnlineStatus(user._id)}
                    >
                      Throw
                    </button>
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
