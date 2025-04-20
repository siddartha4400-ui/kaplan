import React, { useEffect, useState } from "react";
import "../../../../css/Journals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JournalCard from "@/Components/JournalsComponent/molecule/JournalsCard";
import { getJournals } from "../../../services/api/apis";

const JournalsSection = () => {
    const [journalsData, setJournalsData] = useState([]);

    useEffect(() => {
        getJournals("journals")
            .then((res) => {
                setJournalsData(res || []);
            })
            .catch((error) => {
                console.error("Journal Fetch Error:", error);
            });
    }, []);

    return (
        <section className="container pt-3 px-3 px-md-5">
            <h3 className="fw-semibold py-2">Journals</h3>
            <p className="mb-5 ">
                Our journals aim to assist researchers at all career stages,
                including professors, scientists, post-docs, research scholars,
                and students, in finding publishing opportunities for their
                scientific work. WestLand Publishers is dedicated to
                disseminating high-quality scientific and technical information
                in fields such as science, technology, and medicine.
            </p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {journalsData.map((journal, index) => (
                    <div className="col" key={index}>
                        <JournalCard journal={journal} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JournalsSection;
