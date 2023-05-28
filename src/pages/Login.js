import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import classes from "./Login.module.css";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  return (
    <div className={classes.login}>
      <div className={classes["float-child"]}>
        <Card>
          <button className={classes["button-sgid"]} onClick={routeChange}>Log in with Singpass</button>
          <button className={classes.button}>Log in with Google</button>
          <button className={classes.button}>Log in with Facebook</button>
          <button className={classes.button}>Log in with Github</button>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
