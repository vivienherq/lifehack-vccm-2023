import React from "react";
import { Link } from "react-router-dom";
import HeaderProfileButton from "../login/HeaderProfileButton";
import logoImage from "../../assets/logo-temp-blue.png";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <img src={logoImage} height="28" />
      {/* <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>
      <HeaderProfileButton onClick={props.onShowLogin}/> */}
    </header>
  );
};

export default MainNavigation;
