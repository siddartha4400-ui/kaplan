import React, { useState, useEffect } from "react";
import { handleFileUpload, uploadFileToServer } from "../../../Helpers/helper";
import { storeSlider, getSlider } from "../../../services/api/apis";
// import {slider_store ,slider_get} from '../../../services/apiEndpoints'
import customAlert from "../../atom/customAlert";
const SlaiderMolecule = () => {
    const [formData, setFormData] = useState({
        slider_1: null,
        slider_2: null,
        slider_3: null,
    });

    const handleFileChange = async (e) => {
        try {
            const data = await handleFileUpload(e, uploadFileToServer);
            const { name } = e.target;
            setFormData((prev) => ({ ...prev, [name]: data }));
        } catch (error) {
            console.error("Upload failed:", error.message);
        }
    };

    const handleSave = () => {
        const res = storeSlider(formData);
        customAlert("success", "Slider saved successfully!", 3000);
    };
    useEffect(() => {
        const fetchSliderData = async () => {
            const data = await getSlider(1);
            if (data?.json) {
                setFormData((prev) => ({
                    ...prev,
                    ...data.json,
                }));
            }
        };
        fetchSliderData();
    }, []);
    return (
        <div className="col-span-2 grid grid-cols-3 gap-4">
            {[
                { name: "slider_1", label: "Slider One" },
                { name: "slider_2", label: "Slider Two" },
                { name: "slider_3", label: "Slider Three" },
            ].map(({ name, label }) => (
                <div key={name}>
                    <label className="block font-semibold mb-2">{label}</label>
                    <input
                        type="file"
                        name={name}
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-2 border rounded"
                    />
                    {formData[name] && (
                        <img
                            src={
                                typeof formData[name] === "string"
                                    ? formData[name]
                                    : formData[name]?.filePath
                            }
                            alt="Preview"
                            className="w-32 h-32 object-cover border mt-3 rounded"
                        />
                    )}
                </div>
            ))}

            {/* Save Button */}
            <div className="mt-4 col-span-3 flex justify-end">
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

export default SlaiderMolecule;
