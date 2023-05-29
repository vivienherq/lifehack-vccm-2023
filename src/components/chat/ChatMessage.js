import React from "react";

import classes from "./ChatMessage.module.css";

const ChatMessage = (props) => {
  return (
    <div className={classes["chat-message"]}>
      <div className={classes["chat-message-center"]}>
        <div
          className={
            classes[
              `${props.message.from === "aibot" ? "avatar-chatgpt" : "avatar"}`
            ]
          }
        ></div>
        <div className={classes.message}>{props.message.message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
