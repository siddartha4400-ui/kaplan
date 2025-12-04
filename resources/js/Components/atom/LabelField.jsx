import React from "react";
import LabelField from "./LabelField"; // Ensure correct import path

const ParentComponent = () => {
  return (
    <div>
      <LabelField title={"Title"} className={`LabelText mb-1`} />
    </div>
  );
};

export default ParentComponent;
