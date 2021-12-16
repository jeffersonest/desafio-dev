/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../contexts/auth.context";

const UserMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menu = useRef(null);

  const handleMenu = () => {
    console.log(user.idToken);
    setOpen(!open);
  };

  return (
    <div
      ref={menu}
      className={`user-menu ${user.idToken ? "flex" : "hidden"}`}
      onClick={() => handleMenu()}
    >
      <div className="user-menu_info">
        <img src={user.photoURL} alt="user pic"></img>
        <span>{user.displayName}</span>
      </div>
      <div className={`user-menu_options ${open ? "flex" : "hidden"}`}>
        <div>
          <button onClick={() => logout()}>Sair</button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
