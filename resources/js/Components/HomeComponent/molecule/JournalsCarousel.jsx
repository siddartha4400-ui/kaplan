import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const JournalCard = ({ title, subtitle, image }) => {
  return (
    <div className=" card product-card card-static pb-0 border-0 h-100 w-100">
      <div style={{ position: 'relative', overflow: 'hidden', height: '250px' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            width: '100%',
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            padding: '10px',
            fontSize: '0.9rem',
            textAlign: 'center',
            borderTop: '1px solid #fff',
          }}
        >
          <strong>{title}</strong><br />
          <span style={{ color: '#00cccc' }}>{subtitle}</span>
        </div>
      </div>
      <div className="card-body py-2 d-flex flex-column justify-content-between" style={{ height: '80px' }}>
        <h3 className="product-title fs-sm text-center">{title} ({subtitle})</h3>
      </div>
    </div>
  );
};

const dummyData = [
  {
    title: 'Advance Research in Environmental Sciences and Ecology',
    subtitle: 'ARESE',
    image: 'https://media.istockphoto.com/id/1131300086/photo/newspapers-and-laptop.jpg?s=612x612&w=0&k=20&c=-7JfG0qdqw0euf8kQs-37RXjO7kS7WDiCNqRvKGFoxY='
  },
  {
    title: 'Journal of Cardiology and Angiology',
    subtitle: 'JCA',
    image: 'https://plus.unsplash.com/premium_photo-1664298488678-707a87ede1e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzZWFyY2glMjBwYXBlcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Digital Journal of Case Reports and Clinical Images',
    subtitle: 'DJCRCI',
    image: 'https://plus.unsplash.com/premium_photo-1661431121792-81fa2b971d0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVwb3J0c3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Current Research in Ophthalmology and Visual Sciences',
    subtitle: 'CROVS',
    image: 'https://www.projectmanager.com/wp-content/uploads/2013/08/4-Types-of-Project-Reports.jpg'
  },
  {
    title: 'Journal of Cardiology and Angiology',
    subtitle: 'JCA',
    image: 'https://plus.unsplash.com/premium_photo-1664298488678-707a87ede1e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzZWFyY2glMjBwYXBlcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Digital Journal of Case Reports and Clinical Images',
    subtitle: 'DJCRCI',
    image: 'https://plus.unsplash.com/premium_photo-1661431121792-81fa2b971d0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVwb3J0c3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Current Research in Ophthalmology and Visual Sciences',
    subtitle: 'CROVS',
    image: 'https://www.projectmanager.com/wp-content/uploads/2013/08/4-Types-of-Project-Reports.jpg'
  }
];

const JournalsCarousel = () => {
  return (
    <section className="col-lg-12 pt-3 pt-md-4 px-5" style={{ backgroundColor: "#f6f9fc" }}>
        <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
          <h2 className="h3 mb-0 pt-3 me-3 font-bold">Our Journals</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          spaceBetween={24} // instead of 16
          slidesPerView={4}
          breakpoints={{
            480: { slidesPerView: 2 },
            720: { slidesPerView: 3 },
            991: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }}
          loop
        >
          {dummyData.map((journal, index) => (
            <SwiperSlide key={index}>
              <JournalCard
                title={journal.title}
                subtitle={journal.subtitle}
                image={journal.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-end py-4">
          <a className="btn btn-sm custom-btn" href="/journals">View All</a>
        </div>      
    </section>
  );
};

export default JournalsCarousel;
