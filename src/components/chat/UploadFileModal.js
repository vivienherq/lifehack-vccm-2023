import React, { useState, useRef } from "react";
import Modal from "../ui/Modal";
import classes from "./UploadFileModal.module.css";
import JSZip from "jszip";
import userBots from "./Bots.json";

//https://www.spguides.com/upload-file-in-react-js/

const UploadFileModal = (props) => {
  const [data, setData] = useState("Nothing uploaded yet.");

  const [fileNames, setFileNames] = useState([]);

  // const fileNames = [];

  const upload = (e) => {
    try {
      e.preventDefault();
      const { target } = e;
      const { files } = target;

      if (files.length > 1) {
        console.log("I will only process the first file.");
      }
      const size = files[0].size;
      if (size > 1000000) {
        console.log("Uploading large file.");
      }

      let localRes = null;
      const promise = new Promise((resolve) => {
        localRes = resolve;
      });

      const filePromises = [];
      const fileArray = [];

      JSZip.loadAsync(files[0]).then((zip) => {
        Object.keys(zip.files).forEach((filename) => {
          const file = zip.files[filename];
          if (!file.dir) {
            filePromises.push(file.async("ArrayBuffer"));
            fileArray.push(file.name);
          }
          const names = Object.keys(zip.files).filter(
            (fileName) => !zip.files[fileName].dir // Filter out directories
          );
          const filteredNames = names.filter((_, index) => index % 2 === 0);
          setFileNames(filteredNames);

          // zip.files[filename].async("ArrayBuffer").then((uint8array) => {
          //   const decodedData = new TextDecoder("utf-8").decode(uint8array);
          //   setData(decodedData);
          //   localRes();
          // });
        });

        Promise.all(filePromises).then((fileContents) => {
          const formData = new FormData();
          fileContents.forEach((content, index) => {
            formData.append("files[]", new Blob([content]), fileArray[index]);
          });

          // Send the FormData to the backend using an HTTP request
          // fetch("YOUR_BACKEND_URL", {
          //   method: "POST",
          //   body: formData,
          // })
          //   .then((response) => response.json())
          //   .then((responseData) => {
          //     console.log(responseData);
          //     // Handle the response from the backend
          //   })
          //   .catch((error) => {
          //     console.error("Upload error", error);
          //   });
        });
      });
    } catch (err) {
      console.error("Upload error", err);
    }
  };

  const user = "vccm";
  const userBot = userBots.filter((bot) => bot.user === user)[0].bots;

  const [bots, setBots] = useState(userBot);

  const uploadHandler = () => {
    setBots([
      ...userBot,
      { id: 4, name: "name", files: ["file"], chatlog: {} },
    ])
  };

  return (
    <Modal>
      <div>
        <h1>New Bot</h1>
        <label>
          Bot Name:{" "}
          <input
            name="postTitle"
            defaultValue="New Bot"
            className={classes.botname}
          />
        </label>
      </div>
      <div className="App">
        <h2>Upload ZIP file.</h2>
        <div className={classes["upload-zip"]}>
          <div style={{ display: "inline-flex" }}>
            <input
              type="file"
              name={"upload"}
              id={"upload"}
              onChange={(e) => upload(e)}
            />
          </div>
        </div>
        <h3>Uploaded files:</h3>
        {fileNames.map((name) => (
          <div key={name}>{name}</div>
        ))}
        <br></br>
        <div className={classes.buttons}>
          <button className={classes["button-upload"]}>Upload</button>
          <button className={classes["button-close"]} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadFileModal;
