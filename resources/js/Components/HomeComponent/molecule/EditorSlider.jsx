import React, { useEffect, useState } from "react";
import { images } from "../../../../img/assets";
import { getSlider } from "../../../services/api/apis";

const EditorSlider = () => {
    const [editorsData, setEditorsData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        getSlider(3)
            .then((res) => {
                console.log("Sidebar:", res);
                const jsonData = res?.json?.editors || [];
                setEditorsData(jsonData);
            })
            .catch((error) => {
                console.error("Slider Fetch Error:", error);
            });
    }, []);

    useEffect(() => {
        if (!editorsData.length) return; // Exit early if no data

        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % editorsData.length);
                setFade(true);
            }, 300);
        }, 4000);

        return () => clearInterval(interval);
    }, [editorsData]);

    if (!editorsData.length) {
        return <div className="section auth">Loading editors...</div>;
    }

    const currentEditor = editorsData[currentIndex];

    return (
        <div className="section auth">
            <h6 className="section-title">Our Editors</h6>
            <div className="auth">
                <div
                    className={`editor-box text-center ${
                        fade ? "fade-in" : "fade-out"
                    }`}
                >
                    <img
                        src={currentEditor?.photo_file?.filePath || images.authorImage}
                        alt={currentEditor?.label || "Editor"}
                        className="editor-img mb-3"
                    />
                    <strong className="editor-name">
                        {currentEditor?.label || "Editor Name"}
                    </strong>
                    <p className="editor-affiliation">
                        {currentEditor?.affiliation || "Affiliation"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EditorSlider;
