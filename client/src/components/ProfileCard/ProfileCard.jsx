import React, { useState } from "react";
import Cover from "../../img/cover2.jpg";
import ProfileImg from "../../img/caco.jpg";
import "./ProfileCard.css";
import ProfileModal from "../ProfileModal/ProfileModal";
import Statements from "../Statements/Statements";

function ProfileCard() {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalStOpened, setModalStOpened] = useState(false);
  const [ userInfo, setUserInfo ] = useState({
    firstname: "",
    lastname: "",
    points: "0",
    role: "player"
  });

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={ProfileImg} alt="" />
      </div>
      <div className="ProfileName">
        <span>Marcio JL</span>
        <span>Software Developer</span>
      </div>
      <div className="RoleStatus">
        <hr />
        <div>
          <div className="Role">
            <span>Game Owner</span>
            <span>Role</span>
          </div>
          <div className="VerticalLine"></div>
          <div className="Role">
            <span>6,890</span>
            <span>Points</span>
          </div>
        </div>
        <hr />
      </div>
      <span onClick={() => setModalOpened(true)}>My Profile</span>
      <ProfileModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened} />
      <span onClick={() => setModalStOpened(true)}>My Statements</span>
      <Statements
        modalStOpened={modalStOpened}
        setModalStOpened={setModalStOpened}
      />
    </div>
  );
}

export default ProfileCard;
