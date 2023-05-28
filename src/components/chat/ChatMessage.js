import React from "react";

import classes from "./ChatMessage.module.css"

const ChatMessage = () => {
  return (
    <div className={classes["chat-message"]}>
      <div className={classes["chat-message-center"]}>
        <div className={classes.avatar}></div>
        <div className={classes.message}>Hello World</div>
      </div>
    </div>
  );
};

export default ChatMessage;
