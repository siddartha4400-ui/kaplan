import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { images } from '../../../../img/assets';
import { COMMONTITLES } from '../../../../utility/CommonValues';

const features = [
    {
        icon: images.pdf,
        title: "PDF",
        description: "PDF, short for Portable Document Format, was developed by Adobe",
        link: `/common-text/${COMMONTITLES.PDF}`
    },
    {
        icon: images.html,
        title: "Full Text",
        description: "A full-text database is a compilation of documents",
        link: `/common-text/${COMMONTITLES.FULLTEXT}`
    },
    {
        icon: images.ebook,
        title: "Article Preparation",
        description: "Preparing to submit their manuscript",
        link: "/manuscript-submission"
    },
    {
        icon: images.video,
        title: "24/7 Support",
        description: "Round-the-clock assistance and service availability",
        link: "/contact-us"
    }
];

const FeatureCards = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {features.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex">
                        <div className="card w-100 shadow-sm p-3 d-flex flex-column justify-content-between" style={{ border: "1px solid #ccc" }}>
                            <div className="d-flex align-items-center pb-3">
                                <div
                                    className="img-thumbnail rounded-circle flex-shrink-0"
                                    style={{ width: "5.375rem", height: "5.375rem", overflow: "hidden" }}
                                >
                                    <img className="rounded-circle w-100 h-100 object-fit-cover" src={item.icon} alt={item.title} />
                                </div>
                                <div className="ps-3">
                                    <h5 className="mb-1">{item.title}</h5>
                                    <p className="text-muted small mb-2">{item.description}</p>
                                </div>
                            </div>
                            <a className="custom-btn btn btn-danger btn-sm mt-auto align-self-start" href={item.link}>
                                Read More
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;
