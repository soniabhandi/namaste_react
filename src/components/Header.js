import React, { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [changeButton, setChangeButton] = useState("Login");
  const online = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="gap-2">
          <li>Online Status: {online ? "🟢" : "🔴"}</li>
          <li>
            <Link className="pr-2" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="btn-login"
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
