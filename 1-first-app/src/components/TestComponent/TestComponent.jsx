import React from 'react';
import './test.css';

export const TestComponent = ({label = 'default'}) => {

    return (
        <h1>{label}</h1>
    )
}
