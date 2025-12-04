// helpers/helper.js
import { fileUpload } from "../services/apiEndpoints";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

// Function to handle file selection and upload
export const handleFileUpload = async (e, uploadFileToServer) => {
    return new Promise((resolve, reject) => {
        const { name, files } = e.target;
        if (files.length === 0) {
            reject("No file selected.");
            return;
        }

        const file = files[0];
        const formData = new FormData();
        formData.append(name, file);

        uploadFileToServer(formData)
            .then(resolve) // Resolve with server response
            .catch(reject); // Reject if there's an error
    });
};

// Function to upload file to the server
export const uploadFileToServer = async (formData) => {
    try {
        const response = await fetch(fileUpload, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            return result; // ✅ Returns the response on success (201 Created)
        } else {
            throw new Error(result.message || "File upload failed"); // ✅ Throw error on failure
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error; // ✅ Ensure the calling function can handle errors
    }
};
