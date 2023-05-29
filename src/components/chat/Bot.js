import React from "react";
import { MdChatBubbleOutline } from "react-icons/md";
import classes from "./Bot.module.css";

const Bot = (props) => {
  //   return (
  //     <div className={classes.bot}>
  //       <span>
  //         <MdChatBubbleOutline />
  //       </span>
  //       {/* {bot.name} */}
  //       Bot 1
  //     </div>
  //   );
  // const [deleteText, setDeleteText] = useState('');

  return (
    //<li className="goal-item" onClick={deleteHandler}>
    <li className={classes.bot}>
      <span>
        <MdChatBubbleOutline />
      </span>
      {props.children}
    </li>
  );
};

export default Bot;
