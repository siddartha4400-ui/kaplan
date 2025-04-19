import React from "react";
import EmptyTable from "../../molecule/EmptyTable";

const TableSection = ({ tableNumber }) => (
    <>
        <p>
            <strong>Table {tableNumber}:</strong> [Enter or paste a brief
            descriptive title for the table here, and avoid using a full stop
            after table heading]
        </p>
        <EmptyTable />
        <p className="my-3">
            <strong>Abbreviations:</strong> [Provide the full form of all
            abbreviations used in the table here. Include the full form even if
            it has been explained in the text.]
        </p>
    </>
);

const ReviewArticleGuidelines = () => {
    return (
        <section className="container review-article pt-4 px-3 px-md-5">
            <h3 className="fw-semibold mb-3">Review Article</h3>

            <h5 className="fw-semibold my-3">Formatting:</h5>
            <ul className="list-unstyled">
                <li><strong>Text-Font:</strong> Times New Roman</li>
                <li><strong>Title size:</strong> 15 (Bold)</li>
                <li><strong>Title Alignment:</strong> Centre</li>
                <li><strong>Headings size:</strong> 11 (Bold)</li>
                <li><strong>Sub-headings size:</strong> 10 (Bold)</li>
                <li><strong>Figures/tables alignment:</strong> Centre</li>
                <li><strong>Text alignment:</strong> Left</li>
            </ul>

            <h5 className="fw-semibold mt-4">Title Page</h5>
            <p><strong>Type of Article:</strong> Review Article</p>
            <p><strong>Title:</strong> [Title of manuscript in title case]</p>
            <p><strong>Authors:</strong> [List all author names here; e.g., Author1, Author2, and Author3]</p>
            <ul className="list-unstyled">
                <li>1 Author name, author department, University, country</li>
                <li>2 Author name, author department, University, country</li>
                <li>3 Author name, author department, University, country</li>
            </ul>
            <p><strong>*Corresponding author:</strong> Author name, contact address, city, state, country, Tel: ; Fax: ; E-mail:</p>
            <p><strong>Keywords:</strong> Keyword; keyword; keyword; keyword; keyword. [Enter four to five keywords here]</p>
            <p><strong>Abbreviations:</strong> [Please enter your text here or paste the text]</p>

            <h5 className="fw-semibold my-4">Manuscript Organization</h5>

            <p><strong>Abstract:</strong> [Less than 250 words for all manuscripts] [Do not use reference numbers here]</p>

            <p><strong>Introduction:</strong></p>
            <p>[Please enter your text here or paste the text] [1–5]</p>

            <p><strong>Side Headings / Sub-headings:</strong></p>
            <p>[Please enter your text here or paste the text] [6–8]</p>

            <p><strong>Discussion & Conclusion:</strong></p>
            <p>[Type or copy/paste your text here]</p>

            <p className="fw-bold mt-3">Acknowledgements:</p>
            <p>[List here any individuals who contributed to the work, along with grant details if applicable.]</p>

            <p className="fw-bold mt-3">Conflict of Interest:</p>
            <p>[Please disclose any financial interests or conflicts of interest here.]</p>

            <p className="fw-bold mt-3">Endnotes:</p>
            <p>[Endnotes text]</p>

            <p className="fw-bold mt-3">References:</p>
            <p>References in the text should be in square brackets, e.g., [1,2,3]. For multiple references, use formats like [1, 2–5]. Figures and tables should be cited in parentheses, e.g., (Figure 1) or (Table 1).</p>
            <p>[All references should be cited consecutively in the article. List them here in numerical order of citation, listing all authors if fewer than five. If more than five, list the first five followed by "et al."]</p>

            <p><strong>General style of reference:</strong></p>
            <p>Author(s). Title of article. Journal short name. Year; Volume (issue): Full inclusive page numbers.</p>

            <p><strong>For a book:</strong></p>
            <p>Author(s). Title of the Book. (Edition). Publisher Name, Place, City, Country, (Year); pp. Full Inclusive Page Numbers.</p>

            <p><strong>For a chapter in a book:</strong></p>
            <p>Author(s). Chapter/Topic Name. In: Author(s) (Editors.), Book Name. (Edition). Publisher Name, Place, City, Country, (Year); pp. Full Inclusive Page Numbers.</p>

            <p><strong>For a conference paper:</strong></p>
            <p>Author(s). Conference Topic. Name of the Conference, Country, (Year).</p>

            <h5 className="fw-semibold mt-4">Figures</h5>
            <p>[Please insert your figure/image here]</p>
            <p>
                <strong>Figure Legend 1:</strong> [Please provide a brief
                description of the figure or image.] [Please insert your
                figure/image here]
            </p>
            <p>
                <strong>Figure Legend 2:</strong> (A) – [Please provide a brief
                description of the figure or image.] (B) - [Please provide a
                brief description of the figure or image.]
            </p>
            <h5 className="fw-semibold mt-4">Tables</h5>
            <p>[Tables must be double-spaced and placed on separate pages.]</p>
            <TableSection tableNumber={1} />
            <p>
                [All tables should be double spaced. Each table on a separate
                page]
            </p>
            <TableSection tableNumber={2} />

            <a
                className="btn btn-accent btn-shadow manuscript_button"
                href="online_manuscript.php"
            >
                Download Sample Template
            </a>
        </section>
    );
};

export default ReviewArticleGuidelines;
