import React, { useState } from 'react';

const Footer = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    description: '',
    formtype: 'footerform'
  });
  const [emailError, setEmailError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.mail)) {
      setEmailError('Invalid email address.');
      return;
    }

    setEmailError('');

    // Here you would typically send the data to your backend
    // console.log('Form submitted:', formData);
    // Example: axios.post('/getdatafromforms.php', formData)

    // Reset form after submission
    setFormData({
      name: '',
      mail: '',
      description: '',
      formtype: 'footerform'
    });
  };

  return (
    <footer className="footer bg-dark pt-5" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="row pb-2">
          {/* About Us Section */}
          <div className="col-md-3 col-sm-6">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">About Us</h3>
              <p className="mb-0 fs-ms text-light opacity-50">
                WestLand publishers was founded with a fundamental mission: to disseminate high-quality scientific knowledge to the global research community.
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-2 col-sm-6">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Quick Links</h3>
              <ul className="widget-list">
                {[
                  { text: 'Home', link: 'index.php' },
                  { text: 'About Us', link: 'about.php' },
                  { text: 'Membership', link: 'membership.php' },
                  { text: 'Guidelines', link: 'manuscript-guidelines.php' },
                  { text: 'Open Access', link: 'open_access.php' },
                  { text: 'Journals', link: 'journals.php' },
                  { text: 'E-Books', link: 'e-books.php' },
                  { text: 'Video Articles', link: 'video-articles.php' },
                  { text: 'Contact Us', link: 'contact_us.php' }
                ].map((item, index) => (
                  <li key={index} className="widget-list-item">
                    <a className="widget-list-link" href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-4 col-sm-6">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Contact Info</h3>
              <div className="widget">
                <ul className="widget-list">
                  <li className="d-flex pb-3 border-bottom">
                    <i className="ci-location fs-lg mt-2 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Find us</span>
                      <a className="d-block mb-0 fs-ms text-light opacity-50 fs-sm" href="#">
                        1106 Bowie drive Lewisville Texas 75077
                      </a>
                    </div>
                  </li>
                  <li className="d-flex pt-2 pb-3 border-bottom">
                    <i className="ci-phone fs-lg mt-2 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Call us</span>
                      <a className="d-block mb-0 fs-ms text-light opacity-50 fs-sm" href="tel:+126745553221">
                        +1 (267) 4555-3221
                      </a>
                    </div>
                  </li>
                  <li className="d-flex pt-2">
                    <i className="ci-mail fs-lg mt-2 text-primary"></i>
                    <div className="ps-3">
                      <span className="fs-ms text-muted">Write us</span>
                      <a className="d-block mb-0 fs-ms text-light opacity-50 fs-sm" href="mailto:info@westlandpublishers.com">
                        info@westlandpublishers.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stay Connected Section */}
          <div className="col-md-3 col-sm-6">
            <div className="widget pb-2 mb-4">
              <h3 className="widget-title text-light pb-1">Stay Connected</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    id="cf-name"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    placeholder="Email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleInputChange}
                    required
                  />
                  {emailError && (
                    <span className="text-danger fs-xs">{emailError}</span>
                  )}
                </div>
                <div className="mb-3">
                  <textarea
                    name="description"
                    className="form-control"
                    id="cf-message"
                    rows="3"
                    placeholder="Please describe in detail your request"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    spellCheck="false"
                  ></textarea>
                </div>
                <input type="hidden" name="formtype" value="footerform" />
                <button className="btn btn-primary btn-sm" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-darker">
        <div className="container text-center">
          <div className="text-center pt-3">
            <div className="pb-3 fs-xs text-light opacity-50 text-center">
              &copy; 2024 <a href="index.php" className="text-white">WestLand Publishers</a>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Tawk.to Script - You might want to implement this differently in React */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6686aeeb9d7f358570d71409/1i1v1mivt';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `
      }} />

      {/* Security Scripts */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('contextmenu', function (e) {
            e.preventDefault(); // Disable right-click menu
          });
          document.addEventListener('keydown', function (e) {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
              e.preventDefault(); // Disable F12 and Ctrl+Shift+I
            }
          });
        `
      }} />
    </footer>
  );
};

export default Footer;
