import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import classes from "./Login.module.css";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  VStack,
  Spacer,
} from "@chakra-ui/react";

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
      <VStack>
        <Image
          src={require("../assets/login-vector-2.png")}
          borderRadius="ml"
          maxWidth="70%"
          minWidth="400px"
        />

        <div className={classes["login-card"]}>
          <button className={classes["button-sgid"]} onClick={routeChange}>
            Log in with Singpass
          </button>
          <button className={classes.button}>Log in with Google</button>
          <button className={classes.button}>Log in with Facebook</button>
          <button className={classes.button}>Log in with Github</button>
        </div>
      </VStack>
    </div>
  );
};

export default LoginPage;
