import {
    getJournalsApi,
    slider_store,
    slider_get,
    get_articles,
    getEditorsForDropdown,
} from "../apiEndpoints";

export const getJournals = async (data) => {
    try {
        const response = await window.apiRequest(`${getJournalsApi}/${data}`);

        if (response?.success) {
            // console.log(response.data);
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
export const storeSlider = async (data, key) => {
    try {
        const response = await window.apiRequest(
            `${slider_store}/${key}`,
            "post",
            data
        );

        if (response?.success) {
            // console.log(response.data);
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

export const editorsData = async () => {
    const editorResponse = await window.apiRequest(getEditorsForDropdown);
    return editorResponse;
};

export const getArticles = async (key, journal = 0, issue = 0) => {
    try {
        const response = await window.apiRequest(
            `${get_articles}/${key}/${journal}/${issue}`
        );

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
// if you want articles in dashboard =>getArticles('dashboard');
// if you want articles in article in press =>getArticles('article_in_press' ,journalid);
// if you want articles in archive =>getArticles('archive' ,journalid ,issue);
