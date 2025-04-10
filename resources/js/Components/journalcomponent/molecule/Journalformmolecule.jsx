import React from "react";
import Select from "react-select";
import Editor from "../../atom/Editor";

export default function JournalFormMolecule({
    formData,
    handleChange,
    handleChangeEditor,
    handleChangeEditor1,
    handleSelectChange,
    handleFileChange,
    handleSubmit,
}) {
    return (
        <div className="w-4/5 mx-auto p-6 border rounded shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Journal Form</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                {/* Left Section */}
                <div className="border-r pr-6 space-y-4">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border p-2"
                    />

                    <label>Short Name:</label>
                    <input
                        type="text"
                        name="shortname"
                        value={formData.shortname}
                        onChange={handleChange}
                        className="w-full border p-2"
                    />

                    <label>Publication Charges:</label>
                    <Editor
                        name="publicationCharges"
                        value={formData.publicationCharges}
                        onChange={handleChangeEditor}
                    />

                    <label>ISSNNO:</label>
                    <input
                        type="text"
                        name="issno"
                        value={formData.issno}
                        onChange={handleChange}
                        className="w-full border p-2"
                    />
                </div>

                {/* Right Section */}
                <div className="pl-6 space-y-4">
                    <label>Description:</label>
                    <Editor
                        name="description"
                        value={formData.description}
                        onChange={handleChangeEditor1}
                    />
                    <label>Editor in Chief:</label>
                    <Select
                        options={formData.chiefeditorOptions}
                        value={formData.chiefEditor}
                        onChange={(selectedOption) =>
                            handleSelectChange(selectedOption, "chiefEditor")
                        }
                        className="w-full border p-2"
                    />

                    <label>Editors:</label>
                    <Select
                        options={formData.editorOptions}
                        value={formData.editors}
                        onChange={(selectedOption) =>
                            handleSelectChange(selectedOption, "editors")
                        }
                        isMulti
                        className="w-full border p-2"
                    />

                    <label>Associate Editors:</label>
                    <Select
                        options={formData.associateEditorOptions}
                        value={formData.associateEditors}
                        onChange={(selectedOption) =>
                            handleSelectChange(selectedOption, "associateEditors")
                        }
                        isMulti
                        className="w-full border p-2"
                    />
                </div>

                {/* Classification */}
                <div className="col-span-2 space-y-4">
                    <label>Classification:</label>
                    <textarea
                        name="classification"
                        value={formData.classification}
                        onChange={handleChange}
                        className="w-full border p-2"
                    ></textarea>
                </div>

                {/* Photos Section */}
                <div className="col-span-2 grid grid-cols-3 gap-4">
                    {["photoOurJournal", "photoBanner", "photo"].map((field) => (
                        <div key={field}>
                            <label>{field.replace(/photo/, "Photo ")}</label>
                            <input
                                type="file"
                                name={field}
                                onChange={handleFileChange}
                                className="w-full border p-2"
                            />
                            {formData[field] && (
                                <img
                                    src={typeof formData[field] === "string" ? formData[field] : formData[field]?.filePath}
                                    alt="Preview"
                                    className="w-32 h-32 object-cover border mt-3"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <div className="col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        disabled={formData.isSubmitting}
                    >
                        {formData.isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}
