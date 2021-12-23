/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useAuth } from "../../../contexts/auth.context";
import uploadService from "../../../services/upload.service";

const UploadInput: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    await uploadService.sendFile(file, user.idToken);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: ".txt",
  });

  return (
    <form
      encType="multipart/form-data"
      className="upload-form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={`files-list ${files.length > 0 ? "block" : "hidden"}`}>
        <ul>
          {files.map((file) => {
            return (
              <li key={file.lastModified}>
                <img src="/arquivo-txt.png" alt="uploaded file" />
                <h4>{file.name}</h4>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="upload-field" {...getRootProps()}>
        <input accept=".txt" {...getInputProps()} name="file" />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>
            Drag and drop the <b>*.txt</b> file here
          </p>
        )}
      </div>
      <div className={`actions-box ${files.length > 0 ? "flex" : "hidden"}`}>
        <button>Register</button>
      </div>
    </form>
  );
};

export default UploadInput;
