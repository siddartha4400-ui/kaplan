import React, { useState, useEffect } from "react";

const ContactUsSection = () => {
    const [userCoordinates, setUserCoordinates] = useState({
        lat: 33.046,
        lng: -96.994,
    }); // Default coordinates (Lewisville, TX)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted:", formData);
        // Here you would typically send the form data to your backend
    };

    return (
        <div className="container-fluid p-0">
            {/* Contact Us Header */}
            <div className="container mt-4">
                <h3 className=" fw-semibold py-2">Contact Us</h3>
            </div>

            <div className="container mb-5">
                <div className="row">
                    {/* Left side - Contact info */}
                    <div className="col-md-6">
                        <div className="bg-white p-4 mb-4 rounded  shadow-sm">
                            <div className="d-flex flex-column align-items-center text-center">
                                <i className="ci-location h3 text-primary mb-2"></i>
                                <h5 className="mb-1">Address</h5>
                                <p className="mb-0 text-muted">
                                    1106 Bowie Drive Lewisville, Texas 75077
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="bg-white p-4 mb-4 rounded shadow bg-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <i className="fa fa-phone text-primary me-3 fs-4"></i>
                                        <div>
                                            <i class="ci-phone h3 mt-2 mb-4 text-primary"></i>
                                            <h5 className="mb-1">
                                                Phone numbers
                                            </h5>
                                            <p className="mb-0 text-muted">
                                                +1(214) 555-3221
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bg-white p-4 mb-4 rounded shadow bg-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <i className="fa fa-envelope text-primary me-3 fs-4"></i>
                                        <div>
                                            <i class="ci-mail h3 mt-2 mb-4 text-primary"></i>
                                            <h5 className="mb-1">
                                                Email addresses
                                            </h5>
                                            <p className="mb-0 text-muted">
                                                contact@westliquipshirts.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact form */}
                    <div className="col-md-6">
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="mb-4">Drop us a line</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="name"
                                            className="form-label"
                                        >
                                            Your name:{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email address:{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="johndoe@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="phone"
                                            className="form-label"
                                        >
                                            Your phone:{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="+1 (212) 00 000 000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="subject"
                                            className="form-label"
                                        >
                                            Subject:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            placeholder="Provide short title of your request"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="message"
                                        className="form-label"
                                    >
                                        Message:{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Please describe in detail your request"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <a
                                    className="btn btn-sm custom-btn"
                                    href="/journals"
                                >
                                    {" "}
                                    Send message
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;
