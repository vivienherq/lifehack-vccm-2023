import React, { useState } from "react";
import Modal from "../ui/Modal";
import classes from "./UploadFileModal.module.css";

import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

//https://www.spguides.com/upload-file-in-react-js/

const UploadFileModal = (props) => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // for onchange event
  const [selectPdfFile, setSelectPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  // for submit event
  const [viewPdf, setViewPdf] = useState(null);
  // onchange event
  const fileObj = ["application/pdf"];
  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileObj.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setSelectPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setSelectPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      alert("select pdf file");
    }
  };
  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectPdfFile !== null) {
      setViewPdf(selectPdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className="container">
        <h1> Upload a pdf file</h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <input
            type="file"
            className="form-control"
            required
            onChange={handleFileChange}
          />
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
          <br></br>
          <button type="submit" className="btn btn-success btn-lg">
            UPLOAD
          </button>
        </form>
        <h4>View PDF</h4>
        <div className="pdf-container">
          {/* show pdf conditionally (if we have one)  */}
          {viewPdf && (
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={viewPdf}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}

          {!viewPdf && <>No pdf file choosen </>}
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default UploadFileModal;
