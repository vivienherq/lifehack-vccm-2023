import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/ui/MainNavigation";
import Login from "../components/login/Login";

import classes from "./Root.module.css";

const RootLayout = () => {
  const [loginIsShown, setLoginIsShown] = useState(false);

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  return (
    <>
      {loginIsShown && <Login onClose={hideLoginHandler} />}
      <MainNavigation onShowLogin={showLoginHandler} />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
