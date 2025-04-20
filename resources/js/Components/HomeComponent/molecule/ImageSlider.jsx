import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { getSlider } from "../../../services/api/apis";

const ImageSlider = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        getSlider(1)
            .then((res) => {
                console.log("Slider API Response:", res);

                const jsonData = res?.json; // ✅ FIXED THIS LINE

                if (jsonData) {
                    const formattedSlides = Object.values(jsonData).map(
                        (item, index) => ({
                            id: index + 1,
                            src: item.filePath,
                            // src: item.filePath.replace("http://", "https://"),
                            alt: item.filename || `Slide ${index + 1}`,
                        })
                    );
                    setSlides(formattedSlides);
                }
            })
            .catch((error) => {
                console.error("Slider Fetch Error:", error);
            });
    }, []);

    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: "100%", height: "100%", position: "relative" }}
        >
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div className="carousel-inner" style={{ height: "100%" }}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item ${
                            index === 0 ? "active" : ""
                        }`}
                        style={{ height: "100%" }}
                    >{console.log(slide.src)}
                        <img
                            src={slide.src}
                            className="d-block w-100"
                            alt={slide.alt}
                            style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </div>
                ))}
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                style={{ top: "50%", transform: "translateY(-50%)" }}
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
                style={{ top: "50%", transform: "translateY(-50%)" }}
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ImageSlider;
