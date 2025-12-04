import dynamic from "next/dynamic";
import React, { useState } from "react";
/*const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});*/
const CustomErrorComponent = () => {
  return <>Not supported</>;
};
const onError = (e) => {
  console.log(e, "error in file-viewer");
};
const PreviewFiles = ({
  fileType = "docx",
  filePath = `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/storage/lienion/Shoution/vnd.openxmlformats-officedocument.wordprocessingml.document/641978ffef4787.19600220.docx`,
}) => {
  console.log(filePath);
  return (
    <>
      {/*     <FileViewer   onError={onError} errorComponent={CustomErrorComponent}  fileType="docx" filePath="http://lienion.backend.local/storage/lienion/Shoution/vnd.openxmlformats-officedocument.wordprocessingml.document/641978ffef4787.19600220.docx" />
       */}
    </>
  );
};

export default PreviewFiles;
