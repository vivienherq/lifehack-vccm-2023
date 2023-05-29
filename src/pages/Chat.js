import React, { useState } from "react";
import MainNavigation from "../components/ui/MainNavigation";
import classes from "./Chat.module.css";
import ChatMessage from "../components/chat/ChatMessage";
import UploadFileModal from "../components/chat/UploadFileModal";
import BotList from "../components/chat/BotList";
import LogOutButton from "../components/login/LogoutButton";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ChatPage = () => {

  // upload files
  const [uploadFile, setUploadFile] = useState(false);

  const newBotHandler = () => {
    setUploadFile(true);
  };

  const uploadHandler = () => {
    setUploadFile(false);
  };

  // add state for input and chat log
  const { isLoading, user } = useAuth();
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    { from: "vccm", message: "help me agnnn" },
    { from: "aibot", message: "how now brown cow" },
    { from: "vccm", message: "how do i code this app?" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let chatLogNew = [...chatLog, { from: "me", message: `${input}` }];
    setInput("");
    setChatLog([...chatLogNew])
    // fetch request to the api combining the chatlog array of messages and sending it as a message to localhost:3000 as a post
    // const messages = chatLogNew.map((message) => message.message).join("\n")
    // const response = await fetch("http://localhost:3080", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     message: messages,
    //   }),
    // });
    // const data = await response.json();
    // await setChatLog([...chatLogNew, {user:"aibot", message:`${data.message}`}])
    console.log("submit");
  };

  return (
    <div className={classes.chatpage}>
      {uploadFile && <UploadFileModal onClose={uploadHandler} />}
      <MainNavigation>
        <h1>Welcome, {user === null ? "" : user.data['myinfo.name']}</h1>
        <LogOutButton />
      </MainNavigation>
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
            {chatLog.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {/* <ChatMessage message={message[0]} />
            <ChatMessage message={message[1]} /> */}
          </div>
          <div className={classes["chat-input-holder"]}>
            <form onSubmit={handleSubmit}>
              <input
                rows="1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={classes["chat-input-textarea"]}
                placeholder="Type your message here."
              ></input>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChatPage;
