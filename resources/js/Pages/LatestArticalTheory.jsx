import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import React from "react";
import "../../css/About.css";
import JournalsCarousel from "@/Components/HomeComponent/molecule/JournalsCarousel";
import Sidebar from "@/Components/HomeComponent/molecule/Sidebar";
import FooterTestimonials from "@/Components/HomeComponent/molecule/FooterTestimonials";
import LatestArticles from "@/Components/HomeComponent/organisam/LatestArticles";
import { images } from "../../img/assets";
import "../../css/home.css";

const dummyArticles = [
    {
        id: 1,
        articletype: "Opinion",
        title: "Long Covid: New findings and Theories",
        author: "Manfred Doepp*",
        publishedDate: "2025-04-07",
        doi: "10.63592/DJS/126",
        photo: images.popupEmailSubscription,
        pdf: "https://westlandpublishers.com/uploads/file1.pdf",
        journal: {
            id: 1,
            title: "Digital Journal of Science (DJS)",
            shortname: "DJS",
            subTitle: "Jawahar (Jay) Kalra",
            description: [
                "1Jawahar (Jay) Kalra, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
                "2Bryan Johnston, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
                "Corresponding Author: Jawahar (Jay) Kalra, Royal University Hospital, Saskatchewan Health Authority, 103 Hospital Drive, Saskatoon, Saskatchewan, S7N 0W8, Canada, Tel: (306) 655-2152; Fax: (306) 655-2223.",
            ],
        },
    },
    {
        id: 2,
        articletype: "Short communication",
        title: "Some Examples of the Triver’s Hypothesis in Birds",
        author: "Ignacio GARCÍA PEIRÓ*",
        publishedDate: "2025-04-04",
        doi: "10.63592/DJS/125",
        photo: images.popupEmailSubscription,
        pdf: "https://westlandpublishers.com/uploads/file2.pdf",
        journal: {
            id: 1,
            title: "Digital Journal of Science (DJS)",
            shortname: "DJS",
            subTitle: "Jawahar (Jay) Kalra",
            description: [
                "1Jawahar (Jay) Kalra, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
                "2Bryan Johnston, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
                "Corresponding Author: Jawahar (Jay) Kalra, Royal University Hospital, Saskatchewan Health Authority, 103 Hospital Drive, Saskatoon, Saskatchewan, S7N 0W8, Canada, Tel: (306) 655-2152; Fax: (306) 655-2223.",
            ],
        },
    },
    {
        id: 3,
        articletype: "Opinion",
        title: "Long Covid: New findings and Theories",
        author: "Manfred Doepp*",
        publishedDate: "2025-04-07",
        doi: "10.63592/DJS/126",
        photo: images.popupEmailSubscription,
        pdf: "https://westlandpublishers.com/uploads/file1.pdf",
        journal: {
            id: 1,
            title: "Digital Journal of Science (DJS)",
            shortname: "DJS",
            subTitle: "Jawahar (Jay) Kalra",
            description: [
                "1Jawahar (Jay) Kalra, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
                "2Bryan Johnston, Department of Pathology and Laboratory Medicine, College of Medicine, University of Saskatchewan, Saskatoon, Canada",
                "*Corresponding Author: Jawahar (Jay) Kalra, Royal University Hospital, Saskatchewan Health Authority, 103 Hospital Drive, Saskatoon, Saskatchewan, S7N 0W8, Canada, Tel: (306) 655-2152; Fax: (306) 655-2223.",
            ],
        },
    },
];

const LatestArticalTheory = () => {
    return (
        <div className="handheld-toolbar-enabled">
            <Header />
            <main className="page-wrapper model-index-less">
                <div className="image-slider">
                    <img
                        src={images.healthcareService}
                        alt={`Member `}
                        className="img-fluid w-100 h-100"
                    />
                </div>
                <div className="container mb-2 mb-md-4">
                    <div className="row pt-3 px-3 mt-md-2">
                        <div className="col-lg-9 col-md-8">
                            <LatestArticles
                                articles={dummyArticles}
                                latestArticle
                            />
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <Sidebar />
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

export default LatestArticalTheory;
