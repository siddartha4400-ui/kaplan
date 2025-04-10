import React, { useRef } from "react";
import Copy from "../../svgs/Copy";
import customAlert from "./customAlert";
import CopyTeamMail from "../../svgs/coptyTeamMail";

const CopyToClipBoard = ({
  targetClassName,
  successtitle = "",
  type = 0,
}) => {
  const handleCopyText = (e) => {
    e.stopPropagation();
    const targetElement = document.querySelector(`.${targetClassName}`);

    if (targetElement) {
      const textToCopy = targetElement.textContent || targetElement.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          const message = successtitle
            ? `${successtitle} copied successfully`
            : "Title copied successfully!";
          customAlert("success", message, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      console.error("No element found with the specified classname.");
    }
  };

  return (
    <span
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        handleCopyText(e);
      }}
      title="Copy title"
    >
      {type == 1 ? <CopyTeamMail /> : <Copy />}
    </span>
  );
};

export default CopyToClipBoard;
