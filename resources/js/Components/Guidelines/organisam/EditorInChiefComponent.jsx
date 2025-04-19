import React from "react";
import ManuscriptSubmissionGuidelines from "./sidebar/ManuscriptSubmissionGuidelines";
import ResearchArticleGuidelines from "./sidebar/ResearchArticleGuidelines";
import EditorialArticleGuidelines from "./sidebar/EditorialArticleGuidelines";
import CaseReportGuidelines from "./sidebar/CaseReportGuidelines";
import ReviewArticleGuidelines from "./sidebar/ReviewArticleGuidelines";
import ShortCommunicationGuidelines from "./sidebar/ShortCommunicationGuidelines";
import ClinicalImageGuidelines from "./sidebar/ClinicalImageGuidelines";
import OpinionGuidelines from "./sidebar/OpinionGuidelines";
import MiniReviewGuidelines from "./sidebar/MiniReviewGuidelines";
import LetterToEditorGuidelines from "./sidebar/LetterToEditorGuidelines";

const responsibilities = [
    {
        title: "1. Quality Assurance:",
        description:
            "The EIC is responsible for maintaining the overall quality of articles by conducting pre-screening assessments.",
    },
    {
        title: "2. Topic Applicability:",
        description:
            "Offers pre-decisions on the suitability of manuscript topics in alignment with the journal's emphasis, ensuring coherence and relevance.",
    },
    {
        title: "3. Reviewer Selection:",
        description:
            "Collaborates with the editorial team to screen and select qualified reviewers who can provide insightful and constructive feedback.",
    },
    {
        title: "4. Decision Approval:",
        description:
            "Reviews and approves all final editorial decisions regarding manuscript acceptance, modification, or rejection, ensuring alignment with the journal's standards.",
    },
    {
        title: "5. Layout Review:",
        description:
            "Conducts a thorough review of the layout and formatting of all manuscripts before publication, ensuring adherence to publication guidelines and standards.",
    },
];

const EditorInChiefComponent = () => {
    return (
        <section className="container pt-3 px-3 px-md-5">
            <h3 className="fw-semibold py-2">Editor in Chief</h3>
            <h5 className="fw-semibold my-4">
                Responsibilities of the Editor-in-Chief
            </h5>

            <p>
                The Editor-in-Chief (EIC) holds ultimate responsibility for
                ensuring the quality, content, and decision-making process for
                all submitted manuscripts. Precisely, the EIC oversees the
                following key areas:
            </p>

            <div className="px-3">
                {responsibilities.map((item, index) => (
                    <div key={index} className="mt-3">
                        <h6 className="fw-bold">{item.title}</h6>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            <p>
                The Editor-in-Chief plays a pivotal role in upholding the
                journal's standards and ensuring that each manuscript meets the
                criteria for publication. Through comprehensive oversight, the
                EIC contributes to the overall excellence of the journal's
                content.
            </p>
        </section>
    );
};

export default EditorInChiefComponent;
