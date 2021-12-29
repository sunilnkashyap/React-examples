import React, { useState } from 'react';

import AvatarSVG from '../../assets/img/avataaars.svg';


export function Masthead(props) {
    console.log(props);

    const [count, setCount] = useState(0);


    const { title, subTitle } = props;


  return (
    <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            <img className="masthead-avatar mb-5" src={AvatarSVG} alt="..." />
            <h1 className="masthead-heading text-uppercase mb-0">{title}</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <p className="masthead-subheading font-weight-light mb-0">{subTitle}</p>
            <p className="masthead-subheading font-weight-light mb-0"> {count} </p>

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    </header>
  );
}



// DATA pass

/**
 * 
 * Props --
 * State -- 
 * 
 * 
 */
