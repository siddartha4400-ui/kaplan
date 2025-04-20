import React, { useState, useEffect } from "react";
import Select from "react-select";
import Editor from "../../atom/Editor";
import { handleFileUpload, uploadFileToServer } from "../../../Helpers/helper";
import { useQueryParams } from "@/Hooks/useQueryParams"; // ✅ Import custom hook
import {
    createArticel,
    getArticel,
    getJournalsForDropdown,
} from "../../../services/apiEndpoints";
import { Inertia } from "@inertiajs/inertia";
import {getAllArticleTypesApi} from '../../../services/api/apis'
//
const ArticleFormMolecule = () => {
    const { getQueryParam, updateQueryParams } = useQueryParams();
    const [formData, setFormData] = useState({
        title: "",
        doi: "",
        journal: [],
        articleType: [],
        authorAffiliation: "",
        author: "",
        createdDate: "",
        publishedDate: "",
        pdfFile: [],
        abstract: "",
        edit: isNaN(Number(getQueryParam("edit")))
            ? null
            : Number(getQueryParam("edit")),
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    // };

    const fetchArticleTypes = async () => {
        try {
          const response = await getAllArticleTypesApi();
          if (response?.success && Array.isArray(response.data)) {
            const dropdownOptions = response.data.map((item) => ({
              label: item.title,
              value: item.id,
            }));
            setArticleTypeOptions(dropdownOptions);
          }
        } catch (error) {
          console.error('Failed to load article types:', error);
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await window.apiRequest(
                createArticel,
                "POST",
                formData
            );

            if (response?.success) {
                // console.log("Editor created successfully:", response.data);
                setFormData({ ...response.data });
                // if (!response.ok) throw new Error("Action failed");
                Inertia.visit(`/table?table=articles`);
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
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEditorChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };

    const handleSelectChange = (selectedOption, field) => {
        setFormData({ ...formData, [field]: selectedOption });
    };

    // const handleFileChange = (e) => {
    //     setFormData({ ...formData, pdfFile: e.target.files[0] });
    // };
    const handleFileChange = async (e) => {
        try {
            const data = await handleFileUpload(e, uploadFileToServer);
            const { name } = e.target;
            setFormData((prev) => ({ ...prev, [name]: data }));
        } catch (error) {
            console.error("Upload failed:", error.message);
        }
    };
    const [journalOptions, setjournalOptions] = useState([]);
    const [articleTypeOptions, setArticleTypeOptions] = useState([]);
    // const articleTypeOptions = [
    //     { value: 0, label: "select" },
    //     { value: 1, label: "Research" },
    //     { value: 2, label: "Review" },
    // ];
    function journalsDropdown() {
        window.apiRequest(`${getJournalsForDropdown}`).then((response) => {
            if (response?.success) {
                setjournalOptions(response.data);
            }
        });
    }
    useEffect(() => {
        journalsDropdown();
        fetchArticleTypes();
        if (formData.edit) {
            window
                .apiRequest(`${getArticel}/${formData.edit}`)
                .then((response) => {
                    if (response?.success) {
                        const responseData = response.data;
                        // console.log(articleTypeOptions);
                        setFormData({
                            ...formData,
                            title: responseData.title,
                            doi: responseData.doi,
                            journal: responseData.journal,
                            articleType:responseData.article_type,
                            authorAffiliation: responseData.authorAffiliation,
                            author: responseData.author,
                            createdDate: responseData.createdDate,
                            publishedDate: responseData.publishedDate,
                            pdfFile: responseData.pdf_file,
                            abstract: responseData.abstract,
                            edit: responseData.id,
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
    // console.log(formData);

    return (
        <div
            className="mx-auto"
            style={{
                height: "96vh",
                width: "95vw",
            }}
        >
            <div className="p-4">
                <h2 className="text-center mb-4">Create Article</h2>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">DOI</label>
                            <input
                                type="text"
                                name="doi"
                                value={formData.doi}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Author Affiliation
                            </label>
                            <Editor
                                height={500}
                                key="authorAffiliationEditor"
                                name="authorAffiliation"
                                value={formData.authorAffiliation}
                                onChange={(value) =>
                                    handleEditorChange(
                                        "authorAffiliation",
                                        value
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Created Date</label>
                            <input
                                type="date"
                                name="createdDate"
                                value={formData.createdDate}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Published Date</label>
                            <input
                                type="date"
                                name="publishedDate"
                                value={formData.publishedDate}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Author</label>
                            <Editor
                                height={400}
                                key="authorEditor"
                                name="author"
                                value={formData.author}
                                onChange={(value) =>
                                    handleEditorChange("author", value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Upload PDF</label>
                            <input
                                type="file"
                                name="pdfFile"
                                onChange={handleFileChange}
                                className="form-control"
                            />
                            {formData.pdfFile && (
                                <a
                                    href={formData.pdfFile.filePath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline mt-3 inline-block"
                                >
                                    {formData.pdfFile.filename}
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Abstract</label>
                            <Editor
                                height={450}
                                key="abstractEditor"
                                name="abstract"
                                value={formData.abstract}
                                onChange={(value) =>
                                    handleEditorChange("abstract", value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Journal</label>
                            <Select
                                options={journalOptions}
                                value={formData.journal}
                                onChange={(selected) =>
                                    handleSelectChange(selected, "journal")
                                }
                                className="form-select"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Article Type</label>
                            <Select
                                options={articleTypeOptions}
                                value={formData.articleType}
                                onChange={(selected) =>
                                    handleSelectChange(selected, "articleType")
                                }
                                className="form-select"
                            />
                        </div>
                    </div>

                    <div className="col-12 text-end">
                        <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                        >
                            Save Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArticleFormMolecule;
