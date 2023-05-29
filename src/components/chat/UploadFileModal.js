import React, { useState, useRef } from "react";
import Modal from "../ui/Modal";
import classes from "./UploadFileModal.module.css";
import styled from "styled-components";

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

    const hiddenFileInput = useRef(null);

    const handleClick = (event) => {
      hiddenFileInput.current.click();
    };

//   const [files, setFiles] = useState([]);

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const { files } = event.dataTransfer;
//     if (files.length > 0) {
//       setFiles([...files]);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDragStart = (event) => {
//     event.dataTransfer.setData("text/plain", event.target.id);
//   };

    return (
      <Modal onClose={props.onClose}>
        <div className="container">
          <h2> Upload a PDF file</h2>
          <form className="form-group" onSubmit={handleSubmit}>
            <Button onClick={handleClick}> Choose File</Button>
            <input
              type="file"
              ref={hiddenFileInput}
              style={{ display: "none" }}
              className="form-control"
              required
              onChange={handleFileChange}
            />
            {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
            <br></br>
            <Button type="submit">Upload</Button>
            {/* <button type="submit" className="btn btn-success btn-lg">
              UPLOAD
            </button> */}
          </form>
          <h2>View PDF</h2>
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
        <br></br>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        </div>
      </Modal>
    );

//   return (
//     <Modal onClose={props.onClose}>
//       <div className="d-flex justify-content-center align-content-center file-upload">
//         <div>
//           <p className="book-upload">Upload a book to start swap</p>
//           <div
//             className="file-upload-area m-10"
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//           >
//             <div
//               className="card-body d-flex align-items-center justify-content-center m-2 scan-div"
//               style={{ minHeight: "372px" }}
//               draggable="true"
//               onDragStart={handleDragStart}
//             >
//               <div className="file-upload-div">
//                 <ul>
//                   {files.map((file, index) => (
//                     <li key={index}>{file.name}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
};

export default UploadFileModal;
