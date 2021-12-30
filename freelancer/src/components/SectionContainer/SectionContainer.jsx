import React from 'react';

export function SectionContainer(props) {

  const { title, children } = props;


  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{title}</h2>
          <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {children}
          </div>
      </div>
    </section>
  );
}


// <PortfolioCard imgSrc={} imgAlt="..." />