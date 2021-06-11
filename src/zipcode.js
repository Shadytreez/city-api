import React from 'react';
import './App.css';

function ZipCode(props){
    return(
        <div className="box">
            <h1>ZipCode: {props.zip}</h1>
            <ul>
                <li>ZipCode: {props.zip}</li>
            </ul>
        </div>
    )
}

export default ZipCode;