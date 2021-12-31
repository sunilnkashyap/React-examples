import React from 'react';
import { Header, Footer } from '../../components';
import { basicData } from '../../assets/data/data';

function PortfolioContainer() {
  return (
    <div className="App">

        <Header  title={basicData.title} />

            <h1>Sunil Kashyap</h1>

        <Footer />
    </div>
  );
}

export default PortfolioContainer;
