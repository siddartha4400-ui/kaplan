import React, { useState, useEffect } from "react";
import { useQueryParams } from "@/Hooks/useQueryParams";
import { handleFileUpload, uploadFileToServer } from "../../../Helpers/helper";
import {
    createJournal,
    getJournal,
    getEditorsForDropdown,
} from "../../../services/apiEndpoints";
import { Inertia } from "@inertiajs/inertia";
import JournalFormMolecule from "../molecule/Journalformmolecule";
import '../../../../css/app.css';

export default function JournalFormOrganisam() {
    const { getQueryParam } = useQueryParams();
    const [formData, setFormData] = useState({
        title: "",
        shortname: "",
        publicationCharges: "",
        issno: "",
        description: "",
        chiefEditor: [],
        editors: [],
        associateEditors: [],
        classification: "",
        photoOurJournal: null,
        photoBanner: null,
        photo: null,
        isSubmitting: false,
        edit: isNaN(Number(getQueryParam("edit")))
            ? null
            : Number(getQueryParam("edit")),
        chiefeditorOptions: [],
        editorOptions: [],
        associateEditorOptions: [],
    });

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleChangeEditor = (e, name = "publicationCharges") => {
        setFormData((prev) => ({
            ...prev,
            [name]: e,
        }));
    };
    const handleChangeEditor1 = (e, name = "description") => {
        setFormData((prev) => ({
            ...prev,
            [name]: e,
        }));
    };
    // Handle Select Changes
    const handleSelectChange = (selectedOption, field) => {
        setFormData((prev) => ({ ...prev, [field]: selectedOption }));
    };

    // Handle File Uploads
    const handleFileChange = async (e) => {
        try {
            const data = await handleFileUpload(e, uploadFileToServer);
            const { name } = e.target;
            setFormData((prev) => ({ ...prev, [name]: data }));
        } catch (error) {
            console.error("Upload failed:", error.message);
        }
    };

    // Fetch Editors and Journal Data
    useEffect(() => {
        async function fetchData() {
            try {
                const editorResponse = await window.apiRequest(
                    getEditorsForDropdown
                );
                if (editorResponse?.success) {
                    setFormData((prev) => ({
                        ...prev,
                        chiefeditorOptions: editorResponse.data[1],
                        editorOptions: editorResponse.data[2],
                        associateEditorOptions: editorResponse.data[3],
                    }));
                }

                if (formData.edit) {
                    const journalResponse = await window.apiRequest(
                        `${getJournal}/${formData.edit}`
                    );
                    if (journalResponse?.success) {
                        const responseData = journalResponse.data;
                        console.log(responseData);
                        setFormData((prev) => ({
                            ...prev,
                            ...responseData,
                            chiefEditor: responseData.linked_table[1][0] || [],
                            editors: responseData.linked_table[2] || [],
                            associateEditors:
                                responseData.linked_table[3] || [],
                        }));
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [formData.edit]);

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.isSubmitting) return;
        setFormData((prev) => ({ ...prev, isSubmitting: true }));

        try {
            const response = await fetch(createJournal, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Action failed");
            Inertia.visit(`/table?table=journals`);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    console.log(formData);
    return (
        <JournalFormMolecule
            {...{
                formData,
                handleChange,
                handleSelectChange,
                handleFileChange,
                handleSubmit,
                handleChangeEditor,
                handleChangeEditor1,
            }}
        />
    );
}
