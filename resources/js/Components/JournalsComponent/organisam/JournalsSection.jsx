import React from "react";
import "../../../../css/journals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JournalCard from "@/Components/JournalsComponent/molecule/JournalsCard";
import { images } from "../../../../img/assets";

const JournalsSection = () => {
    const journals = [
        {
            image: images.authorImage,
            name: "Western Journal of Agricultural Science and Technology (WJAST)",
            issn: "",
            abbreviation: "WJAST",
        },
        {
            image: images.authorImage,
            name: "Digital Journal of Science (DJS)",
            issn: "3066-3822",
            abbreviation: "DJS",
        },
        {
            image: images.authorImage,
            name: "Digital Journal of Case Reports and Clinical Images(DJCRCI)",
            issn: "",
            abbreviation: "DJCRCI",
        },
        {
            image: images.authorImage,
            name: "Western Journal of Medical Science and Research (KJMSR)",
            issn: "",
            abbreviation: "WJMSR",
        },
        {
            image: images.authorImage,
            name: "Advance Research in Environmental Sciences and Ecology (ARESE)",
            issn: "",
            abbreviation: "ARESE",
        },
        {
            image: images.authorImage,
            name: "Current Research in Ophthalmology and Visual Sciences (CROVS)",
            issn: "",
            abbreviation: "CROVS",
        },
        {
            image: images.authorImage,
            name: "Western Journal of Dental Sciences (WJDS)",
            issn: "",
            abbreviation: "WJDS",
        },
        {
            image: images.authorImage,
            name: "Journal of Cardiology and Angiology (JCA)",
            issn: "",
            abbreviation: "JCA",
        },
        {
            image: images.authorImage,
            name: "Minerals Metallurgy and Materials Science Journal (MMMSJ)",
            issn: "",
            abbreviation: "MMMSJ",
        },
    ];

    return (
        <section className="container pt-3 px-3 px-md-5">
            <h3 className=" fw-semibold py-2">Journals</h3>

            <p className="mb-5 ">
                Our journals aim to assist researchers at all career stages,
                including professors, scientists, post-docs, research scholars,
                and students, in finding publishing opportunities for their
                scientific work. WestLand Publishers is dedicated to
                disseminating high-quality scientific and technical information
                in fields such as science, technology, and medicine.
            </p>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {journals.map((journal, index) => (
                    <div className="col" key={index}>
                        <JournalCard journal={journal} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JournalsSection;
