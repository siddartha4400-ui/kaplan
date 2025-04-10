import React, { useEffect, useState } from 'react';
import logo from '../../img/westland_publisher_logo.png';

// import '../../css/vendor/simplebar/dist/simplebar.min.css';

const Header = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  const filterData = (query) => {
    const jsonData = {
      jwt: "some_id",
      data: query
    };

    fetch('/siddu.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    })
      .then((res) => res.json())
      .then((data) => {
        const combinedResults = [
          ...(data.journals || []).map(j => ({ ...j, type: 1 })),
          ...(data.articels || []).map(a => ({ ...a, type: 2 }))
        ];
        setSearchResults(combinedResults);
      })
      .catch((err) => {
        console.error('Error fetching search results:', err);
      });
  };

  useEffect(() => {
    if (query.trim()) {
      filterData(query);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <header className="shadow-sm" style={{ overflowX: 'hidden' }}>
      <div className="topbar topbar-dark bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="ms-6 d-flex flex-wrap align-items-center">
            <div className="topbar-text text-nowrap d-md-inline-block ">
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
            <a className="d-none d-md-inline-block btn-social bs-facebook rounded-circle bs-sm" href="#"><i className="ci-facebook"></i></a>
            <a className="d-none d-md-inline-block btn-social bs-twitter rounded-circle bs-sm" href="#"><i className="ci-twitter"></i></a>
            <a className="d-none d-md-inline-block btn-social bs-linkedin rounded-circle bs-sm" href="#"><i className="ci-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Search and Navbar */}
      <div className="bg-light">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand d-none d-sm-block flex-shrink-0" style={{ width: '150px' }} href="index.php">
              <img src={logo} alt="Westland Publisher" />
            </a>
            <a className="navbar-brand d-sm-none flex-shrink-0 me-2" href="index.php">
              <img
                src={logo}
                style={{ width: '74' }}
                alt="WestLand Publishers"
              />
            </a>
            <div className="navbar-toolbar align-items-end d-flex">
              <div className="input-group d-none d-lg-flex ps-5 ms-5 pe-5">
                <input
                  type="text"
                  id="searchInput"
                  className="form-control rounded-end pe-10"
                  placeholder="Search for..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              {searchResults.length > 0 && (
                <div className="results mt-2" id="results">
                  <ul>
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
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-sticky navbar d-block navbar-expand-lg navbar-dark navbar-stuck-menu mt-n2 pt-0 pb-0" style={{ backgroundColor: '#042c8d' }}>
          <div className="container">
            <a className="navbar-brand hidden-text me-4 order-lg-1" href="index.php" style={{ fontSize: 20 }}>
              WestLand Publishers
            </a>

            {/* Add navbar-collapse class here */}
            <div className="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item active"><a className="nav-link" href="index.php">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="about.php">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="open-access.php">Open Access</a></li>

                {/* Guidelines Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Guidelines</a>
                  <ul className="dropdown-menu text-dark">
                    <li><a className="dropdown-item" href="editor-in-chief.php">Editor in Chief</a></li>

                    {/* For Editors */}
                    <li className="dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">For Editors</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="editor-guidelines.php">Guidelines</a></li>
                        <li><a className="dropdown-item" href="editor-registration.php">Join as Editor</a></li>
                      </ul>
                    </li>

                    {/* For Authors - Moved from nested position */}
                  </ul>
                </li>

                {/* For Authors - As a top-level menu item like in PHP version */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">For Authors</a>
                  <ul className="dropdown-menu model-index">
                    <li><a className="dropdown-item" href="author-guidelines.php">Guidelines</a></li>
                    <li><a className="dropdown-item" href="policies-and-ethics-statements.php">Policies & Ethics Statements</a></li>
                    <li><a className="dropdown-item" href="peer-review-process.php">Peer Review Process</a></li>
                    <li><a className="dropdown-item" href="processing-fee.php">Processing Fee</a></li>
                    <li><a className="dropdown-item" href="pay-online.php">Pay Online</a></li>
                    <li><a className="dropdown-item" href="reprints1.php">Reprints</a></li>
                    <li><a className="dropdown-item" href="grants-cover-letter.php">Grants Cover Letter</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="journals.php">Journals</a></li>
                <li className="nav-item"><a className="nav-link" href="online_manuscript.php">Submit Manuscript</a></li>
                <li className="nav-item"><a className="nav-link" href="contact_us.php">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Submit Manuscript Button */}
      <div className="manuscript-btn position-fixed" style={{ zIndex: 9999 }}>
        <button
          className="btn btn-warning btn-shadow"
          type="button"
          onClick={() => window.location.href = 'online_manuscript.php'}
          style={{
            position: 'fixed',
            left: '-67px',
            top: '50%',
            transform: 'rotate(-90deg)',
          }}
        >
          Submit Manuscript
        </button>
      </div>
    </header>
  );
};

export default Header;
