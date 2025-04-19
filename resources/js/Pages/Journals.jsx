import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import React from "react";
import "../../css/About.css";
import JournalsSection from "@/Components/JournalsComponent/organisam/JournalsSection";

const Journals = () => {
    return (
        <div className="handheld-toolbar-enabled">
            <Header />
            <main className="page-wrapper model-index-less">
                <div className="container mb-2 mb-md-4 pt-4 px-4 ">
                    <JournalsSection />
                </div>
            </main>
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

export default Journals;
