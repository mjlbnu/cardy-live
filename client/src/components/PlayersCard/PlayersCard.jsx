import React, { useEffect } from "react";
import { getUsers } from "../../actions/UserAction";
import "./PlayersCard.css";
import { useDispatch, useSelector } from "react-redux";
import { UilClipboardNotes } from "@iconscout/react-unicons";
import UserImg from "../../img/img1.png";

const PlayersCard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { users, loading } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="players-card">
      {users.map((user) => {
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
                <button className="button pc-button">Throw</button>
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
