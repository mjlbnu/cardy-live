import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserInfo } from "../../actions/UserAction";
import * as UserApi from "../../api/UserRequest";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [ userInfo, setUserInfo ] = useState({
    firstname: "",
    lastname: "",
    username: ""
  });
  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const { data } = await UserApi.getUser(user._id);
    console.log(data);
    if (data) {
      setUserInfo(data);
    } 
  };

  useEffect(() => {
    getUserInfo();
  }, [user._id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(userInfo => ({
      ...userInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUserInfo(userInfo));
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            value={userInfo.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            value={userInfo.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            value={userInfo.username}
            onChange={handleChange}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileimg" />
        </div>
        <button className="button infoButton">Save</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
