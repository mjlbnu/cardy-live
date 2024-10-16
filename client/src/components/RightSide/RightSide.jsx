import React, { useState, useEffect, useRef } from "react";
import "./RightSide.css";
import { UilSetting } from "@iconscout/react-unicons";
import { UilHome } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";
import { UilEdit } from "@iconscout/react-unicons";
import Chat from "../../img/comment.png";
import Ranking from "../Ranking/Ranking";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/AuthAction";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useSocket } from "../../context/SocketContext";

function RightSide() {
  const [open, setOpen] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const { socket } = useSocket(); // Acessa o contexto

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
  });

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleClearUsersReady = () => {
    socket.emit("clear-users-ready");
  }

  function DropdownItem(props) {
    return (
      <li className="dropdownItem" onClick={props.action}>
        {props.img}
        <a> {props.text} </a>
      </li>
    );
  }

  const handleEditProfile = () => {
    setOpen(!open);
    setModalOpened(true);
  };

  return (
    <div className="RightSide">
      <div className="nav-icons">
        <UilUser className="nav-icons-hover" />
        <UilSetting
          className="menu-trigger nav-icons-hover"
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div
          className={`dropdown-menu ${open ? "active" : "inactive"}`}
          onMouseLeave={() => {
            setOpen(!open);
          }}
        >
          <ul>
            <DropdownItem img={<UilUser />} text={"My Profile"} />
            <DropdownItem
              img={<UilEdit />}
              text={"Edit Profile"}
              action={handleEditProfile}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
            <DropdownItem
             img={<UilSetting />}
             text={"Settings"} 
             action={handleClearUsersReady}
            />
            <DropdownItem
              img={<UilSignout />}
              text={"Logout"}
              action={handleLogOut}
            />
          </ul>
        </div>
      </div>
      <Ranking />
    </div>
  );
}

export default RightSide;
