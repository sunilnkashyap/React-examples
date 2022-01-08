import React, { useState } from 'react';

import { Header, Masthead, PortfolioCard, SectionContainer, About, ContactForm, Footer } from '../../components';

import { basicData, portfolioData } from '../../assets/data/data';
import './App.css';

const shrotDescriptions = [
  'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.',
  'You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!',
];

function App() {
  return (
    <div className="App">

        <Header  title={basicData.title} />
        <Masthead title={basicData.title} subTitle={basicData.subTitle} />

        <SectionContainer title="Portfolio">
          {
            portfolioData.map((singlePortfolio, index) => {
              return <PortfolioCard key={`portfoliocard_${index}`} imgSrc={singlePortfolio.imgSrc} imgAlt={singlePortfolio.imgAlt} slug={singlePortfolio.slug} />
            })
          }
        </SectionContainer>


        <About shrotDescriptions={shrotDescriptions} downloadLink="#" />


        <SectionContainer title="Contact Me">
            <ContactForm />
        </SectionContainer>


          <Footer />
    </div>
  );
}

export default App;
