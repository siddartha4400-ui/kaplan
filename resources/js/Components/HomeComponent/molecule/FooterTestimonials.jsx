import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { images } from '../../../../img/assets';
import '../../../../css/Footer.css'

const testimonials = [
  {
    text: "I recommend WestLand Publishers to researchers seeking a reputable platform. Their attention to detail makes them stand out.",
    name: "Dr. Sarah White",
    title: "Researcher",
    image: images.authorImage, // image of Sarah White
  },
  {
    text: "Collaborating with WestLand Publishers has been a great experience. Their dedication to quality and integrity sets them apart in the industry. From manuscript submission to publication, their team offers exceptional support, ensuring a smooth journey.",
    name: "Dr. James Carter",
    title: "Academician",
    image: images.authorImage1, // image of James Carter
  },
  {
    text: "WestLand Publishers is committed to fostering innovation and collaboration in scholarly publishing. It’s an honor to have my research featured in their journals, and I appreciate their support.",
    name: "Prof. Rebecca Adams",
    title: "Researcher",
    image: images.authorImage2, // image of Rebecca Adams
  },
  {
    text: "Publishing with WestLand Publishers has been a positive experience. Their professionalism and rigorous peer review process contribute to the quality of their publications.",
    name: "Dr. Emma Taylor",
    title: "Scholar",
    image: images.authorImage, // image of Emma Taylor
  }
];


const FooterTestimonials = () => {
  return (
    <div className="footer-slider-section px-10">
      <h2 className="text-center mb-4 mb-md-5">Testimonials</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        loop
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className="testimonial-card">
                <div className="testimonial-author">
                  <p className="testimonial-text ">{item.text}</p>
                </div>
              </div>
              <div className='d-flex mt-3'>
                <img src={item.image} alt="Editor" className="testimonial-image " />
                <div className='block ms-3'>
                  <span className='testimonial-name'>{item.name}</span>
                  <span className='testimonial-title'>{item.title}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FooterTestimonials;
