import { getJournalsApi } from "../apiEndpoints";

export const getJournals = async (data) => {
    try {
        const response = await window.apiRequest(`${getJournalsApi}/${data}`);

        if (response?.success) {
            console.log(response.data);
            return response.data;
            // return Inertia.visit(`/table?table=editors`);
            // alert("Form submitted successfully!");
        } else {
            console.warn("Unexpected response:", response);
            // alert(response.message || "Something went wrong!");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        // alert("Failed to submit the form.");
    }
};
