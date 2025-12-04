import React, { useEffect, useRef, useState } from "react";

function Editor({ onChange, editorLoadedprops, name, value, defaultHeight = '100px', listedConfig = [] }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [editorLoaded, setEditorLoaded] = useState(false)
  const getCofigDetails = () => {
    if (listedConfig.length > 0) {
      return {
        extraPlugins: [(editor) => { PasteAsAnchorPlugin(editor); }], // ✅ Pas to plugin
        toolbar: listedConfig, pasteFilter: (value) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(value, 'text/html');
          const nodes = doc.querySelectorAll('*');
          nodes.forEach(node => {
            node.style.backgroundColor = ''; // remove background color
          });
          return doc.body.innerHTML;
        }
      };
    } else {
      return {
        extraPlugins: [(editor) => { PasteAsAnchorPlugin(editor); }], // ✅ Pas to plugin
      };
    }

  }
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("ckeditor5-build-classic-plus")
    };
    setEditorLoaded(true)
  }, []);
  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          config={getCofigDetails()}
          //data={value}
          data={value !== null ? value : ''}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data)
            //editor.on('change', );
          }}

          onInit={editor => {
            editor.editing.view.change(writer => {
              writer.setStyle('height', '500px', editor.editing.view.document.getRoot());
            });
            // You can store the "editor" and use when it is needed.
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default React.memo(Editor);

// function PasteAsAnchorPlugin(editor) {
//   editor.plugins.get("Clipboard").on("inputTransformation", (evt, data) => {
//     const html = data.dataTransfer.getData("text/html") || data.dataTransfer.getData("text/plain");

//     // Detect URLs
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     if (urlRegex.test(html)) {
//       const formattedHtml = html.replace(urlRegex, (url) => {
//         return `<a href="${url}" target="_blank">${url}</a>&zwnj;`;
//       });

//       // Set modified HTML back into the paste event
//       data.content = editor.data.processor.toView(formattedHtml);
//     }
//   });
// }
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

