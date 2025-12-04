import { useEffect, useRef, useState } from "react";
import { usePage } from "@inertiajs/react";

export default function Editor({ value, onChange ,height=300 }) {
    const editorRef = useRef(null);
    const { url } = usePage();

    const [editorId] = useState(() => `editor-${Math.random().toString(36).substring(2, 9)}`);
    const [isTinyMceLoaded, setIsTinyMceLoaded] = useState(false);
    const [editorInitialized, setEditorInitialized] = useState(false);

    useEffect(() => {
        if (!window.tinymceLoaded) {
            const script = document.createElement("script");
            script.src = "/tinymce/js/tinymce/tinymce.min.js";
            script.referrerPolicy = "origin";
            script.onload = () => {
                window.tinymceLoaded = true;
                setIsTinyMceLoaded(true);
            };
            document.body.appendChild(script);
        } else {
            setIsTinyMceLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (isTinyMceLoaded) {
            initializeEditor();
        }

        return () => {
            if (window.tinymce) {
                const editor = window.tinymce.get(editorId);
                if (editor) {
                    editor.destroy();
                }
            }
        };
    }, [isTinyMceLoaded, url]);

    useEffect(() => {
        if (editorInitialized && window.tinymce) {
            const editor = window.tinymce.get(editorId);
            if (editor && editor.getContent() !== value) {
                console.log("Setting content in editor:", value);
                editor.setContent(value || ""); // Ensure correct content is applied
            }
        }
    }, [value, editorInitialized]);

    const initializeEditor = () => {
        if (!window.tinymce) return;

        window.tinymce.init({
            selector: `#${editorId}`,
            skin_url: "/tinymce/js/tinymce/skins/ui/oxide",
            content_css: "/tinymce/js/tinymce/skins/content/default/content.css",
            plugins:
                "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen table media emoticons code help wordcount",
            toolbar:
                "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image | table | media | emoticons | code | fullscreen | preview",
            toolbar_mode: "floating",
            menubar: true,
            statusbar: true,
            height: height,
            branding: false,
            paste_data_images: true,
            content_style: "body { font-family: Arial, sans-serif; font-size: 14px; }",
            image_advtab: true,
            setup: (editor) => {
                editorRef.current = editor;

                editor.on("init", () => {
                    console.log("Editor initialized with value:", value);
                    if (value) {
                        editor.setContent(value); // Set initial content
                    }
                    setEditorInitialized(true);
                });

                editor.on("keyup change", () => {
                    const content = editor.getContent();
                    console.log("Editor content changed:", content);
                    if (onChange) {
                        onChange(content);
                    }
                });
            },
        });
    };

    return <>{isTinyMceLoaded ? <textarea id={editorId}></textarea> : <p>Loading editor...</p>}</>;
}
