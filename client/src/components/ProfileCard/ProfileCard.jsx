import React, { useState, useEffect, useRef } from "react";
import Cover from "../../img/cover2.jpg";
import ProfileImg from "../../img/caco.jpg";
import "./ProfileCard.css";
import Statements from "../Statements/Statements";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../actions/UserAction";
import { UilBars } from "@iconscout/react-unicons";
import { useSocket } from "../../context/SocketContext";
import { logOut } from "../../actions/AuthAction";
import Dropdown from "../Dropdown/Dropdown";

function ProfileCard() {
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);
  const [modalStOpened, setModalStOpened] = useState(false);
  const { profile, loading } = useSelector((state) => state.userReducer);
  const { user } = useSelector((state) => state.authReducer.authData);
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  const { socket } = useSocket(); // Acessa o contexto

  useEffect(() => {
    dispatch(getProfile(user._id));
  }, []);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
  });

  const handleEditProfile = () => {
    setOpen(!open);
    setModalOpened(true);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleClearUsersReady = () => {
    socket.emit("clear-users-ready");
  }

  if (!profile) return null;

  return (
    <div className="ProfileCard">
      {loading ? (
        "Fetching profile"
      ) : (
        <>
          <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={ProfileImg} alt="" />
          </div>
          <div className="ProfileName">
            <span>
              {profile[0].firstname}
            </span>
            <div className="a-button">
              <UilBars onClick={() => {
                setOpen(!open);
              }} /> 
            </div>
          </div>
          <Statements
            modalStOpened={modalStOpened}
            setModalStOpened={setModalStOpened}
          />
          <Dropdown
            open={open}
            setOpen={setOpen}
            handleEditProfile={handleEditProfile}
            handleClearUsersReady={handleClearUsersReady}
            handleLogOut={handleLogOut}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            setModalStOpened={setModalStOpened}
          />
        </>
      )}
    </div>
  );
}

export default ProfileCard;
