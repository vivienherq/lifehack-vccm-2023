import React from "react";

import Bot from "./Bot";
import classes from "./BotList.module.css";
import users from "./Bots.json";

const userID = "vccm";

var userBots = users.filter((bot) => bot.user === userID)[0].bots;

const BotList = () => {
//   console.log("help");
//   console.log(userBots);
  return (
    // <div></div>
    // <div>{Object.keys(bots)}</div>
    <ul className={classes["bot-list"]}>
      {Object.keys(userBots).map((key, bots) => (
        <Bot key={Math.random()}>{userBots[key].name}</Bot>
      ))}
    </ul>
  );
};

export default BotList;
