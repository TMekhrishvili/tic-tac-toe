import React from 'react';
import './main.css';
import x from '../images/x.svg';
import o from '../images/o.svg';

const Cell = ({ value, callBack }) => {
    const image = value !== null ?
        value === 0 ?
            <img src={o} alt="o" className="img" /> :
            <img className="img" src={x} alt="x" /> :
        null
    return (
        <div className="cell" onClick={callBack}>
            {image}
        </div>
    );
}


export default Cell
