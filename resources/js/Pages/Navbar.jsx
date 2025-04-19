import React, { useState } from 'react';



const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                aria-current="page"
                href="#"
                onClick={() => handleSetActive('Home')}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Link' ? 'active' : ''}`}
                href="#"
                onClick={() => handleSetActive('Link')}
              >
                Link
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${activeLink === 'Dropdown' ? 'active' : ''}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleSetActive('Dropdown')}
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
