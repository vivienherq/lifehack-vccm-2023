import React, { useState, useRef } from "react";
import Modal from "../ui/Modal";
import classes from "./UploadFileModal.module.css";
import styled from "styled-components";
import JSZip from "jszip";

import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

//https://www.spguides.com/upload-file-in-react-js/

const Button = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid #8a2b06;
  border-radius: 25px;
  margin-bottom: 1rem;
  color: #8a2b06;
  background-color: transparent;

  &:hover {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

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

      JSZip.loadAsync(files[0]).then(function (zip) {
        Object.keys(zip.files).forEach(function (filename) {
          const names = Object.keys(zip.files).filter(
            (fileName) => !zip.files[fileName].dir // Filter out directories
          );
          setFileNames(names);
          // console.log(fileNames)
          zip.files[filename].async("ArrayBuffer").then(function (uint8array) {
            const decodedData = new TextDecoder("utf-8").decode(uint8array);
            setData(decodedData);

            localRes();
          });
        });
      });

      promise.then(() => {
        // Do something after the promise is resolved
      });
    } catch (err) {
      console.error("Upload error", err);
    }
  };

  return (
    <Modal>
      <div className="App">
        <h2>Upload ZIP file.</h2>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "min-content",
          }}
        >
          <div style={{ display: "inline-flex" }}>
            Upload:&nbsp;
            <input
              type="file"
              name={"upload"}
              id={"upload"}
              onChange={(e) => upload(e)}
            />
          </div>
        </div>
        <h2>Data:</h2>

        <p> {fileNames}</p>
      </div>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
    </Modal>
  );
};

export default UploadFileModal;
