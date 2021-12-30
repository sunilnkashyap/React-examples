import React, { useState } from 'react';

import AvatarSVG from '../../assets/img/avataaars.svg';


export function Masthead(props) {

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
