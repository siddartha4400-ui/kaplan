import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { images } from "../../../../img/assets";
import EditorSlider from "./EditorSlider";
import "../../../../css/Sidebar.css";

const Sidebar = ({ guidelines, selectedGuidelines, setSelectedGuidelines }) => {
    console.log(selectedGuidelines, " slejhgv");
    const MEMBERIN = [
        images.cardMaster,
        images.cardPaypal,
        images.cardVisa,
        images.cardPaypal,
        images.cardVisa,
    ];
    const GUIDELINES = [
        {
            id: 1,
            title: "Manuscript Guidelines",
        },
        {
            id: 2,
            title: "Research Article",
        },
        {
            id: 3,
            title: "Editorial",
        },
        {
            id: 4,
            title: "Case Report",
        },
        {
            id: 5,
            title: "Review Article",
        },
        {
            id: 6,
            title: "Opinion",
        },
        {
            id: 7,
            title: "Short Communication",
        },
        {
            id: 8,
            title: "Mini Review",
        },
        {
            id: 9,
            title: "Letter to Editor",
        },
        {
            id: 10,
            title: "Clinical Image",
        },
    ];

    return (
        <div className="sidebar-wrapper">
            <div className="section">
                {/* Guidelines */}
                <div className="w-100 border rounded overflow-hidden my-3">
                    {guidelines &&
                        GUIDELINES.map((item, index) => (
                            <div
                                key={index}
                                className={`guidelines-card w-100 p-2 border-top ${
                                    index === 0 ? "border-0" : ""
                                } ${
                                    item.id === selectedGuidelines
                                        ? "selected-card"
                                        : ""
                                }`}
                                onClick={() => setSelectedGuidelines(item.id)}
                            >
                                {item.title}
                            </div>
                        ))}
                </div>

                <h6 className="section-title">Member In</h6>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500 }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        720: { slidesPerView: 3 },
                        991: { slidesPerView: 3 },
                        1300: { slidesPerView: 4 },
                    }}
                    loop
                >
                    {MEMBERIN.map((img, i) => (
                        <SwiperSlide key={i}>
                            <div className="member-box">
                                <img
                                    src={img}
                                    alt={`Member ${i + 1}`}
                                    className="img-fluid"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-end pt-4">
                    <a className="btn btn-sm custom-btn" href="/home">
                        View All
                    </a>
                </div>
            </div>

            {/* Our Editors */}
            <EditorSlider />

            {/* Know Your Article Status */}
            <div className="status-section my-4">
                <h6 className="section-title">Know Your Article Status</h6>
                <input
                    type="text"
                    className="custom-input"
                    placeholder="Your Name"
                />
                <input
                    type="email"
                    className="custom-input"
                    placeholder="Email"
                />
                <div className="d-flex mb-3 ">
                    <input
                        type="email"
                        className="custom-input-refresh me-1"
                        placeholder="Email"
                    />
                    <a
                        className="btn btn-sm custom-btn refresh-btn"
                        href="#"
                    >
                        Refresh
                    </a>
                </div>

                <input
                    type="text"
                    className="custom-input"
                    placeholder="Captcha:"
                />
                <button className="btn btn-sm custom-btn">Submit</button>
            </div>

            {/* Newsletter */}
            <div className="section">
                <h6 className="section-title">Subscribe to Newsletter</h6>
                <p>Get All Our Latest Updates</p>
                <img
                    src={images.popupEmailSubscription}
                    alt="Plagiarism Software"
                    className="highlight-img"
                />
            </div>

            {/* Plagiarism Software */}
            <div className="section">
                <h6 className="section-title">Plagiarism Software</h6>
                <div className="highlight-box">
                    <img
                        src={images.plagarism}
                        alt="Plagiarism Software"
                        className="highlight-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
