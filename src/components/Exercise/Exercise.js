import React from 'react';
import './Exercise.css'
const Exercise = ({exercise}) => {
    return (
        <div className='exercise'>
            <img src={exercise.picture} alt="" />
        </div>
    );
};

export default Exercise;