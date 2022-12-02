import React, { useEffect } from "react";
import { getUsers } from "../../actions/UserAction";
import "./PlayersCard.css";
import { useDispatch, useSelector } from "react-redux";
import { UilClipboardNotes } from "@iconscout/react-unicons";
import UserImg from "../../img/img1.png";
import { getGamerStatements } from "../../actions/StatementsAction";
import { startTimer } from "../../actions/TimerAction";

const PlayersCard = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userReducer);

  const handleThrow = async (e) => {
    e.preventDefault();
    const gamerId = e.target.dataset.gamerid;
    dispatch(getGamerStatements(gamerId));
    dispatch(startTimer(10));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
                    <div className="online-dot"></div>
                    <img src={UserImg} alt="" className="gamer-image" />
                    <div className="name">
                      <span>{user.firstname}</span>
                      <span>Online</span>
                    </div>
                  </div>
                  <div className="btn-container">
                    <UilClipboardNotes />
                    <button
                      className="button pc-button"
                      data-gamerid={user._id}
                      onClick={handleThrow}
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
