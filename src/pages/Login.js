import React, { useState, useCallback } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import classes from "./Login.module.css";
import { SGID_BACKEND_URL } from "../config/constants";
import useAuth from "../hooks/useAuth";
import logoImage from "../assets/logo-temp.png"
import { Image, VStack } from "@chakra-ui/react";

const LoginPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const toggleButton = () => {
    setShowButton(!showButton);
  };

  const logInHandler = useCallback(() => {
    setIsLoading(true);

    fetch(`${SGID_BACKEND_URL}/api/auth-url`, {
      credentials: "include",
    })
      .then(async (r) => await r.json())
      .then(({ url }) => {
        window.location.href = url;
      })
      .catch((e) => {
        setIsLoading(false);
        if (e instanceof Error) {
          setHasError(true)
          return alert("ERROR");
        }
      });
  }, [hasError]);

  const { user, isLoading: isUserLoading } = useAuth();

  if (isUserLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className={classes.login}>
      <VStack>
        <Image
          src={require("../assets/login-vector-2.png")}
          borderRadius="ml"
          maxWidth="70%"
          minWidth="400px"
        />

        <div className={classes["login-card"]}>
          <button className={classes["button-sgid"]} onClick={logInHandler}>
            Log in with Singpass
          </button>
          {showButton && <button onClick={toggleButton} className={classes.button}>Log in with Google</button>}
          {showButton && <button onClick={toggleButton} className={classes.button}>Log in with Facebook</button>}
          {showButton && <button onClick={toggleButton} className={classes.button}>Log in with Github</button>}
        </div>
      </VStack>
    </div>
  );
};

export default LoginPage;
