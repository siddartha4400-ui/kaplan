import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const slides = [
    {
        id: 1,
        src: 'https://c8.alamy.com/comp/PE2T6E/it-concept-information-technology-diagram-with-icons-of-internet-computer-and-mobile-phone-PE2T6E.jpg',
        alt: 'Slide 1',
    },
    {
        id: 2,
        src: 'https://www.shutterstock.com/image-photo/ict-information-communication-technology-concept-260nw-1341139514.jpg',
        alt: 'Slide 2',
    },
    {
        id: 3,
        src: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg',
        alt: 'Slide 3',
    },
];

const ImageSlider = () => {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: '100%', height: '100%', position: 'relative' }}
        >
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div className="carousel-inner" style={{ height: '100%' }}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        style={{ height: '100%' }}
                    >
                        <img
                            src={slide.src}
                            className="d-block w-100"
                            alt={slide.alt}
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
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
                style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ImageSlider;
