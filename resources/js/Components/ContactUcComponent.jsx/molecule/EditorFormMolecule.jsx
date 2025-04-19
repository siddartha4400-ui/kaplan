import React from "react";
import Select from "react-select";

const EditorFormMolecule = ({
    formData,
    errors,
    handleChange,
    handleFileChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
    editorOptions
}) => {
    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-6">
                Researcher Profile Form
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="flex gap-6">
                    <div className="w-1/2 space-y-4 pr-6 border-r border-gray-300">
                        <div>
                            <label className="block font-semibold">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold">Country:</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            {errors.country && <p className="text-red-500">{errors.country}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold">Biography:</label>
                            <textarea
                                name="biography"
                                value={formData.biography}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                rows="3"
                            ></textarea>
                            {errors.biography && <p className="text-red-500">{errors.biography}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold">Qualification:</label>
                            <input
                                type="text"
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            {errors.qualification && <p className="text-red-500">{errors.qualification}</p>}
                        </div>
                    </div>

                    <div className="w-1/2 space-y-4 pl-6">
                        <div>
                            <label className="block font-semibold">Research Interests:</label>
                            <textarea
                                name="researchInterests"
                                value={formData.researchInterests}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                rows="3"
                            ></textarea>
                            {errors.researchInterests && <p className="text-red-500">{errors.researchInterests}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold">Affiliation:</label>
                            <input
                                type="text"
                                name="affiliation"
                                value={formData.affiliation}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            {errors.affiliation && <p className="text-red-500">{errors.affiliation}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold">Role:</label>
                            <Select
                                options={editorOptions}
                                value={formData.chiefEditor}
                                onChange={handleSelectChange}
                                className="w-full border p-2"
                            />
                            {errors.chiefEditor && <p className="text-red-500">{errors.chiefEditor}</p>}
                        </div>
                    </div>
                </div>

                <div className="my-6 border-t border-gray-300"></div>

                <div className="flex justify-center">
                    <div className="w-60 text-center border p-4 rounded-lg shadow-md">
                        <label className="block font-semibold mb-2">Profile Photo:</label>

                        <div className="w-40 h-40 mx-auto mb-2 border rounded-full overflow-hidden">
                            {formData.photo ? (
                                <img
                                    src={formData.photo.filePath}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                    No Image
                                </div>
                            )}
                        </div>

                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                        />
                        {errors.photo && <p className="text-red-500">{errors.photo}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded mt-6 hover:bg-blue-600 disabled:bg-gray-400"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default EditorFormMolecule;
