import React, { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [changeButton, setChangeButton] = useState("Login");
  const online = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500]">
      <div className="logo-container flex">
        <img src={LOGO} alt="App Logo" className="w-16 mx-6 mt-2" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {online ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="btn-login cursor-pointer"
            onClick={() => {
              console.log(changeButton);
              changeButton === "Logout"
                ? setChangeButton("Login")
                : setChangeButton("Logout");
            }}
          >
            {changeButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
