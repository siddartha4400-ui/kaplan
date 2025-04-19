import React from 'react';

const AboutCard = () => {
    return (
        <section className="container pt-3 px-3 px-md-5">
            <h3 className=" fw-semibold py-2">About Us</h3>
            <div className="">
                <p>
                    WestLand publishers was founded with a fundamental mission: to disseminate high-quality scientific knowledge to the global research community. As proponents of the Open Access model, we are committed to providing top-tier online scientific publications. Open Access eliminates the traditional barriers in publishing, aligning with the rapid pace of the twenty-first century.
                </p>

                <p>
                    Our primary areas of focus encompass the fields of science, engineering, and related disciplines.
                    WestLand publishers serves as a platform for professors and researchers eager to share their
                    research findings and expertise, contributing to the scholarly pursuits of fellow researchers and
                    students by offering the most up-to-date information.
                </p>

                <p>
                    Our dedication to the needs of scientists, students, and research scholars drives us to strive for
                    leadership in Open Access Publications. We proudly offer a range of prestigious international
                    academic journals dedicated to serving the engineering, scientific, and medical communities.
                    Our published articles come in various formats, including HTML, PDF, digital, audio, and video,
                    all of which are freely accessible to scientists, students, and the wider research community
                    immediately upon publication.
                </p>

                <p>
                    Every manuscript we publish undergoes rigorous peer review by esteemed members of our editorial boards.
                    We also welcome online letters, emails from editors, brief comments, or suggested enhancements to
                    previously published articles. Our rigorous standards demand that manuscripts be of the highest quality,
                    reflecting the authors' scholarly expertise and ensuring the accuracy and reliability of the information
                    they convey.
                </p>

                <p>
                    We consider manuscript submissions from researchers across the globe, and each submission is subjected
                    to a thorough double-blind review process. Our commitment to efficiency ensures rapid review and publication,
                    making your research readily available online to readers worldwide. We prioritize confidentiality in our
                    review process and archive all published content permanently. The use of Digital Object Identifiers (DOIs)
                    facilitates global access to our articles.
                </p>

                <p>
                    We extend a warm invitation to authors to explore our website and submit their scientific papers to our
                    journals, contributing to the dissemination of knowledge and the advancement of research across the
                    scientific community.
                </p>

                <p>
                    For offline submissions send your manuscript to <br />
                    <strong>support@westlandpublishers.com</strong>
                    <em>(note: Mention Journal name in the email)</em>
                </p>
            </div>
            {/* <div className="">
                <a href="/submit-manuscript" className="btn btn-primary">
                    Submit Manuscript
                </a>
            </div> */}
            <a className="btn btn-accent btn-shadow manuscript_button " href="online_manuscript.php">Submit Manuscript</a>
        </section>
    );
};

export default AboutCard;
