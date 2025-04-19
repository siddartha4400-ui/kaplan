import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { images } from '../../../../img/assets';
import '../../../../css/Footer.css'

const testimonials = [
  {
    text: "WestLand Publishers is committed to fostering innovation and collaboration...",
    name: "Prof. Rebecca Adams",
    title: "Researcher",
    image: images.authorImage
  },
  {
    text: "Publishing with WestLand Publishers has been a positive experience...",
    name: "Dr. Emma Taylor",
    title: "Scholar",
    image: images.authorImage1
  },
  {
    text: "WestLand Publishers' efforts in advancing scientific research are commendable...",
    name: "Prof. Michael Brown",
    title: "Scientist",
    image: images.authorImage2
  },
  {
    text: "Publishing with WestLand Publishers has been a positive experience...",
    name: "Dr. Emma Taylor",
    title: "Scholar",
    image: images.authorImage2
  },
  {
    text: "WestLand Publishers' efforts in advancing scientific research are commendable...",
    name: "Prof. Michael Brown",
    title: "Scientist",
    image: images.authorImage1
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
