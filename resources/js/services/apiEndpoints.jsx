export const REGEX_URL = "/api/";

export const fileUpload = REGEX_URL + "upload";

export const createJournal = REGEX_URL + "create_journal";

export const getJournal = REGEX_URL + "get_journal";

export const getTableApiUrl = (param) => {
    const tables = {
        journals: `${REGEX_URL}get_all_data/journals`,
        editors: `${REGEX_URL}get_all_data/editors`,
        articles: `${REGEX_URL}get_all_data/articles`,
    };
    return tables[param];
};

export const deleteTableApiUrl = (param, id) => {
    const tables = {
        journals: `${REGEX_URL}delete_table_data/journals/${id}`,
        editors: `${REGEX_URL}delete_table_data/editors/${id}`,
        articles: `${REGEX_URL}delete_table_data/editors/${id}`,
    };
    return tables[param];
};

export const createEditor = REGEX_URL + "create_editor";

export const getEditor = REGEX_URL + "get_editor";

export const getEditorsForDropdown = REGEX_URL + "get_editors_dropdown";

export const getJournalsForDropdown = REGEX_URL + "get_journals_dropdown";

export const createArticel = REGEX_URL + "create_articel";

export const getArticel = REGEX_URL + "get_articel";

export const getJournalsApi = REGEX_URL + "get_journals";

export const slider_store = REGEX_URL + "slider_store";

export const slider_get = REGEX_URL + "slider_get";

export const get_articles = REGEX_URL + "get_articles";

export const get_all_articel_types = REGEX_URL + "get_all_articel_types";

export const post_articel_type = REGEX_URL + "post_articel_type";

export const get_articel_type = REGEX_URL + "get_articel_type";
