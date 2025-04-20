import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { getJournals } from '../../../services/api/apis';

const JournalCard = ({ title, subtitle, image }) => {
  return (
    <div className="card product-card card-static pb-0 border-0 h-100 w-100">
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

const JournalsCarousel = () => {
  const [realData, setRealData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJournals('dashboard')
      .then((res) => {
        setRealData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Slider Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional: Show a loading indicator
  }

  return (
    <section className="col-lg-12 pt-3 pt-md-4 px-5" style={{ backgroundColor: "#f6f9fc" }}>
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 me-3 font-bold">Our Journals</h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        spaceBetween={24}
        slidesPerView={4}
        breakpoints={{
          480: { slidesPerView: 2 },
          720: { slidesPerView: 3 },
          991: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
        loop
      >
        {realData && realData.length > 0 ? (
          realData.map((journal, index) => (
            <SwiperSlide key={index}>
              <JournalCard
                title={journal.title}
                subtitle={journal.shortname}
                image={journal.photo_our_journal_file?.file_path || 'default-image.jpg'} // Use a default image if file_path is missing
              />
            </SwiperSlide>
          ))
        ) : (
          <div>No journals available</div> // Handle the case when no data is available
        )}
      </Swiper>
      <div className="text-end py-4">
        <a className="btn btn-sm custom-btn" href="/journals">View All</a>
      </div>
    </section>
  );
};

export default JournalsCarousel;
