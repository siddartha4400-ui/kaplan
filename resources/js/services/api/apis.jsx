import { getJournalsApi, slider_store, slider_get } from "../apiEndpoints";

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
export const storeSlider = async (data) => {
    try {
        const response = await window.apiRequest(
            `${slider_store}`,
            "post",
            data
        );

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
export const getSlider = async (key) => {
    try {
        const response = await window.apiRequest(`${slider_get}/${key}`);

        if (response && response.data) {
            // console.log("Slider Data:", response.data);
            return response.data; // Contains: id, key, json, timestamps
        } else {
            console.warn("Unexpected response:", response);
            return null;
        }
    } catch (error) {
        console.error("Error fetching slider data:", error);
        return null;
    }
};

