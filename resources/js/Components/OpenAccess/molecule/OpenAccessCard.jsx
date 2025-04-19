import React from "react";

const OpenAccessCard = () => {
    return (
        <section className="container pt-3 px-3 px-md-5">
            <h3 className=" fw-semibold py-2">Open Access</h3>
            <div className="">
                <p>
                    At Westland Publishers, we unwaveringly adhere to the
                    principles of open access (OA), recognizing its
                    transformative impact on knowledge dissemination, the
                    acceleration of scientific progress, and the unrestricted
                    accessibility of research findings worldwide. As a genuine
                    journal publishing company, we uphold the utmost standards
                    of quality, integrity, and ethical conduct. Our commitment
                    ensures that our open-access publications embody the
                    pinnacle of scientific rigor and innovation.{" "}
                </p>

                <p>
                    <strong>Open Access Defined: </strong>
                    Open access denotes unrestricted online access to scholarly
                    articles, research papers, and various academic
                    publications. This approach enables individuals worldwide to
                    freely read, download, copy, distribute, or reuse these
                    materials without encountering financial or legal barriers.
                </p>

                <h4 className=" fw-semibold my-4 ">Open Access Models:</h4>

                <p>
                    <strong>Gold OA: </strong>
                    Immediate free access, funded by authors or institutions
                    through APCs.
                </p>

                <p>
                    <strong>Green OA: </strong>
                    Manuscript self-archiving in repositories, accessible after
                    a publisher-determined embargo.{" "}
                </p>

                <p>
                    <strong>Hybrid OA: </strong>
                    Journals offer subscription and open access articles;
                    authors can opt for OA with APCs.
                </p>

                <h4 className=" fw-semibold my-4 ">Benefits</h4>

                <p>
                    Open Access provides widespread access to research findings
                    by removing financial barriers, benefiting researchers,
                    students, and the public. It enhances visibility and impact,
                    accelerates scientific progress through faster
                    dissemination, fosters collaboration, and promotes public
                    engagement for evidence-based decision-making. Additionally,
                    open access ensures the preservation of research through
                    digital repositories, contributing to the cumulative nature
                    of scientific knowledge.
                </p>

                <p>
                    Westland Publishers wholeheartedly embraces the Gold Open
                    Access model, providing immediate and unrestricted access to
                    articles on our platform. We prioritize eliminating
                    financial barriers for readers, with authors, institutions,
                    or funding bodies covering article processing charges (APCs)
                    for free content accessibility. This commitment aims to
                    facilitate global knowledge sharing and foster collaboration
                    among researchers and scholars. Through our dedication to
                    Gold Open Access, we envision a future where research is
                    transparent, innovative, and accessible, contributing to the
                    democratization of knowledge on a global scale.
                </p>

                <h4 className=" fw-semibold my-4 ">APC</h4>

                <strong>
                    {" "}
                    Why do Open Access journals charge for publication?
                </strong>
                <p>
                    Westland Publishers manage various journal expenses,
                    including web hosting, editing, and open access, with
                    authors paying modest publication fees. These fees ensure
                    quality services such as editing, proofreading, and
                    plagiarism checks. Article Processing Charges (APCs) cover
                    the detailed work before accepting a manuscript. Articles in
                    different journals are available in PDF and XML versions. As
                    a stand-alone entity without external funding, Westland
                    Publishers rely on publication fees for operation, covering
                    employee salaries and other costs. The journals are open
                    access, and APCs are typically paid by authors, research
                    institutes, or funding agencies. Confirmation receipts are
                    sent after payment.
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
            <a
                class="btn btn-accent btn-shadow manuscript_button "
                href="online_manuscript.php"
            >
                Submit Manuscript
            </a>
        </section>
    );
};

export default OpenAccessCard;
