import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import React from "react";
import "../../css/About.css";
import ContactUsSection from "@/Components/ContactUcComponent.jsx/organisam/ContactUsSection";

const ContactUs = () => {
    return (
        <div className="handheld-toolbar-enabled">
            <Header />
            <main className="page-wrapper model-index-less">
                <div className="container mb-2 mb-md-4 pt-4 px-4 ">
                    <ContactUsSection />
                </div>
            </main>
            <div class="container-fluid px-0" id="map">
                <div class="row g-0">
                    <div class="col-lg-12 iframe-full-height-wrap">
                        <iframe
                            class="iframe-full-height"
                            width="100%"
                            height="250"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.7252773220157!2d-97.02357372432535!3d33.06369877354509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3209a5edb5b7%3A0x519c4a440d79be2e!2s1106%20Bowie%20Dr%2C%20Lewisville%2C%20TX%2075077%2C%20USA!5e0!3m2!1sen!2sin!4v1720101456436!5m2!1sen!2sin"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
            <a className="btn-scroll-top" href="#top" data-scroll="">
                <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
                    Top{" "}
                </span>
                <i className="btn-scroll-top-icon ci-arrow-up"></i>
            </a>
        </div>
    );
};

export default ContactUs;
