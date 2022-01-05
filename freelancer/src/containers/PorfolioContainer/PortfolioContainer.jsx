import React, { useState } from 'react';
import { Header, Footer } from '../../components';
import { basicData } from '../../assets/data/data';

import { useParams } from 'react-router-dom';

import { portfolioData } from '../../assets/data/data';

function PortfolioContainer() {
  const { slug } = useParams();
  const [counter, setCounter] = useState(0);

  console.log(' ---- PortfolioContainer ----');


  const data = portfolioData.filter((singleData) => {
    if(singleData.slug == slug){
      return true;
    }
  })[0];


  const counterHandler = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">

        <Header title={basicData.title} />

            <p className='pt-5 mt-5'></p>
            Counter - {counter}
            <button onClick={counterHandler}>Increment</button>
            <h1 className='pt-5 mt-5'>{data.slug}</h1>
            <img className="img-fluid" src={data.imgSrc} alt={data.imgAlt} />
            <p>{data.description}</p>
        <Footer />
    </div>
  );
}

export default PortfolioContainer;
