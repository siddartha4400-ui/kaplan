import Footer from '@/Layouts/Footer';
import FooterTwo from '@/Layouts/FooterTwo';
import Header from '@/Layouts/Header';
import React, { useState, useEffect } from 'react';
import '../../css/home.css'
// import App from './App';
import ImageSlider from '@/Components/HomeComponent/molecule/ImageSlider';
import FeatureCards from '@/Components/HomeComponent/molecule/FeatureCards';
import InitiativesSection from '@/Components/HomeComponent/molecule/InitiativesSection';
import JournalsCarousel from '@/Components/HomeComponent/molecule/JournalsCarousel';
import LatestArticles from '@/Components/HomeComponent/organisam/LatestArticles';
import { images } from '../../img/assets';
import Sidebar from '@/Components/HomeComponent/molecule/Sidebar';
import FooterTestimonials from '@/Components/HomeComponent/molecule/FooterTestimonials';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import Footer2 from './Footer2';

const Home = () => {
  // const [journalData, setJournalData] = useState([]);
  // const [lastFiveArticles, setLastFiveArticles] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API calls to fetch data
    const fetchData = async () => {
      try {
        // In a real app, these would be actual API calls
        // const journalsResponse = await fetch('/api/journals');
        // const journals = await journalsResponse.json();
        // setJournalData(journals);

        // const articlesResponse = await fetch('/api/articles/latest?limit=5');
        // const articles = await articlesResponse.json();
        // setLastFiveArticles(articles);

        // const sliderResponse = await fetch('/api/slider');
        // const slider = await sliderResponse.json();
        // setSliderImages(slider);

        setLoading(false);
      } catch (error) {
        // console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownloadPdf = (filePath) => {
    if (filePath) {
      // In a real app, this would trigger the download
      window.open(filePath, '_blank');
    }
  };

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  const dummyArticles = [
    {
      id: 1,
      articletype: 'Opinion',
      title: 'Long Covid: New findings and Theories',
      author: 'Manfred Doepp*',
      publishedDate: '2025-04-07',
      doi: '10.63592/DJS/126',
      photo: images.popupEmailSubscription,
      pdf: 'https://westlandpublishers.com/uploads/file1.pdf',
      journal: {
        id: 1,
        title: 'Digital Journal of Science (DJS)',
        shortname: 'DJS',
        subTitle: 'Jawahar (Jay) Kalra',
        description: [
          "1Jawahar (Jay) Kalra, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
          "2Bryan Johnston, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
          "Corresponding Author: Jawahar (Jay) Kalra, Royal University Hospital, Saskatchewan Health Authority, 103 Hospital Drive, Saskatoon, Saskatchewan, S7N 0W8, Canada, Tel: (306) 655-2152; Fax: (306) 655-2223."
        ],    
      }    
    },
    {
      id: 2,
      articletype: 'Short communication',
      title: 'Some Examples of the Triver’s Hypothesis in Birds',
      author: 'Ignacio GARCÍA PEIRÓ*',
      publishedDate: '2025-04-04',
      doi: '10.63592/DJS/125',
      photo: images.popupEmailSubscription,
      pdf: 'https://westlandpublishers.com/uploads/file2.pdf',
      journal: {
        id: 1,
        title: 'Digital Journal of Science (DJS)',
        shortname: 'DJS',
        subTitle: 'Jawahar (Jay) Kalra',
        description: [
          "1Jawahar (Jay) Kalra, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
          "2Bryan Johnston, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
          "Corresponding Author: Jawahar (Jay) Kalra, Royal University Hospital, Saskatchewan Health Authority, 103 Hospital Drive, Saskatoon, Saskatchewan, S7N 0W8, Canada, Tel: (306) 655-2152; Fax: (306) 655-2223."
        ],   
      },
    },
    {
      id: 3,
      articletype: 'Opinion',
      title: 'Long Covid: New findings and Theories',
      author: 'Manfred Doepp*',
      publishedDate: '2025-04-07',
      doi: '10.63592/DJS/126',
      photo: images.popupEmailSubscription,
      pdf: 'https://westlandpublishers.com/uploads/file1.pdf',
      journal: {
        id: 1,
        title: 'Digital Journal of Science (DJS)',
        shortname: 'DJS',
        subTitle: 'Jawahar (Jay) Kalra',
        description: [
          "1Jawahar (Jay) Kalra, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
          "2Bryan Johnston, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
          "*Corresponding Author: Jawahar (Jay) Kalra, Royal University Hospital, Saskatchewan Health Authority, 103 Hospital Drive, Saskatoon, Saskatchewan, S7N 0W8, Canada, Tel: (306) 655-2152; Fax: (306) 655-2223."
        ],   
      },
    }
  ];


  return (
    <div className="handheld-toolbar-enabled">
      <Header />
      <main className="page-wrapper model-index-less">
        <div className='image-slider'>
          <ImageSlider />
        </div>
        <div>
          <FeatureCards />
        </div>
        {/* New Initiatives */}
        <div className="container  mb-2 mb-md-4 text-center">
          <InitiativesSection />
        </div>
        {/* Our Journals */}
        <section className="pt-3 pt-md-4" style={{ backgroundColor: "#f6f9fc !important" }}>
          <div className="container-fluid">
            <JournalsCarousel />
          </div>
        </section>
        {/* Latest Articles */}
        <div className="container mb-2 mb-md-4">
          <div className="row pt-5 px-3 mt-md-2">
            {/* Left side: Latest Articles */}
            <div className="col-lg-9 col-md-8">
              <LatestArticles articles={dummyArticles} />
            </div>

            {/* Right side: Sidebar */}
            <div className="col-lg-3 col-md-4">
              <Sidebar />
            </div>
          </div>
        </div>
        <FooterTestimonials />
      </main>
      <Footer />
      {/* Back To Top Button */}
      <a className="btn-scroll-top" href="#top" data-scroll="">
        <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top </span>
        <i className="btn-scroll-top-icon ci-arrow-up"></i>
      </a>
    </div>
  );
};

export default Home;