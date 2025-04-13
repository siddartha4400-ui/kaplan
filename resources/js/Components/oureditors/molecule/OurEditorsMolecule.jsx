import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getSlider, storeSlider ,editorsData } from "../../../services/api/apis";
import customAlert from "../../atom/customAlert";

const OurEditorsMolecule = () => {
    const [formData, setFormData] = useState({
        editors: [],
        editorOptions: [],
    });

    const handleSelectChange = (selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            editors: selectedOption,
        }));
    };

    const handleSave = async () => {
        await storeSlider({ editors: formData.editors }, 3);
        customAlert("success", "Editors saved successfully!", 3000);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await editorsData()
            const options=res.data[1];

            const fetchedData = await getSlider(3);

            setFormData({
                editorOptions: options,
                editors: fetchedData?.json?.editors || [],
            });
        };

        fetchData();
    }, []);
    return (
        <div className="space-y-4">
            <div>
                <label className="block mb-1 font-medium">Editors:</label>
                <Select
                    options={formData.editorOptions}
                    value={formData.editors}
                    isMulti
                    onChange={handleSelectChange}
                    className="w-full"
                />
            </div>

            <div className="flex justify-end pt-2">
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

export default OurEditorsMolecule;
