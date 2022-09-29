import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {handleAddToCard,exercise}=props;
    const {picture,name,time,details}=exercise;
   
    return (
        <div className='exercise'>
            <img src={picture} alt="" />
            <div className='exercise-info'>
            <h3>Name:{name}</h3>
            <p>Time required:{time}</p>
            <p>Details: {details}</p>
            </div>
            <button className='btn-exercise' onClick={()=>handleAddToCard(exercise)}>Add to list</button>
        </div>
    );
};

export default Exercise;