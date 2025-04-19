import React from 'react';
import { images } from '../../../../img/assets';
import { COMMONTITLES } from '../../../../utility/CommonValues';

const InitiativeCard = ({ image, title, description, link }) => {
  return (
    <div className="col mb-2" style={{ padding: "0px 50px" }}>
      <article className="card h-100 border-0 shadow">
        <div className="card-img-top position-relative overflow-hidden" style={{ padding: "1.3em 1.3em 0 1.3em" }}>
          <a className="d-block" href={link}>
            <img src={image} alt={title} />
          </a>
        </div>
        <div className="card-body">
          <h3 className="product-title mb-2 fs-base">
            <a className="d-block text-truncate" href={link}>{title}</a>
          </h3>
          <span className="fs-sm text-muted">{description}</span>
        </div>
        <div className="card-footer mt-n1 py-0 border-0">
          <a className="btn btn-outline-primary d-block w-100 mb-3" href={link}>
            Read More
          </a>
        </div>
      </article>
    </div>
  );
};

const initiatives = [
  {
    image: images.initiativesBook,
    title: "E-Books",
    description: "E-Books offer numerous advantages, providing flexibility in reading at one's convenience.",
    link: `/common-text/${COMMONTITLES.EBBOK}`
  },
  {
    image: images.initiativesReprints,
    title: "Reprints",
    description: "If authors desire to distribute copies of their published articles from WestLand Journals",
    link: "/reprints"
  },
  {
    image: images.initiativesVideoArticales
    ,
    title: "Video Articles",
    description: "Westland Publishers is dedicated to advancing open access video articles, providing researchers with an accessible",
    link: `/common-text/${COMMONTITLES.VIDEOARTICLES}`  }
];

const InitiativesSection = () => {
  return (
    <div className="container pb-5 mb-2 mb-md-4 text-center">
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 me-3 text-center">New Initiatives</h2>
      </div>
      <div className="col-md-12">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gy-sm-4 gy-3 pt-sm-3">
          {initiatives.map((item, index) => (
            <InitiativeCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitiativesSection;
