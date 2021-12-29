import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Masthead } from '../../components/Masthead';

import { basicData } from '../../assets/data/data';
import './App.css';

function App() {
    console.log("App Component");

    const [count, setCount] = useState(0);
  return (
    <div className="App">

        <Header  title={basicData.title} />
        <Masthead title={basicData.title} subTitle={basicData.subTitle} />

        <p className="masthead-subheading font-weight-light mb-0"> {count} </p>

        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>
  );
}

export default App;
