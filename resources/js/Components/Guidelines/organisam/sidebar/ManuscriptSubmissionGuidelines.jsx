import React from "react";

const ManuscriptSubmissionGuidelines = () => {
    return (
        <section className="container pt-4 px-3 px-md-5">
            <h3 className="fw-semibold mb-4">
                Manuscript Submission Guidelines
            </h3>

            <h5 className="fw-semibold mt-4 my-3">Article Preparation</h5>
            <p>
                Authors preparing to submit their manuscript should carefully
                follow the provided guidelines, which include formatting,
                citation style, word count limits, and other important details
                necessary for meeting publication standards. Adherence to these
                guidelines increases the chances of a successful submission and
                ensures a smoother editorial process for both the authors and
                the publication. This attention to detail demonstrates
                professionalism and respect for the peer review process.
            </p>

            <h5 className="fw-semibold mt-4 my-3">Cover Letter</h5>
            <p>
                Each submission must include a cover letter specifying the
                article type and confirming the work is not published or under
                review elsewhere. Include a concise summary of the article's
                main point and the names, affiliations, and email addresses of
                five potential referees.
            </p>

            <h5 className="fw-semibold mt-4 mb-2">Title Page</h5>
            <ul className="ps-4">
                <li className="my-3">
                    Title of the article, Authors with respective titles (MD,
                    PhD, MS, etc), institutions, and departments, city, state,
                    and contact emails (12 author limit).
                </li>
                <li>
                    Please provide the complete contact information for the
                    corresponding author and the first author, including phone
                    number(s).
                </li>
            </ul>

            <h5 className="fw-semibold mt-4 mb-2">Abstract</h5>
            <p>
                Each article should contain an abstract that succinctly
                summarizes its content. Minimize the use of abbreviations and
                refrain from referencing within the abstract. Clearly outline
                the objectives of the study without providing a detailed summary
                of the findings.
            </p>

            <h5 className="fw-semibold mt-4 mb-2">Images/Figures and Tables</h5>
            <p>
                Authors are responsible for submitting high-resolution images.
                They must also take full responsibility for copyrighted images
                throughout the submission and publication process. Clinical and
                Medical Imaging, an open-access journal, publishes research,
                original submissions, reviews, brief reports, case studies,
                rapid communications, letters to the editor, etc., covering
                basic, experimental, and clinical research aspects.
            </p>
            <ul className="ps-4">
                <li className="my-3">
                    Please ensure that figures, tables, and videos are each
                    submitted as separate files. Figures should be in original
                    formats such as <code>.jpeg</code> or <code>.png</code>,
                    while videos must be in <code>.mov</code>, <code>.mp4</code>
                    , or <code>.flv</code> formats. Tables should be included in
                    Microsoft Word documents.
                </li>
            </ul>
            <p></p>

            <h6 className="fw-semibold mt-4 mb-2">
                Please Follow the Instructions Below:
            </h6>
            <ul className="ps-4">
                <li className="my-3">
                    Manuscripts must be submitted only in MS Word format and
                    exclusively in English. Please do not submit PDFs.
                </li>
                <li className="my-3">
                    No landscape-oriented pages. Exceptions can be made for
                    tables that cannot be made narrower.
                </li>
                <li className="my-3">
                    Equations should be in MathType and clearly visible.
                </li>
                <li className="my-3">Do not number pages.</li>
                <li className="my-3">
                    Do not use footnotes or endnotes. If necessary, citations
                    should be manually numbered with superscripts, listed after
                    the body of the paper, and before the references. Avoid
                    using any endnote programs.
                </li>
                <li className="my-3">
                    Full justification of text, except where noted.
                </li>
                <li className="my-3">
                    Set margins to at least 1 inch (2.54 cm) on all sides.
                </li>
                <li className="my-3">
                    Double-space the entire manuscript, including the main text,
                    references, and tables.
                </li>
                <li className="my-3">
                    Use only in-text citation in a numeric style followed by
                    square brackets. <br />
                    <em>
                        E.g.: In their review of the literature [1-3] some
                        themes emerge.
                    </em>
                </li>
            </ul>
            <h5 className="fw-semibold mt-4 mb-3">Font, Alignment, and Size</h5>
            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Element</th>
                            <th>Font Type</th>
                            <th>Alignment</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <td>Times New Roman</td>
                            <td>Center</td>
                            <td>15 (Bold)</td>
                        </tr>
                        <tr>
                            <th>Headings</th>
                            <td>Times New Roman</td>
                            <td>Left</td>
                            <td>11 (Bold)</td>
                        </tr>
                        <tr>
                            <th>Sub-Headings</th>
                            <td>Times New Roman</td>
                            <td>Left</td>
                            <td>10 (Bold)</td>
                        </tr>
                        <tr>
                            <th>Figures/Tables</th>
                            <td>Times New Roman</td>
                            <td>Center</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th>Text</th>
                            <td>Times New Roman</td>
                            <td>Left</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManuscriptSubmissionGuidelines;
