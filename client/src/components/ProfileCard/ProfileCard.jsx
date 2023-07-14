import React, { useState, useEffect } from "react";
import Cover from "../../img/cover2.jpg";
import ProfileImg from "../../img/caco.jpg";
import "./ProfileCard.css";
import ProfileModal from "../ProfileModal/ProfileModal";
import Statements from "../Statements/Statements";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../actions/UserAction";

function ProfileCard() {
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);
  const [modalStOpened, setModalStOpened] = useState(false);
  const { profile, loading } = useSelector((state) => state.userReducer);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    dispatch(getProfile(user._id));
  }, []);

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
              {profile[0].firstname} {profile[0].lastname}
            </span>
            <span>ProPlayer</span>
          </div>
          <div className="RoleStatus">
            <hr />
            <div>
              <div className="Role">
                <span>{profile[0].isAdmin ? "Admin" : "Player"}</span>
                <span>Role</span>
              </div>
              <div className="VerticalLine"></div>
              <div className="Role">
                <span>
                  {profile[0].ranking.length > 0
                    ? profile[0].ranking[0].points
                    : "0"}
                </span>
                <span>Points</span>
              </div>
            </div>
            <hr />
          </div>
          <span onClick={() => setModalStOpened(true)}>My Statements</span>
          <Statements
            modalStOpened={modalStOpened}
            setModalStOpened={setModalStOpened}
          />
        </>
      )}
    </div>
  );
}

export default ProfileCard;
