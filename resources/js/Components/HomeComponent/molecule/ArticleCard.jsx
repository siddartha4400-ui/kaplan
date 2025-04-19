import React, { useState } from "react";

const TitleArticalCard = ({ article }) => {
    const formattedDate = new Date(article.publishedDate).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    );

    return (
        <>
            <h5 className=" fw-semibold">{article.title}</h5>
            <p className="mb-1 text-primary">{article.author}</p>
            <p className="mb-1 text-primary">Published: {formattedDate}</p>
            <p className="text-danger ">{article.journal.title}</p>
            <div className="text-end">
                <a
                    href={"/latest-artical-theory"}
                    className="btn btn-outline-danger btn-sm me-2"
                >
                    Full Text
                </a>
                <a
                    href={article.pdf}
                    className="btn btn-outline-success btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download PDF
                </a>
            </div>
        </>
    );
};

const DiscriptionArticalCard = ({ article }) => {
    const [expanded, setExpanded] = useState(false);
    const formattedDate = new Date(article.publishedDate).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    );
    console.log(article.journal.description);
    const abstractLink = `/abstract.php?aid=${article.id}&jid=${
        article.journal.id
    }&Article=${article.title.replace(/\s+/g, "-")}`;
    const toggleDescription = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <div className="discription_article">
            <p className="text-primary text-center fw-bold ">
                {article.journal.title}
            </p>

            <h5 className=" fw-semibold">{article.title}</h5>

            <div className="container border rounded">
                <div className="d-flex justify-content-between align-items-center py-2 px-4">
                    <p className="mb-1 text-danger fw-bold">{article.author}</p>
                    {/* <i
                        className={`ci-arrow-${
                            expanded ? "up" : "down"
                        } text-muted fs-5 arrow-icon ${
                            expanded ? "rotate" : ""
                        }`}
                        onClick={toggleDescription}
                        style={{
                            cursor: "pointer",
                            transition: "transform 0.3s linear",
                        }}
                    ></i> */}
                    <i
                        className={`ci-arrow-up
                         text-muted fs-5 arrow-icon ${
                             expanded ? "rotate" : ""
                         }`}
                        onClick={toggleDescription}
                    />
                </div>

                <div
                    className={`description  ${
                        expanded ? "show py-4 px-4" : ""
                    }`}
                >
                    {article.journal.description.map((line, index) => (
                        <p
                            key={index}
                            className={
                                line.startsWith("*") ? "fw-bold mb-4" : "mb-2"
                            }
                        >
                            {line}
                        </p>
                    ))}
                </div>
            </div>
            <div className="text-primary mt-4">
                <p>
                    <strong>Submission:</strong> formattedDate{" "}
                    <strong>Published::</strong> formattedDate
                </p>

                <p className="text-black">
                    DOI: <span className="text-danger">10.63592/DJS/126</span>
                </p>
            </div>
            <div className="text-end">
                <a
                    href={abstractLink}
                    className="btn btn-outline-danger btn-sm me-2"
                >
                    Full Text
                </a>
                <a
                    href={article.pdf}
                    className="btn btn-outline-success btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download PDF
                </a>
            </div>
        </div>
    );
};

const ArticleCard = ({ article, latestArticle }) => {
    return (
        <div className="card mb-4 border-0 shadow-sm p-2 border-bottom ">
            <div className="card-header d-flex justify-content-between align-items-center">
                <span className="fw-bold text-capitalize">
                    {article.articletype}
                </span>
                <div className="d-flex align-items-center">
                    <span className="me-2 fw-semibold">
                        {article.journal.shortname}
                    </span>
                    <i className="ci-locked"></i>
                </div>
            </div>
            <div className="card-body d-flex">
                <div className="col-4 col-md-3 pe-3 text-primary ">
                    <img
                        src={article.photo}
                        alt={article.title}
                        className="img-fluid rounded article-image mb-4"
                    />
                    <span className="fs-6">ISSN: 3066-3822</span>
                    <p className="fs-6"> Volume 2 Issue 4</p>
                </div>
                <div className="col-8 col-md-9">
                    {latestArticle ? (
                        <DiscriptionArticalCard article={article} />
                    ) : (
                        <TitleArticalCard article={article} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
