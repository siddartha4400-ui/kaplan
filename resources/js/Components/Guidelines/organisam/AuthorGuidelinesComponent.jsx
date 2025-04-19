import React from 'react';

const AuthorGuidelinesComponent = () => {
    return (
        <section className="container mt-4">
            <h2 className="mb-4">Author Guidelines</h2>

            <h5>Authorship Criteria:</h5>
            <p>
                Authors must meet specific criteria, contributing significantly to the study's conception, design, execution, data analysis, and manuscript drafting or revision. They must approve the final version and agree to publication.
            </p>

            <h5>Contributions Acknowledgement:</h5>
            <p>
                Individuals making substantial contributions but not meeting authorship criteria should be acknowledged in the "Acknowledgements" section, with their permission.
            </p>

            <h5>Corresponding Author's Responsibilities:</h5>
            <p>
                The corresponding author ensures appropriate co-authors, excludes inappropriate ones, and verifies their approval of the final manuscript for submission. This ensures publication integrity.
            </p>

            <h4 className='my-4'>Duties of Authors</h4>

            <h5>Reporting Integrity:</h5>
            <p>
                Authors conducting original research are expected to provide an accurate account of their work and results, followed by an objective discussion of its significance. The manuscript should offer sufficient detail and references to enable replication. Review articles must be accurate, objective, and comprehensive, while opinion pieces should be explicitly identified. Fraudulent or knowingly inaccurate statements are considered unethical.
            </p>

            <h5>Data Access and Preservation:</h5>
            <p>
                Authors might be requested to furnish the raw data associated with their paper for editorial evaluation, and they should be ready to grant public access to this data. This accessibility not only facilitates transparency and reproducibility in research but also allows other scholars to scrutinize and build upon the findings presented in the paper. It's imperative for authors to ensure that the provided data is well-documented, properly organized, and available through appropriate channels such as institutional repositories or data archives. This practice contributes to the advancement of knowledge and the credibility of academic research.
            </p>

            <h5>Originality and Plagiarism:</h5>
            <p>
                Authors must submit entirely original works and appropriately cite any borrowed content. Plagiarism, in various forms, is unethical and unacceptable, encompassing presenting others' work as one's own or copying without attribution.
            </p>

            <h5>Rejection Criteria:</h5>
            <p>
                Your manuscript may face rejection if it lacks proper structure, detailed information for reader comprehension, new scientific contributions, clarity in distinguishing new and existing knowledge, up-to-date references, and robust support for theories or conclusions. Insufficient experimental details hindering reproducibility or poor experimental design may also lead to rejection.
            </p>
          
            <p>
                <strong>Guidelines for Revision:</strong> When revising your manuscript:
            </p>
            <ul className="pl-4">
                <li className='my-1'>Address all points raised by the editor and reviewers.</li>
                <li className='my-1'>Clearly describe revisions in your response letter.</li>
                <li className='my-1'>Perform additional experiments recommended by reviewers, unless justified.</li>
                <li className='my-1'>Provide a polite and scientific rebuttal to points of disagreement.</li>
                <li className='my-1'>Clearly differentiate between reviewer comments and your responses.</li>
                <li className='my-1'>Highlight major revisions in the text for clarity.</li>
                <li className='my-1'>Submit the revised manuscript and response letter within the specified timeframe.</li>
            </ul>

            <p>
                To avoid the rejection rate of manuscript, please follow the manuscript guidelines.
            </p>
        </section>
    );
};

export default AuthorGuidelinesComponent;
