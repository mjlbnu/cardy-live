import React, { useState, useEffect, useRef } from "react";
import Cover from "../../img/cover2.jpg";
import ProfileImg from "../../img/caco.jpg";
import "./ProfileCard.css";
import Statements from "../Statements/Statements";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../actions/UserAction";
import RightSide from "../../components/RightSide/RightSide";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilSetting } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";
import { UilEdit, UilBars } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useSocket } from "../../context/SocketContext";
import { logOut } from "../../actions/AuthAction";

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

  function DropdownItem(props) {
    return (
      <li className="dropdownItem" onClick={props.action}>
        {props.img}
        <a> {props.text} </a>
      </li>
    );
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
              <UilAngleDown size="30" onClick={() => {
                setOpen(!open);
              }}/>
            </div>
          </div>
          <Statements
            modalStOpened={modalStOpened}
            setModalStOpened={setModalStOpened}
          />
          <div className="nav-icons">
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
        </>
      )}
    </div>
  );
}

export default ProfileCard;
