import React, { useState } from "react";
import MainNavigation from "../components/ui/MainNavigation";
import classes from "./Chat.module.css";
import ChatMessage from "../components/chat/ChatMessage";

const ChatPage = () => {
  // const [input, setInput] = useState("");
  // const [chatLog, setChatLog] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setChatLog([...chatLog, { user: "me", message: `${input}` }]);
  //   setInput("");
  //   // console.log("submit");
  // };

  return (
    <>
      <MainNavigation />
      <div className={classes.chat}>
        <aside className={classes.sidemenu}>
          <div className={classes["sidemenu-button"]}>
            <span>+</span>
            New Bot
          </div>
        </aside>
        <section className={classes.chatbox}>
          <div className={classes["chat-log"]}>
            <ChatMessage />
            <div className={classes["chat-message-chatgpt"]}>
              <div className={classes["chat-message-center"]}>
                <div className={classes["avatar-chatgpt"]}></div>
                <div className={classes.message}>I am an AI</div>
              </div>
            </div>
          </div>
          <div className={classes["chat-input-holder"]}>
            <textarea
              rows="1"
              // value={input}
              // onChange={() => setInput(e.target.value)}
              className={classes["chat-input-textarea"]}
              placeholder="Type your message here."
            ></textarea>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChatPage;
