import React from "react";

const JournalCard = ({ journal }) => {
    return (
        <div className="card journal-card">
            <div className="card-body h-100 d-flex flex-column justify-content-between">
                <div className="row g-0 h-100 p-3">
                    <div className="col-md-4 ">
                        <img
                            src={journal.image}
                            className="img-fluid h-100 w-100 rounded-start object-fit-cover"
                            alt={journal.name}
                            style={{
                                objectFit: "cover",
                                height: "100%",
                                borderRadius: "0.375rem",
                            }}
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column ps-3">
                        <text className="card-title fw-bold">
                            {journal.name}
                        </text>
                        <small className="text-muted card-text">
                            ISSN: {journal.issn || "XXXX-XXXX"}
                        </small>
                        <div className="d-flex justify-content-between align-items-center ">
                            <div className="d-flex">
                                <text className="card-text">WJAST</text>
                                <i class="ci-unlocked ms-2"></i>
                            </div>
                            <a
                                className="btn btn-sm jurnals-btn"
                                href="/journals"
                            >
                                View
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalCard;
