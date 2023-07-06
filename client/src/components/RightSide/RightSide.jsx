import React, { useState, useEffect, useRef } from "react";
import "./RightSide.css";
import { UilSetting } from "@iconscout/react-unicons";
import { UilHome } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";
import { UilEdit } from "@iconscout/react-unicons";
import Chat from "../../img/comment.png";
import Ranking from "../Ranking/Ranking";

function RightSide() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="RightSide">
      <div className="nav-icons">
        <UilUser />
        <UilSignout />
        <UilSetting
          className="menu-trigger"
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
            <DropdownItem img={<UilEdit />} text={"Edit Profile"} />
            <DropdownItem img={<UilSetting />} text={"Settings"} />
            <DropdownItem img={<UilSignout />} text={"Logout"} />
          </ul>
        </div>
      </div>
      <Ranking />
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      {props.img}
      <a> {props.text} </a>
    </li>
  );
}

export default RightSide;
