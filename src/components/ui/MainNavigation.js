import React from "react";
import { Link } from "react-router-dom";
import HeaderProfileButton from "../login/HeaderProfileButton";
import logoImage from "../../assets/logo-temp.png"

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <img src={logoImage} height="28"/>
      {props.children}
    </header>
  );
}

export default MainNavigation;