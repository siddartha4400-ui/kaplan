import React from "react";
import { COMMONTITLES } from "../../../../utility/CommonValues";

const CommonTextComponent = ({ type }) => {
    return (
        <section className="container mt-4">
            {COMMONTITLES.PDF === type && (
                <>
                    <h2 className="mb-3 fw-bold">PDF</h2>
                    <p>
                        PDF (Portable Document Format) is a widely used file
                        format designed to preserve the appearance and layout of
                        a document in a digital format. This format ensures that
                        the content, including text, fonts, images, and
                        graphics, remains consistent and accurately represented
                        regardless of the device or operating system used to
                        view it. PDFs are versatile and support various
                        features, such as interactive elements, multimedia
                        content, and security options. They can include
                        interactive forms, buttons, and hyperlinks, and can also
                        be secured with encryption and digital signatures to
                        protect sensitive information. PDFs are universally
                        accessible and can be viewed on a wide range of devices,
                        making them ideal for sharing documents that need to
                        maintain their original formatting and integrity. Their
                        ability to compress content while retaining high quality
                        makes them suitable for professional and personal use,
                        from reports and academic papers to forms and
                        presentations.
                    </p>
                    <p>
                        For offline submissions send your manuscript to <br />
                        <strong>support@westlandpublishers.com</strong>
                        <em>(note: Mention Journal name in the email)</em>
                    </p>
                    <a
                        className="btn btn-accent btn-shadow manuscript_button "
                        href="online_manuscript.php"
                    >
                        Submit Manuscript
                    </a>
                </>
            )}
            {COMMONTITLES.FULLTEXT === type && (
                <>
                    <h2 className="mb-3 fw-bold">Full Text</h2>
                    <p>
                        Conversely, a full-text database is a compilation of
                        documents or information organized in a database format,
                        where the complete text of each referenced document is
                        available online for viewing, printing, or downloading.
                        These databases often include images like graphs, maps,
                        photos, and diagrams, and they are searchable by keyword
                        or phrase. This feature makes them well-suited for
                        online courses, enabling users to access materials
                        conveniently. In cases where a document appears in PDF
                        format, it is typically a scanned version of the
                        original hardcopy.
                    </p>
                    <p>
                        Full-text databases find applications in various fields,
                        including online education, allowing users to retrieve
                        materials without leaving their location. Government
                        agencies, such as the U.S. Internal Revenue Service and
                        state departments of revenue, also leverage full-text
                        databases for efficient information retrieval.
                    </p>

                    <p>
                        For offline submissions send your manuscript to <br />
                        <strong>support@westlandpublishers.com</strong>
                        <em>(note: Mention Journal name in the email)</em>
                    </p>
                    <a
                        className="btn btn-accent btn-shadow manuscript_button "
                        href="online_manuscript.php"
                    >
                        Submit Manuscript
                    </a>
                </>
            )}
            {COMMONTITLES.VIDEOARTICLES === type && (
                <>
                    <h2 className="mb-3 fw-bold">Video Articles</h2>
                    <p>
                        Westland Publishers is dedicated to advancing open
                        access video articles, providing researchers with an
                        accessible and cost-effective platform. Our goal is to
                        encourage an integrated approach to illustrate
                        educational research, fostering innovation and exploring
                        new frontiers in the scientific domain. Westland
                        Publishers offers an advanced platform for researchers
                        to present their work through dynamic video articles,
                        facilitating investigational visualization for a global
                        audience. This method enables researchers to dynamically
                        share their findings, ensuring rapid dissemination and
                        recognition within their research community. We extend
                        an invitation for video research articles in diverse
                        fields, such as Medical, Life Science, Health Care,
                        Pharma, and others, for publication in our Journal.
                    </p>
                    <p>Submission Criteria for Video Articles:</p>
                    <ol>
                        <li>
                            Articles should comprise both written and video
                            components that complement each other.
                        </li>
                        <li>
                            Video articles can be presented as a single clip or
                            segmented into smaller clips for specific use.
                        </li>
                        <li>
                            Submit your Video Articles to
                            support@westlandpublishers.com.
                        </li>
                    </ol>
                </>
            )}
            {COMMONTITLES.EBBOK === type && (
                <>
                    <h2 className="mb-3 fw-bold">E-Books</h2>
                    <p>
                        E-Books offer numerous advantages, providing flexibility
                        in reading at one's convenience. They serve as a
                        creative way to present knowledge, with visual appeal
                        surpassing traditional formats. The e-book has become
                        the prevailing standard for sharing research globally.
                        At Westland Publishers, we offer high-quality PDF
                        formats, ensuring scholars can showcase their work to
                        the world effectively.
                    </p>
                    <p>
                        E-books allow for rapid information retrieval with a
                        simple click, acting as a portable library accessible on
                        various devices. Westland Publishers delivers top-notch
                        e-prints viewable on any screen. These e-books are
                        freely available, adhering to the open-access model,
                        making them affordable and accessible to all. Moreover,
                        e-books can include multimedia elements, enhancing the
                        reading experience with audio and video content.
                    </p>
                    <p>
                        Readers of Westland e-books enjoy access to popular
                        works by featured professors from global universities.
                        There are no restrictions on downloads, allowing readers
                        to download once and circulate the PDF freely. As an
                        open-access publication, there are no costs for readers,
                        and the e-books can be stored on electronic devices for
                        offline access.
                    </p>
                    <p>
                        Additionally, our author reprints service enables
                        authors to purchase hard copies of their e-books, with a
                        minimum order quantity of 50 copies. Extra charges for
                        printing and delivering the hard copies vary based on
                        the number of pages, images, and shipping location.
                        Westland Publishers is committed to encouraging a love
                        for reading through these accessible and convenient
                        e-books.
                    </p>
                    <table className="empty-table my-4">
                        <thead>
                            <tr>
                                <th>Pages</th>
                                <th> {`< 50 pages`}</th>
                                <th>50-200 Pages</th>
                                <th>200-500 pages</th>
                                <th> 500 and above pages</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {" "}
                                <th>Cost</th>
                                <td> 999$</td>
                                <td> 1399$</td>
                                <td> 1999$</td>
                                <td> 2599$</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Authors can submit their e-book materials to
                        support@westlandpublishers.com, and our representatives
                        will respond promptly.
                    </p>
                    <p>
                        For offline submissions send your manuscript to <br />
                        <strong>support@westlandpublishers.com</strong>
                        <em>(note: Mention Journal name in the email)</em>
                    </p>
                    <a
                        className="btn btn-accent btn-shadow manuscript_button "
                        href="online_manuscript.php"
                    >
                        Submit Manuscript
                    </a>
                </>
            )}
        </section>
    );
};

export default CommonTextComponent;
