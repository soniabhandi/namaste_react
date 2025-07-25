import React, { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [changeButton, setChangeButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="gap-2">
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
