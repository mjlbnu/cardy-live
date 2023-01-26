import React, { useState } from "react";
import Cover from "../../img/cover2.jpg";
import ProfileImg from "../../img/caco.jpg";
import "./ProfileCard.css";
import ProfileModal from "../ProfileModal/ProfileModal";
import Statements from "../Statements/Statements";
import { useSelector, useDispatch } from  "react-redux";

function ProfileCard() {
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);
  const [modalStOpened, setModalStOpened] = useState(false);
  const { profile, loading } = useSelector((state) => state.profileReducer);

if (!profile) return null;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={ProfileImg} alt="" />
      </div>
      <div className="ProfileName">
        <span>${profile.firstname} ${profile.lastname}</span>
        <span>Noob</span>
      </div>
      <div className="RoleStatus">
        <hr />
        <div>
          <div className="Role">
            <span>{profile.isAdmin ? "Admin" : "Player"}</span>
            <span>Role</span>
          </div>
          <div className="VerticalLine"></div>
          <div className="Role">
            <span>{profile.ranking[0].points || "0"}</span>
            <span>Points</span>
          </div>
        </div>
        <hr />
      </div>
      <span onClick={() => setModalOpened(true)}>My Profile</span>
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <span onClick={() => setModalStOpened(true)}>My Statements</span>
      <Statements
        modalStOpened={modalStOpened}
        setModalStOpened={setModalStOpened}
      />
    </div>
  );
}

export default ProfileCard;
