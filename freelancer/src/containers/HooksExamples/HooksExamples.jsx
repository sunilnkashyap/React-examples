
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { basicData } from '../../assets/data/data';
import { useCallback } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

function HooksExamples() {
 
    const [count, setCount] = useState(0);

    const [testState, setTestState] = useState(true);


    const inputEl = useRef(null);

    const incrementHandler = () => {
        // count increment 
        setCount(count + 1); // 1


    };



    const decrementHandler = () => {
        // count decrement
        setCount(count - 1);
    }



    const testStateHandler = () => {
        setTestState(!testState);
    }



    useEffect(() => {

        console.log('useEffect without depedencies');

        return () => {
            console.log('clean up code');
        }

    }, [])

    console.log(' component rerender');

  return (
    <div className="App">

        <Header title={basicData.title} />

            <p className='pt-5 mt-5'></p>
            <h1>Hooks Examples</h1>

            <Link to="/">Test</Link>
            <h2>Count :: {count}</h2>


            <br/>
            <br/>
            <br/>


            <button onClick={incrementHandler} className='btn btn-primary'>Increment</button>
            <br/>
            <br/>

            <button onClick={decrementHandler} className='btn btn-warning'>Decrement</button>
            <br/>
            <br/>

            <br/>
            <br/>
            Test State - {testState ? 'true' : 'false'}
            <button onClick={testStateHandler} className='btn btn-danger'>Toggle Test State</button>
            <br/>
            <br/>



            <input style={{ width: '100px' }} ref={inputEl} className='form-control' type="text" />
            <br/>
            <br/>     <br/>
            <br/>
        <Footer />
    </div>
  );
}

export default HooksExamples;
