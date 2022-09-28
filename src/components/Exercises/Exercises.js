import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'
const Exercises = () => {
    const [exercises,setExercises]=useState([]);
    useEffect( ()=>{
     fetch('data.json')
     .then(res=>res.json())
     .then(data=>setExercises(data))
    },[]);

    return (

        <div className='home-container'>
            <div className='exercises-container'>

           {
            exercises.map(exercise=><Exercise
                 exercise={exercise}
                 key={exercise.id}></Exercise>)
           }
        </div>
        <div className="card-container">
            <h3>ghhhhhhhhhhhhj</h3>
            <p>jhjk</p>
        </div>
        </div>
    );
};

export default Exercises;