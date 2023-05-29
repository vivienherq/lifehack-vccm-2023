import React from "react";

import Bot from "./Bot";
import classes from "./BotList.module.css";
import bots from "./Bots.json";

const BotList = () => {
  return (
    <ul className={classes["bot-list"]}>
      {Object.keys(bots).map((key, name) => (
        <Bot>{bots[key].name}</Bot>
      ))}
    </ul>
  );
};

export default BotList;
