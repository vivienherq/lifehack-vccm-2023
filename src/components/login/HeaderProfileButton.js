import React from "react";

import ProfileIcon from "./ProfileIcon";
import classes from "./HeaderProfileButton.module.css"

const HeaderProfileButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <ProfileIcon />
      </span>
      <span>Your Name</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderProfileButton;
