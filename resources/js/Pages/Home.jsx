import Footer from '@/Layouts/Footer';
import FooterTwo from '@/Layouts/FooterTwo';
import Header from '@/Layouts/Header';
import Sidebar from '@/Layouts/Sidebar';
import React, { useState, useEffect } from 'react';
import '../../css/home.css'
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import Footer2 from './Footer2';

const Home = () => {
  const [journalData, setJournalData] = useState([]);
  const [lastFiveArticles, setLastFiveArticles] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API calls to fetch data
    const fetchData = async () => {
      try {
        // In a real app, these would be actual API calls
        const journalsResponse = await fetch('/api/journals');
        const journals = await journalsResponse.json();
        setJournalData(journals);

        const articlesResponse = await fetch('/api/articles/latest?limit=5');
        const articles = await articlesResponse.json();
        setLastFiveArticles(articles);

        const sliderResponse = await fetch('/api/slider');
        const slider = await sliderResponse.json();
        setSliderImages(slider);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
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

  return (
    <div className="handheld-toolbar-enabled">
      <Header />

      <main className="page-wrapper model-index-less">
        {/* Hero Slider */}
        {/* <section className="tns-carousel tns-controls-lg">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="10000"
                >
                  <img src={image.path} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section> */}

        {/* Popular Categories */}
        {/* <div className="container mt-5">
          <div className="row">
            {[
              {
                icon: "img/pdf.png",
                title: "PDF",
                description: "PDF, short for Portable Document Format, was developed by Adobe",
                link: "/pdf"
              },
              {
                icon: "img/html.png",
                title: "Full Text",
                description: "A full-text database is a compilation of documents",
                link: "/full-text"
              },
              {
                icon: "img/ebook.png",
                title: "Article Preparation",
                description: "Preparing to submit their manuscript",
                link: "/manuscript-guidelines"
              },
              {
                icon: "img/video.png",
                title: "24/7 Support",
                description: "Round-the-clock assistance and service availability",
                link: "/contact-us"
              }
            ].map((item, index) => (
              <div key={index} className="col-lg-3 col-12 col-md-6 col-sm-12 col-xl-3 text-center text-lg-start pb-3 pt-lg-2">
                <div className="d-inline-block text-start m-2 p-3 card product-card" style={{ border: "1px solid #ccc" }}>
                  <div className="d-flex align-items-center pb-3">
                    <div className="img-thumbnail rounded-circle flex-shrink-0" style={{ width: "5.375rem" }}>
                      <img className="rounded-circle" src={item.icon} alt={item.title} />
                    </div>
                    <div className="ps-3">
                      <h3 className="fs-lg mb-0">{item.title}</h3>
                      <span className="d-block text-muted fs-ms pt-1 pb-2">{item.description}</span>
                      <a className="btn btn-primary btn-sm" href={item.link}>Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* New Initiatives */}
        {/* <div className="container pb-5 mb-2 mb-md-4 text-center">
          <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
            <h2 className="h3 mb-0 pt-3 me-3 text-center">New Initiatives</h2>
          </div>
          <div className="col-md-12">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gy-sm-4 gy-3 pt-sm-3">
              {[
                {
                  image: "img/new-initiatives-ebook.jpg",
                  title: "E-Books",
                  description: "E-Books offer numerous advantages, providing flexibility in reading at one's convenience.",
                  link: "/e-books"
                },
                {
                  image: "img/new-initiatives-reprints.jpg",
                  title: "Reprints",
                  description: "If authors desire to distribute copies of their published articles from WestLand Journals",
                  link: "/reprints"
                },
                {
                  image: "img/new-initiatives-video_articales.jpg",
                  title: "Video Articles",
                  description: "Westland Publishers is dedicated to advancing open access video articles, providing researchers with an accessible",
                  link: "/video-articles"
                }
              ].map((item, index) => (
                <div key={index} className="col mb-2" style={{ padding: "0px 50px" }}>
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden" style={{ padding: "1.3em 1.3em 0 1.3em" }}>
                      <a className="d-block" href={item.link}>
                        <img src={item.image} alt={item.title} />
                      </a>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a className="d-block text-truncate" href={item.link}>{item.title}</a>
                      </h3>
                      <span className="fs-sm text-muted">{item.description}</span>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <a className="btn btn-outline-primary d-block w-100 mb-3" type="button" href={item.link}>Read More</a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Our Journals */}
        {/* <section className="pt-3 pt-md-4" style={{ backgroundColor: "#f6f9fc !important" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                  <h2 className="h3 mb-0 pt-3 me-3">Our Journals</h2>
                </div>
                <div className="tns-carousel tns-controls-static tns-controls-outside tns-nav-enabled pt-2 pb-4 mb-4">
                  <div className="tns-carousel-inner" data-carousel-options='{"items": 2, "autoplay": true, "gutter": 16, "controls": false, "nav": false, "autoHeight": true, "responsive": {"0":{"items":1}, "480":{"items":2}, "720":{"items":3}, "991":{"items":3}, "1140":{"items":3}, "1300":{"items":4}, "1500":{"items":5}}}'>
                    {journalData.map((journal) => (
                      <div key={journal.id}>
                        <div className="card product-card card-static pb-0">
                          <img src={journal.photoOurJournal} alt={journal.title} />
                          <div className="card-body py-2">
                            <h3 className="product-title fs-sm">
                              <a href={`/about-journal.php?jid=${journal.id}&title=${journal.title.replace(/\s+/g, '-')}&type=about`}>
                                {journal.title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-12 pb-4 float-end" style={{ textAlign: "right" }}>
                <a type="button" className="btn btn-primary btn-sm" href="/journals">View All</a>
              </div>
            </div>
          </div>
        </section> */}

        {/* Latest Articles */}
        <div className="container pb-5 mb-2 mb-md-4">
          <div className="row pt-5 mt-md-2">
            <section className="col-lg-8 col-md-7 col-sm-12" id="latest-articles">
              <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 me-3">Latest Articles</h2>
              </div>
              
              {lastFiveArticles.map((article) => {
                const date = new Date(article.publishedDate);
                const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                const journal = journalData.find(j => j.id === article.journals) || {};
                
                return (
                  <React.Fragment key={article.id}>
                    <div className="">
                      <div className="toast product-card product-list p-2" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header bg-accent text-white" style={{ borderRadius: "0.4375rem" }}>
                          <span className="fw-medium me-auto">{article.articletype}</span>
                          <span className="fw-medium">{journal.shortname || ''}</span> 
                          <i className="ci-unlocked ms-2"></i>
                        </div>
                        <div className="toast-body text-accent">
                          <div className="">
                            <div className="align-items-start">
                              <div className="row">
                                <div className="col-4 col-md-3">
                                  <a className="product-list-thumb" href="">
                                    <img src={article.photo} alt={article.title} style={{ borderRadius: ".4375rem" }} />
                                  </a>
                                </div>
                                <div className="col-8 col-md-9">
                                  <div className="card-body py-2">
                                    <h3 className="product-title fs-base">
                                      <a href={article.pdf}>{article.title}</a>
                                    </h3>
                                    <div className="justify-content-between">
                                      <div className="product-price">
                                        <span className="fs-sm">{article.author}</span>
                                        <div className="clearfix"></div>
                                        <span className="text-accent fs-sm" style={{ float: "left" }}>Published: {formattedDate}</span>
                                        <span className="text-darker fs-sm" style={{ float: "right", display: "block" }}>
                                          DOI: <span className="text-danger">{article.doi}</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <a className="product-meta d-block py-2" href={`/about-journal.php?jid=${journal.id}&type=about`}>
                                      {journal.title || ''}
                                    </a>
                                    <p style={{ float: "right", display: "block" }}>
                                      <a 
                                        href={`/abstract.php?aid=${article.id}&jid=${article.journals}&Article=${article.title.replace(/\s+/g, '-')}`} 
                                        className="btn btn-outline-primary btn-sm mb-2" 
                                        type="button"
                                      >
                                        Full Text
                                      </a>
                                      <a 
                                        href={article.pdf} 
                                        className="btn btn-outline-success btn-sm mb-2" 
                                        type="button"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                        Download PDF
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-top pt-3 mt-3"></div>
                  </React.Fragment>
                );
              })}
            </section>

            <aside className="col-lg-4 col-md-5 col-sm-12 position-relative simplebar-offset">
              {/* <Sidebar /> */}
            </aside>
          </div>
        </div>

        {/* Reviews */}
        <section className="bg-secondary py-3">
          <FooterTwo />
        </section>
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