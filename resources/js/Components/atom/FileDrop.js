import React from "react";
import { FileDrop } from "react-file-drop";
import CreateWikiStyles from "../../components/Wekion/create-weki.module.css";

const FileDropField = ({
  onTargetClick,
  onDrop,
  onChange,
  inputRef,
  multiple,
  acceptFormat,
  images,
}) => {
  return (
    <>
      <div className="mb-4">
        <FileDrop onTargetClick={onTargetClick} onDrop={onDrop}>
          <div className={CreateWikiStyles.file_button}>Choose file</div>
          <div className={`${CreateWikiStyles.drag_space} drag_space`}>
            <div className={`${CreateWikiStyles.drag_drop} text-center`}>
            <p>or</p>
              {images ? images : "Drop an attachment"}
            </div>
            <input
              className={`{styles.DropAnAttachment} invisible`}
              accept={acceptFormat}
              value=""
              ref={inputRef}
              multiple={multiple}
              type="file"
              onChange={(e) => onChange(e.target.files)}
            />
          </div>
        </FileDrop>
      </div>
    </>
  );
};

export default FileDropField;
