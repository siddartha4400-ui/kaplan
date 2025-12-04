import React, { useEffect, useRef, useState } from "react";
import { file as handleFile } from "@/atoms/handleFileUpload";

function EditorFileUpload({ onChange, name, value, defaultHeight = '100px', listedConfig = [] }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [editorLoaded, setEditorLoaded] = useState(false);

  const getCofigDetails = () => {
    return {
      extraPlugins: [(editor) => {MyCustomUploadAdapterPlugin(editor);PasteAsAnchorPlugin(editor);}], // ✅ Pas to plugin
      toolbar: listedConfig.length > 0 ? listedConfig : undefined,
    };
  };

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("ckeditor5-build-classic-plus"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          config={getCofigDetails()}
          data={value || ""}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
          onInit={(editor) => {
            editor.editing.view.change(writer => {
              writer.setStyle('height', '500px', editor.editing.view.document.getRoot());
            });
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default React.memo(EditorFileUpload);

function MyCustomUploadAdapterPlugin(editor, setState) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return {
      upload: async () => {
        try {
          const file = await loader.file;
          const uploadResult = await handleFile.uploadFile([file], "", "");
          const fileData = uploadResult.data[0];
        // console.log(fileData)
          const fileUrl = `${process.env.NEXT_PUBLIC_APP_BACKEND_URL + fileData.file_path}`;
          // const anchorTag = `<a href="${fileUrl}" target="_blank">${fileData.file_name}</a>&zwnj;`;
          const anchorTag = `<a href="${fileUrl}" target="_blank"><img src="${fileUrl}" alt="image.png" /></a>&zwnj;`;

          // ✅ Insert at current selection instead of updating state
          editor.model.change(writer => {
            const viewFragment = editor.data.processor.toView(anchorTag);
            const modelFragment = editor.data.toModel(viewFragment);
            editor.model.insertContent(modelFragment);
          });

          return { default: fileUrl }; // CKEditor requires `default` key
        } catch (error) {
          console.error('Error during file upload', error);
          throw error;
        }
      }
    };
  };
}

function PasteAsAnchorPlugin(editor) {
  editor.plugins.get("Clipboard").on("inputTransformation", (evt, data) => {
    let html = data.dataTransfer.getData("text/html") || data.dataTransfer.getData("text/plain");



    if (html) {
      // Remove JavaScript event handlers like onclick, onmouseover, etc.
      html = html.replace(/\s*on\w+="[^"]*"/gi, "");

      // Fix anchor tags: remove 'target' and 'rel' while keeping href and styles
      html = html.replace(/<a\s+([^>]*?)\s*(target|rel)="[^"]*"\s*([^>]*?)>/gi, "<a $1 $3>");

      // Ensure <a> tags remain properly formatted with a default 'target="_blank"'
      html = html.replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi, (match, href, text) => {
        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>&zwnj;`;
      });

      // Convert plain URLs (not inside <a>) into clickable anchor tags
      const urlRegex = /(?<!["'>])\b(https?:\/\/[^\s<]+)\b(?!<\/a>)/g;
      html = html.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>&zwnj;');

      // Ensure `mailto:` email addresses remain valid
      html = html.replace(/<a\s+href="mailto:([^"]+)"[^>]*>(.*?)<\/a>/gi, (match, email, text) => {
        return `<a href="mailto:${email}" class="email-link">${text}</a>&zwnj;`;
      });

      // Preserve line breaks
      html = html.replace(/<br\s*\/?>/gi, "<br>");

      // Clean up inline styles (removing empty styles)
      html = html.replace(/\s*style="\s*"/gi, "");

      // Remove unnecessary nested span tags that may interfere
      html = html.replace(/<span[^>]*>(.*?)<\/span>/gi, "$1");



      // Apply cleaned-up content to the editor
      data.content = editor.data.processor.toView(html);
    }
  });
}





