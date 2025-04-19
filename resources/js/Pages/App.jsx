import React, { useEffect, useState } from 'react';
import '../../css/demo.css';
import logo from '../../img/westland_publisher_logo.png';


function App() {

  const [isSticky, setIsSticky] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {/* Top Bar */}
      <div className="topbar topbar-dark bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="mx-6 d-flex flex-wrap align-items-center">
            <div className="topbar-text text-nowrap d-md-inline-block">
              <i className="ci-mail"></i>
              <span className="text-muted me-1">Email</span>
              <a className="topbar-link" href="mailto:info@westlandpublishers.com">info@westlandpublishers.com</a>
            </div>
            <div className="topbar-text text-nowrap d-md-inline-block border-start border-light ps-3 ms-3 pe-3">
              <i className="ci-support"></i>
              <span className="text-muted me-1">Support</span>
              <a className="topbar-link" href="tel:+16745553221">+1 (267) 4555-3221</a>
            </div>
            <div className="topbar-text text-nowrap d-md-inline-block border-start border-light ps-3 pe-3">
              <a className="topbar-link" href="Faqs.php">Faqs</a>
            </div>
          </div>
          <div className='d-flex gap-1'>
            <a className="d-none d-md-inline-block btn-social bs-facebook rounded-circle bs-sm" href="#">
              <i className="ci-facebook"></i>
            </a>
            <a className="d-none d-md-inline-block btn-social bs-twitter rounded-circle bs-sm" href="#">
              <i className="ci-twitter"></i>
            </a>
            <a className="d-none d-md-inline-block btn-social bs-linkedin rounded-circle bs-sm" href="#">
              <i className="ci-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      {/* logo container */}
      <div className="container py-3">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo-area" style={{ flex: '0 0 150px' }}>
            <a className="navbar-brand" href="index.php">
              <img src={logo} alt="Westland Publisher" className="img-fluid" />
            </a>
          </div>
 
          {/* Search Bar */}
          <div className="search-area flex-grow-1 ms-sm-4 mt-2 mt-sm-0 " style={{ maxWidth: '400px', height:'40px' }}>
            <div className="w-100 h-100">
              <input
                type="text"
                id="searchInput"
                className="custom-search-input px-4"
                placeholder="Search for..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width: '100%',
                  height: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>
 
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="results mt-2" id="results">
                <ul className="list-unstyled mb-0">
                  {searchResults.map((item, index) => (
                    <li key={index}>
                      <a
                        href={
                          item.type === 1
                            ? `/about-journal.php?jid=${item.id}&type=about`
                            : `/abstract.php?aid=${item.id}&jid=${item.journals}`
                        }
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        </div>
      {/* navbar */}
      <div
        className={`navbar navbar-expand-lg navbar-dark main-navbar ${isSticky ? 'is-sticky' : ''}`}
        style={{ backgroundColor: '#042c8d' }}
      >
        <div className="container">
          {isSticky && (
            <a className="navbar-brand me-4 order-lg-1" href="index.php" style={{ fontSize: 20 }}>
              WestLand Publishers
            </a>
          )}            <div className="me-auto order-lg-2">
            <div className="d-lg-none py-3">
              <div className="input-group">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <input className="form-control rounded-start" type="text" placeholder="What do you need?" />
              </div>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item active"><a className="nav-link" href="/App">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="about.php">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="open-access.php">Open Access</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="guidelinesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Guidelines
                </a>
                <ul className="dropdown-menu" aria-labelledby="guidelinesDropdown">
                  <li><a className="dropdown-item" href="editor-in-chief.php">Editor in Chief</a></li>
                  <li><a className="dropdown-item" href="editorial-board.php">Editorial Board</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="journals.php">Journals</a></li>
              <li className="nav-item"><a className="nav-link" href="online_manuscript.php">Submit Manuscript</a></li>
              <li className="nav-item"><a className="nav-link" href="contact_us.php">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
