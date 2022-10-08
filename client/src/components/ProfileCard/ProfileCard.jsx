import React, { useState } from "react";
import Cover from "../../img/cover2.jpg";
import ProfileImg from "../../img/caco.jpg";
import "./ProfileCard.css";
import ProfileModal from "../ProfileModal/ProfileModal";

function ProfileCard() {
  const [modalOpened, setModalOpened] = useState(false);

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
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}

export default ProfileCard;
