import React from 'react';
import './Exercise.css'
const Exercise = ({exercise}) => {
    const {picture,name,time}=exercise;
    return (
        <div className='exercise'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>Time required:{time}</p>
            <button className='btn-exercise'>Add to list</button>
        </div>
    );
};

export default Exercise;