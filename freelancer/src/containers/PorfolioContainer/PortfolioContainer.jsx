import React from 'react';
import { Header, Footer } from '../../components';
import { basicData } from '../../assets/data/data';

import { useParams } from 'react-router-dom';

function PortfolioContainer() {

  const { slug } = useParams();

  return (
    <div className="App">

        <Header  title={basicData.title} />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
            <h1>Sunil Kashyap -- {slug}</h1>

        <Footer />
    </div>
  );
}

export default PortfolioContainer;
