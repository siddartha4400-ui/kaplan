import React, { useState, useEffect } from "react";
import EditorFormMolecule from "../molecule/EditorFormMolecule";
import { handleFileUpload, uploadFileToServer } from "../../../Helpers/helper";
import { useQueryParams } from "@/Hooks/useQueryParams"; // ✅ Import custom hook
import { createEditor, getEditor } from "../../../services/apiEndpoints";
import { Inertia } from "@inertiajs/inertia";
const EditorFormOrganisam = () => {
    const { getQueryParam, updateQueryParams } = useQueryParams();
    const [formData, setFormData] = useState({
        name: "",
        country: "",
        qualification: "",
        biography: "",
        researchInterests: "",
        affiliation: "",
        chiefEditor: null,
        photo: null,
        edit: isNaN(Number(getQueryParam("edit")))
            ? null
            : Number(getQueryParam("edit")),
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const editorOptions = [
        { value: 1, label: "Editor in Chief" },
        { value: 2, label: "Editor" },
        { value: 3, label: "Associate Editor" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleFileChange = async (e) => {
        try {
            const data = await handleFileUpload(e, uploadFileToServer);
            setFormData({ ...formData, photo: data });
            setErrors({ ...errors, photo: "" });
        } catch (error) {
            console.error("Upload failed:", error.message);
        }
    };

    const handleSelectChange = (selectedOption) => {
        setFormData({ ...formData, chiefEditor: selectedOption });
        setErrors({ ...errors, chiefEditor: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await window.apiRequest(
                createEditor,
                "POST",
                formData
            );

            if (response?.success) {
                // console.log("Editor created successfully:", response.data);
                return Inertia.visit(`/table?table=editors`);
                // alert("Form submitted successfully!");
            } else {
                console.warn("Unexpected response:", response);
                // alert(response.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            // alert("Failed to submit the form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (formData.edit) {
            window
                .apiRequest(`${getEditor}/${formData.edit}`)
                .then((response) => {
                    if (response?.success) {
                        const responseData = response.data;
                        setFormData({
                            ...formData,
                            name:responseData.name,
                            country:responseData.country,
                            qualification:responseData.qualification,
                            biography:responseData.biography,
                            researchInterests:responseData.researchInterests,
                            affiliation:responseData.affiliation,
                            chiefEditor: editorOptions.find((item)=>item.value ===Number(responseData.chiefEditor)),
                            photo: responseData.photo,
                        });
                    } else {
                        console.warn("Unexpected response:", response);
                        alert("Something went wrong!");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching journal:", error);
                });
        }
    }, []);
    return (
        <EditorFormMolecule
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            editorOptions={editorOptions}
        />
    );
};

export default EditorFormOrganisam;
