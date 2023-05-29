import React, { useState } from "react";
import MainNavigation from "../components/ui/MainNavigation";
import classes from "./Chat.module.css";
import ChatMessage from "../components/chat/ChatMessage";
import UploadFileModal from "../components/chat/UploadFileModal";
import { MdChatBubbleOutline } from "react-icons/md";
import Bot from "../components/chat/Bot";
import BotList from "../components/chat/BotList";

const ChatPage = () => {
  // const [input, setInput] = useState("");
  // const [chatLog, setChatLog] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setChatLog([...chatLog, { user: "me", message: `${input}` }]);
  //   setInput("");
  //   // console.log("submit");
  // };

  // upload files
  const [uploadFile, setUploadFile] = useState(false);

  const newBotHandler = () => {
    setUploadFile(true);
  };

  const uploadHandler = () => {
    setUploadFile(false);
  };

  const message = [
    { from: "vccm", message: "help me agnnn" },
    { from: "aibot", message: "how now brown cow" },
  ];

  return (
    <>
      {uploadFile && <UploadFileModal onClose={uploadHandler} />}
      <MainNavigation />
      <div className={classes.chat}>
        <aside className={classes.sidemenu}>
          <div className={classes["sidemenu-button"]} onClick={newBotHandler}>
            <span>+</span>
            New Bot
          </div>
          <BotList />
        </aside>
        <section className={classes.chatbox}>
          <div className={classes["chat-log"]}>
            <ChatMessage message={message[0]} />
            <ChatMessage message={message[1]} />
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
