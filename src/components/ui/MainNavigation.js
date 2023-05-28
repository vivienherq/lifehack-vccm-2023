import React from "react";
import { Link } from "react-router-dom";
import HeaderProfileButton from "../login/HeaderProfileButton";
import logoImage from "../../assets/logo-placeholder.png"

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <img src={logoImage} height="75" width="75"/>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page">Page1</Link>
          </li>
        </ul>
      </nav>
      <HeaderProfileButton onClick={props.onShowLogin}/>
    </header>
  );
}

export default MainNavigation;