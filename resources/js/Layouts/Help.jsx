import React, { useEffect, useState } from "react";
import "../../css/Header.css";
import logo from "../../img/westland_publisher_logo.png";

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle navbar visibility on button click
    const toggleNavbar = () => {
        setIsNavbarVisible((prevState) => !prevState); // Toggle the state
    };

    return (
        <>
            {/* Top Bar */}
            <div className="topbar topbar-dark ">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="mx-6 d-flex flex-wrap align-items-center">
                        <div className="topbar-text text-nowrap d-md-inline-block">
                            <i className="ci-mail"></i>
                            <span className="text-muted me-1">Email</span>
                            <a
                                className="topbar-link"
                                href="mailto:info@westlandpublishers.com"
                            >
                                info@westlandpublishers.com
                            </a>
                        </div>
                        <div className="topbar-text text-nowrap d-md-inline-block border-start border-light ps-3 ms-3 pe-3">
                            <i className="ci-support"></i>
                            <span className="text-muted me-1">Support</span>
                            <a className="topbar-link" href="tel:+16745553221">
                                +1 (267) 4555-3221
                            </a>
                        </div>
                        <div className="topbar-text text-nowrap d-md-inline-block border-start border-light ps-3 pe-3">
                            <a className="topbar-link" href="Faqs.php">
                                Faqs
                            </a>
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        <a
                            className="d-none d-md-inline-block btn-social bs-facebook rounded-circle bs-sm"
                            href="#"
                        >
                            <i className="ci-facebook"></i>
                        </a>
                        <a
                            className="d-none d-md-inline-block btn-social bs-twitter rounded-circle bs-sm"
                            href="#"
                        >
                            <i className="ci-twitter"></i>
                        </a>
                        <a
                            className="d-none d-md-inline-block btn-social bs-linkedin rounded-circle bs-sm"
                            href="#"
                        >
                            <i className="ci-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* logo container */}
            <div className="container py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    {/* Logo */}
                    <div className="logo-area" style={{ flex: "0 0 150px" }}>
                        <a className="navbar-brand" href="index.php">
                            <img
                                src={logo}
                                alt="Westland Publisher"
                                className="img-fluid"
                            />
                        </a>
                    </div>

                    {/* Search Bar */}
                    <div
                        className="search-area flex-grow-1 ms-sm-4 mt-2 mt-sm-0 "
                        style={{ maxWidth: "400px", height: "40px" }}
                    >
                        <div className="w-100 h-100">
                            <input
                                type="text"
                                id="searchInput"
                                className="custom-input px-4"
                                placeholder="Search for..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    boxSizing: "border-box",
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
                    <button
                        className="navbar-toggler bg-danger text-white"
                        type="button"
                        onClick={toggleNavbar}
                        aria-label="Toggle navigation"
                    >
                        <i
                            className={`fas ${
                                isNavbarVisible ? "fa-times" : "fa-bars"
                            } fs-4`}
                        ></i>
                    </button>
                </div>
            </div>
            {/* navbar */}
            <div
                className={`navbar navbar-expand-lg navbar-dark main-navbar ${
                    isSticky ? "is-sticky" : ""
                }`}
            >
                <div className="container">
                    {isSticky && (
                        <a
                            className="navbar-brand me-4 order-lg-1"
                            href="index.php"
                            style={{ fontSize: 20 }}
                        >
                            WestLand Publishers
                        </a>
                    )}{" "}
                    <div className="me-auto order-lg-2">
                        <div className="d-lg-none py-3">
                            <div className="input-group">
                                <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                <input
                                    className="form-control rounded-start"
                                    type="text"
                                    placeholder="What do you need?"
                                />
                            </div>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/about">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/open-access">
                                    Open Access
                                </a>
                            </li>
                            <li className="nav-item dropdown active">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="guidelinesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Guidelines
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="guidelinesDropdown"
                                >
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="editorial-board.php"
                                        >
                                            Editor in Chief
                                        </a>
                                    </li>

                                    <li className="dropdown-submenu">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            href="#"
                                            id="editorInChiefDropdown"
                                            role="button"
                                        >
                                            For Editors
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/guidance"
                                                >
                                                    Guidelines
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Join as Editor
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            href="#"
                                            id="editorInChiefDropdown"
                                            role="button"
                                        >
                                            For Associate Editors
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/guidance"
                                                >
                                                    Guidelines
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Join as Associate Editors
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            href="#"
                                            id="editorInChiefDropdown"
                                            role="button"
                                        >
                                            For Reviewer
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/guidance"
                                                >
                                                    Guidelines
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Join as Reviewer
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            href="#"
                                            id="editorInChiefDropdown"
                                            role="button"
                                        >
                                            For Authors
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/guidance"
                                                >
                                                    Guidelines
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Policies & Ethics Statements
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Peer Review Process
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Processing Fee
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Pay Online
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Reprints
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="/author"
                                                >
                                                    Grants Cover Letter
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="editorial-board.php"
                                        >
                                            Editorial Board
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="/journals">
                                    Journals
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a
                                    className="nav-link"
                                    href="online_manuscript.php"
                                >
                                    Submit Manuscript
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/contact-us">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

// import React, { useEffect, useState, useRef } from "react";
// import "../../css/Header.css";
// import logo from "../../img/westland_publisher_logo.png";

// function Header() {
//     const [isSticky, setIsSticky] = useState(false);
//     const [query, setQuery] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const [navbarOpen, setNavbarOpen] = useState(false);
//     const [openDropdowns, setOpenDropdowns] = useState({
//         main: null,
//         sub: null,
//     });

//     const navbarRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsSticky(window.scrollY > 200);
//         };

//         // Handle clicks outside navbar to close it
//         const handleClickOutside = (event) => {
//             if (
//                 navbarRef.current &&
//                 !navbarRef.current.contains(event.target)
//             ) {
//                 setNavbarOpen(false);
//                 setOpenDropdowns({ main: null, sub: null });
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     // Toggle navbar open/close
//     const toggleNavbar = () => {
//         setNavbarOpen(!navbarOpen);
//         if (!navbarOpen) {
//             setOpenDropdowns({ main: null, sub: null });
//         }
//     };

//     // Toggle main dropdown
//     const toggleMainDropdown = (index, e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setOpenDropdowns({
//             main: openDropdowns.main === index ? null : index,
//             sub: null,
//         });
//     };

//     // Toggle submenu dropdown
//     const toggleSubDropdown = (mainIndex, subIndex, e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         const currentSubKey = `${mainIndex}-${subIndex}`;
//         setOpenDropdowns({
//             main: mainIndex,
//             sub: openDropdowns.sub === currentSubKey ? null : currentSubKey,
//         });
//     };

//     // Navigation links data structure
//     const navLinks = [
//         { text: "Home", url: "/home" },
//         { text: "About Us", url: "/about" },
//         { text: "Open Access", url: "/open-access" },
//         {
//             text: "Guidelines",
//             url: "#",
//             isDropdown: true,
//             subItems: [
//                 { text: "Editor in Chief", url: "/editor-in-chief" },
//                 {
//                     text: "For Editors",
//                     url: "#",
//                     isSubmenu: true,
//                     subItems: [
//                         { text: "Guidelines", url: "/editor-guidelines" },
//                         { text: "Join as Editor", url: "/author" },
//                     ],
//                 },
//                 {
//                     text: "For Associate Editors",
//                     url: "#",
//                     isSubmenu: true,
//                     subItems: [
//                         { text: "Guidelines", url: "/associate-editor-guidelines" },
//                         { text: "Join as Associate Editors", url: "/author" },
//                     ],
//                 },
//                 {
//                     text: "For Reviewer",
//                     url: "#",
//                     isSubmenu: true,
//                     subItems: [
//                         { text: "Guidelines", url: "/reviewer-guidelines" },
//                         { text: "Join as Reviewer", url: "/author" },
//                     ],
//                 },
//                 {
//                     text: "For Authors",
//                     url: "#",
//                     isSubmenu: true,
//                     subItems: [
//                         { text: "Guidelines", url: "/authors-guidelines" },
//                         {
//                             text: "Policies & Ethics Statements",
//                             url: "/policies-ethics",
//                         },
//                         { text: "Peer Review Process", url: "/peerReview" },
//                         { text: "Processing Fee", url: "/processing-fee" },
//                         { text: "Pay Online", url: "/author" },
//                         { text: "Reprints", url: "/reprints" },
//                         { text: "Grants Cover Letter", url: "/grants-cover-letter" },
//                     ],
//                 },
//                 { text: "Manuscript Guidelines", url: "/manuscript-submission" },
//                 { text: "Membership", url: "/membership-program" },
//             ],
//         },
//         { text: "Journals", url: "/journals" },
//         { text: "Submit Manuscript", url: "online_manuscript.php" },
//         { text: "Contact Us", url: "/contact-us" },
//     ];

//     return (
//         <>
//             <div className="topbar topbar-dark">
//                 <div className="container d-flex justify-content-between align-items-center">
//                     <div className="d-flex flex-wrap align-items-center">
//                         <div className="topbar-text text-nowrap d-none d-md-inline-block">
//                             <i className="ci-mail"></i>
//                             <span className="text-muted me-1">Email</span>
//                             <a
//                                 className="topbar-link"
//                                 href="mailto:info@westlandpublishers.com"
//                             >
//                                 info@westlandpublishers.com
//                             </a>
//                         </div>
//                         <div className="topbar-text text-nowrap d-none d-md-inline-block border-start border-light ps-3 ms-3 pe-3">
//                             <i className="ci-support"></i>
//                             <span className="text-muted me-1">Support</span>
//                             <a className="topbar-link" href="tel:+16745553221">
//                                 +1 (267) 4555-3221
//                             </a>
//                         </div>
//                         <div className="topbar-text text-nowrap d-md-inline-block border-start border-light ps-3 pe-3">
//                             <a className="topbar-link" href="Faqs.php">
//                                 Faqs
//                             </a>
//                         </div>
//                     </div>
//                     <div className="d-flex gap-1">
//                         <a
//                             className="d-none d-md-inline-block btn-social bs-facebook rounded-circle bs-sm"
//                             href="#"
//                         >
//                             <i className="ci-facebook"></i>
//                         </a>
//                         <a
//                             className="d-none d-md-inline-block btn-social bs-twitter rounded-circle bs-sm"
//                             href="#"
//                         >
//                             <i className="ci-twitter"></i>
//                         </a>
//                         <a
//                             className="d-none d-md-inline-block btn-social bs-linkedin rounded-circle bs-sm"
//                             href="#"
//                         >
//                             <i className="ci-linkedin"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Logo and Search Container */}
//             <div className="container py-3">
//                 <div className="d-flex flex-wrap justify-content-between align-items-center">
//                     {/* Logo */}
//                     <div className="logo-area" style={{ flex: "0 0 150px" }}>
//                         <a className="navbar-brand" href="index.php">
//                             <img
//                                 src={logo}
//                                 alt="Westland Publisher"
//                                 className="img-fluid"
//                             />
//                         </a>
//                     </div>

//                     {/* Search Bar */}
//                     <div
//                         className="search-area flex-grow-1 ms-sm-4 mt-2 mt-sm-0"
//                         style={{ maxWidth: "400px", height: "40px" }}
//                     >
//                         <div className="w-100 h-100">
//                             <input
//                                 type="text"
//                                 id="searchInput"
//                                 className="custom-input px-4"
//                                 placeholder="Search for..."
//                                 value={query}
//                                 onChange={(e) => setQuery(e.target.value)}
//                                 style={{
//                                     width: "100%",
//                                     height: "100%",
//                                     boxSizing: "border-box",
//                                 }}
//                             />
//                         </div>

//                         {/* Search Results */}
//                         {searchResults.length > 0 && (
//                             <div className="results mt-2" id="results">
//                                 <ul className="list-unstyled mb-0">
//                                     {searchResults.map((item, index) => (
//                                         <li key={index}>
//                                             <a
//                                                 href={
//                                                     item.type === 1
//                                                         ? `/about-journal.php?jid=${item.id}&type=about`
//                                                         : `/abstract.php?aid=${item.id}&jid=${item.journals}`
//                                                 }
//                                             >
//                                                 {item.title}
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Navbar */}
//             <div
//                 className={`navbar navbar-expand-lg navbar-dark main-navbar ${
//                     isSticky ? "is-sticky" : ""
//                 }`}
//                 ref={navbarRef}
//             >
//                 <div className="container">
//                     <div className="d-flex justify-content-between align-items-center w-100">
//                         {/* Sticky logo */}
//                         {isSticky && (
//                             <a
//                                 className="navbar-brand me-4 d-none d-lg-block"
//                                 href="index.php"
//                             >
//                                 WestLand Publishers
//                             </a>
//                         )}

//                         {/* Mobile Sticky Logo */}
//                         {isSticky && (
//                             <a
//                                 className="navbar-brand me-auto d-lg-none"
//                                 href="index.php"
//                             >
//                                 WestLand
//                             </a>
//                         )}

//                         {/* Mobile Toggle Button - Outside Collapse Div */}
//                         <button
//                             className="navbar-toggler ms-auto"
//                             type="button"
//                             onClick={toggleNavbar}
//                             aria-label="Toggle navigation"
//                         >
//                             <span className="navbar-toggler-icon"></span>
//                         </button>

//                         {/* Navigation Menu */}
//                         <div
//                             className={`navbar-collapse ${
//                                 navbarOpen ? "show" : "collapse"
//                             }`}
//                             id="mainNavbar"
//                         >
//                             <ul className="navbar-nav">
//                                 {navLinks.map((link, index) => (
//                                     <li
//                                         key={index}
//                                         className={`nav-item ${
//                                             link.isDropdown ? "dropdown" : ""
//                                         } active`}
//                                     >
//                                         {link.isDropdown ? (
//                                             // Dropdown link
//                                             <>
//                                                 <a
//                                                     className="nav-link dropdown-toggle"
//                                                     href="#"
//                                                     onClick={(e) =>
//                                                         toggleMainDropdown(
//                                                             index,
//                                                             e
//                                                         )
//                                                     }
//                                                     aria-expanded={
//                                                         openDropdowns.main ===
//                                                         index
//                                                     }
//                                                 >
//                                                     {link.text}
//                                                     <i className="ci-arrow-down small text-muted ms-2"></i>
//                                                 </a>

//                                                 <ul
//                                                     className={`dropdown-menu ${
//                                                         openDropdowns.main ===
//                                                         index
//                                                             ? "show"
//                                                             : ""
//                                                     }`}
//                                                 >
//                                                     {link.subItems.map(
//                                                         (subItem, subIndex) =>
//                                                             subItem.isSubmenu ? (
//                                                                 // Submenu items

//                                                                 <li
//                                                                     key={
//                                                                         subIndex
//                                                                     }
//                                                                     className={`dropdown-submenu ${
//                                                                         openDropdowns.sub ===
//                                                                         `${index}-${subIndex}`
//                                                                             ? "show"
//                                                                             : ""
//                                                                     }`}
//                                                                 >
//                                                                     <a
//                                                                         className="dropdown-item dropdown-toggle d-flex justify-content-between align-items-center"
//                                                                         href="#"
//                                                                         onClick={(
//                                                                             e
//                                                                         ) =>
//                                                                             toggleSubDropdown(
//                                                                                 index,
//                                                                                 subIndex,
//                                                                                 e
//                                                                             )
//                                                                         }
//                                                                     >
//                                                                         <span>
//                                                                             {
//                                                                                 subItem.text
//                                                                             }
//                                                                         </span>
//                                                                         <i className="ci-arrow-right small text-muted ms-2"></i>
//                                                                     </a>

//                                                                     <ul
//                                                                         className={`dropdown-menu ${
//                                                                             openDropdowns.sub ===
//                                                                             `${index}-${subIndex}`
//                                                                                 ? "show"
//                                                                                 : ""
//                                                                         }`}
//                                                                     >
//                                                                         {subItem.subItems.map(
//                                                                             (
//                                                                                 subSubItem,
//                                                                                 subSubIndex
//                                                                             ) => (
//                                                                                 <li
//                                                                                     key={
//                                                                                         subSubIndex
//                                                                                     }
//                                                                                 >
//                                                                                     <a
//                                                                                         className="dropdown-item"
//                                                                                         href={
//                                                                                             subSubItem.url
//                                                                                         }
//                                                                                         onClick={() => {
//                                                                                             setNavbarOpen(
//                                                                                                 false
//                                                                                             );
//                                                                                             setOpenDropdowns(
//                                                                                                 {
//                                                                                                     main: null,
//                                                                                                     sub: null,
//                                                                                                 }
//                                                                                             );
//                                                                                         }}
//                                                                                     >
//                                                                                         {
//                                                                                             subSubItem.text
//                                                                                         }
//                                                                                     </a>
//                                                                                 </li>
//                                                                             )
//                                                                         )}
//                                                                     </ul>
//                                                                 </li>
//                                                             ) : (
//                                                                 // Regular dropdown items
//                                                                 <li
//                                                                     key={
//                                                                         subIndex
//                                                                     }
//                                                                 >
//                                                                     <a
//                                                                         className="dropdown-item"
//                                                                         href={
//                                                                             subItem.url
//                                                                         }
//                                                                         onClick={() => {
//                                                                             setNavbarOpen(
//                                                                                 false
//                                                                             );
//                                                                             setOpenDropdowns(
//                                                                                 {
//                                                                                     main: null,
//                                                                                     sub: null,
//                                                                                 }
//                                                                             );
//                                                                         }}
//                                                                     >
//                                                                         {
//                                                                             subItem.text
//                                                                         }
//                                                                     </a>
//                                                                 </li>
//                                                             )
//                                                     )}
//                                                 </ul>
//                                             </>
//                                         ) : (
//                                             // Regular link
//                                             <a
//                                                 className="nav-link"
//                                                 href={link.url}
//                                                 onClick={() => {
//                                                     setNavbarOpen(false);
//                                                     setOpenDropdowns({
//                                                         main: null,
//                                                         sub: null,
//                                                     });
//                                                 }}
//                                             >
//                                                 {link.text}
//                                             </a>
//                                         )}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Header;
