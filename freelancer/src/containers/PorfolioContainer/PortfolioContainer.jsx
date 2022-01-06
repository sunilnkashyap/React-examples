import React, { useState, useEffect, useCallback } from 'react';
import { Header, Footer } from '../../components';
import { basicData } from '../../assets/data/data';

import { useParams } from 'react-router-dom';

import { portfolioData } from '../../assets/data/data';

function PortfolioContainer() {
  const { slug } = useParams();
  const [counter, setCounter] = useState(0);

  const [pData, setPData] = useState({
    imgSrc: null,
    imgAlt: '.',
    slug: '',
    description: ""
  });

  let localCounter = 0;
  console.log(' ---- PortfolioContainer ----');


  useEffect(() => {
    const filterData = getData();
    setPData(filterData);
  }, [slug])

  const getData = () => {
    console.log(' --- get Data function ---');
    return portfolioData.filter((sData) => slug == sData.slug)[0];
  };




  const counterHandler = () => {
    setCounter(counter + 1);
  }

  const counterLocalHandler = () => {
    localCounter = localCounter + 1;

    // console.log(localCounter);
  }

  // console.log({counter, localCounter, pData});

  return (
    <div className="App">

        <Header title={basicData.title} />

            <p className='pt-5 mt-5'></p>
            Counter - {counter}
            Local counter - {localCounter}
            <br/>
            <button onClick={counterHandler}>Increment</button>
            <button onClick={counterLocalHandler}>Increment Local</button>
            <h1 className='pt-5 mt-5'>{pData.slug}</h1>
            {
              pData.imgSrc && <img className="img-fluid" src={pData.imgSrc} alt={pData.imgAlt} />
            }
            <p>{pData.description}</p>
        <Footer />
    </div>
  );
}

export default PortfolioContainer;
