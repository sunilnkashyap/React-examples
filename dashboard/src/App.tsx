import React from 'react';
import logo from './logo.svg';
import './App.css';


interface TestInterface {
  test: string;
}

interface BasicData {
  title: string;
  subTitle: string;
  test?: TestInterface
}


const basicData: BasicData = {
  title: 'Sunil Kashyap asdfadfsasdf',
  subTitle: 'Software Engineer'
}

function App() {

  let data: string = 'Sunil';


  let sampleArr: Array<any> = ['', 1, 2.1, null];


  basicData.test = { test: '' };

  console.log(basicData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// var name: string = 'Sunil';


// name: string = 12345;


// Typescript

/**
 * 
 * 
 * 
 */



