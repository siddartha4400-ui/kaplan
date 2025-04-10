import { useState } from "react";
import Editor from "@/Components/atom/Editor"; // Import the TinyMCE component

export default function Editor1() {
    const [content, setContent] = useState("");

    const handleEditorChange = (newContent) => {
        console.log("Editor Content:", newContent);
        setContent(newContent); // Update state
    };

    return (
        <div>
            <h2>Editor</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Editor
                            key={window.location.pathname}  // Force re-render when route changes
                            value={content}
                            onChange={handleEditorChange}
                            selector="#editor"
                        />
                    </div>
                </div>
            </div>
            <h3>Live Preview:</h3>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
