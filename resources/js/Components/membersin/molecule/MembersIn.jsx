import React, { useState, useEffect } from "react";
import { handleFileUpload, uploadFileToServer } from "../../../Helpers/helper";
import { storeSlider, getSlider } from "../../../services/api/apis";
import customAlert from "../../atom/customAlert";

const MembersIn = () => {
    const [formData, setFormData] = useState({});
    const [sliderKeys, setSliderKeys] = useState([]);

    const handleFileChange = async (e) => {
        try {
            const data = await handleFileUpload(e, uploadFileToServer);
            const { name } = e.target;
            setFormData((prev) => ({ ...prev, [name]: data }));
        } catch (error) {
            console.error("Upload failed:", error.message);
        }
    };

    const handleAddSlider = () => {
        const nextIndex = sliderKeys.length + 1;
        const newKey = `slider_${nextIndex}`;
        setSliderKeys((prev) => [...prev, newKey]);
    };

    const handleSave = () => {
        storeSlider(formData, 2);
        customAlert("success", "Slider saved successfully!", 3000);
    };

    useEffect(() => {
        const fetchSliderData = async () => {
            const data = await getSlider(2);
            if (data?.json) {
                setFormData(data.json);
                const keys = Object.keys(data.json);
                setSliderKeys(keys);
            }
        };
        fetchSliderData();
    }, []);

    return (
        <div className="col-span-2">
            <div className="grid grid-cols-3 gap-4">
                {sliderKeys.map((key) => (
                    <div key={key}>
                        <label className="block font-semibold mb-2">
                            {key.replace("_", " ").toUpperCase()}
                        </label>
                        <input
                            type="file"
                            name={key}
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                        />
                        {formData[key] && (
                            <img
                                src={
                                    typeof formData[key] === "string"
                                        ? formData[key]
                                        : formData[key]?.filePath
                                }
                                alt="Preview"
                                className="w-32 h-32 object-cover border mt-3 rounded"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-between">
                <button
                    onClick={handleAddSlider}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 font-semibold"
                >
                    + Add Slider
                </button>
                <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 font-semibold"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default MembersIn;
