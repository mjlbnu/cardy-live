import React, { useRef, useEffect } from "react";
import { UilUser, UilEdit, UilSetting, UilSignout } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import './Dropdown.css';

function Dropdown({
    open,
    setOpen,
    handleEditProfile,
    handleClearUsersReady,
    handleLogOut,
    modalOpened,
    setModalOpened,
    setModalStOpened }) {
    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => document.removeEventListener("mousedown", handler);
    }, [setOpen]);

    function DropdownItem({ img, text, action }) {
        return (
            <li className="dropdownItem" onClick={action}>
                {img}
                <span>{text}</span>
            </li>
        );
    }

    return (
        <div ref={menuRef} className={`dropdown-menu ${open ? "active" : "inactive"}`}
            onMouseLeave={() => setOpen(false)}
        >
            <ul>
                <DropdownItem img={<UilUser />} text="My Statements" action={setModalStOpened} />
                <DropdownItem img={<UilEdit />} text="Edit Profile" action={handleEditProfile} />
                <DropdownItem img={<UilSetting />} text="Settings" action={handleClearUsersReady} />
                <DropdownItem img={<UilSignout />} text="Logout" action={handleLogOut} />
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </ul>
        </div>
    );
}

export default Dropdown;
