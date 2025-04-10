import React from 'react';

const FooterTwo = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Collaborating with WestLand Publishers has been a great experience. Their dedication to quality and integrity sets them apart in the industry. From manuscript submission to publication, their team offers exceptional support, ensuring a smooth journey.",
      image: "img/reviews/03.jpg",
      name: "Dr. James Carter",
      role: "Academician"
    },
    {
      id: 2,
      quote: "WestLand Publishers is committed to fostering innovation and collaboration in scholarly publishing. It's an honor to have my research featured in their journals, and I appreciate their support.",
      image: "img/reviews/04.jpg",
      name: "Prof. Rebecca Adams",
      role: "Researcher"
    },
    {
      id: 3,
      quote: "Publishing with WestLand Publishers has been a positive experience. Their professionalism and rigorous peer review process contribute to the quality of their publications.",
      image: "img/reviews/05.jpg",
      name: "Dr. Emma Taylor",
      role: "Scholar"
    },
    {
      id: 4,
      quote: "WestLand Publishers' efforts in advancing scientific research are commendable. It's been a privilege to partner with them.",
      image: "img/reviews/01.jpg",
      name: "Prof. Michael Brown",
      role: "Scientist"
    },
    {
      id: 5,
      quote: "I recommend WestLand Publishers to researchers seeking a reputable platform. Their attention to detail makes them stand out.",
      image: "img/reviews/02.jpg",
      name: "Dr. Sarah White",
      role: "Researcher"
    }
  ];

  return (
    <div className="container py-md-4 pt-3 pb-0 py-sm-3">
      <h2 className="text-center mb-4 mb-md-5">Testimonials</h2>
      <div className="tns-carousel mb-3">
        <div 
          className="tns-carousel-inner" 
          data-carousel-options={JSON.stringify({
            items: 2,
            autoplay: true,
            controls: false,
            responsive: {
              "0": { items: 1, gutter: 20 },
              "576": { items: 2, gutter: 20 },
              "850": { items: 3, gutter: 20 },
              "1080": { items: 3, gutter: 25 }
            }
          })}
        >
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="mb-2">
              <div className="card card-body fs-md text-muted border-0 shadow-sm">
                {testimonial.quote}
              </div>
              <footer className="d-flex justify-content-center align-items-center pt-4">
                <img 
                  className="rounded-circle" 
                  src={testimonial.image} 
                  width="50" 
                  alt={testimonial.name}
                />
                <div className="ps-3">
                  <h6 className="fs-sm mb-n1">{testimonial.name}</h6>
                  <span className="fs-ms text-muted opacity-85">{testimonial.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;