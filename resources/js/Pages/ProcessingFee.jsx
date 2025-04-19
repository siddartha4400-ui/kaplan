import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import React, { useState } from "react";
import "../../css/About.css";
import JournalsCarousel from "@/Components/HomeComponent/molecule/JournalsCarousel";
import Sidebar from "@/Components/HomeComponent/molecule/Sidebar";
import FooterTestimonials from "@/Components/HomeComponent/molecule/FooterTestimonials";
import { GuidelinceComponent } from "@/Components/Guidelines/organisam/GuidelinceComponent";
import ProcessingFeeComponent from "@/Components/Guidelines/organisam/ProcessingFeeComponent";

const ProcessingFee = () => {
    const [selectedGuidelines, setSelectedGuidelines] = useState(null);

    return (
        <div className="handheld-toolbar-enabled">
            <Header />
            <main className="page-wrapper model-index-less">
                <div className="container mb-2 mb-md-4">
                    <div className="row pt-3 px-3 mt-md-2">
                        <div className="col-lg-9 col-md-8">
                            {selectedGuidelines ? (
                                React.createElement(
                                    GuidelinceComponent[selectedGuidelines]
                                )
                            ) : (
                                <ProcessingFeeComponent />
                            )}
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <Sidebar
                                guidelines
                                selectedGuidelines={selectedGuidelines}
                                setSelectedGuidelines={setSelectedGuidelines}
                            />
                        </div>
                    </div>
                </div>
                <FooterTestimonials />
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

export default ProcessingFee;
