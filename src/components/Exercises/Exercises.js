import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
        
       <div>
        <img src="https://www.shutterstock.com/image-vector/gym-logo-fitness-511773892" alt="" />
        <h1>FITNESS-HEROES</h1>
         <div className='home-container'>
            <div className='exercises-container'>

           {
            exercises.map(exercise=><Exercise
                 exercise={exercise}
                 key={exercise.id}></Exercise>)
           }
        </div>
        <div className="card-container">
            {/* <h3>Sheuli Akter Shathy</h3>
            <p>Cumilla,Bangladesh</p>
            <div>
                <h5>Weight:60kg</h5>
                <h5>Height:5.3In</h5>
                <h5>Age:30 years</h5>

            </div>
            <div>
                <h3>Add a break</h3>
                <div>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div> */}
            <Card></Card>
        </div>
        </div>
       </div>
    );
};

export default Exercises;