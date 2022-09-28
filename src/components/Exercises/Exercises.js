import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'
const Exercises = () => {
    const [exercises,setExercises]=useState([]);
    const [card,setCard]=useState([]);

    useEffect( ()=>{
     fetch('data.json')
     .then(res=>res.json())
     .then(data=>setExercises(data))
    },[]);


    const handleAddToCard = (exercise)=>{
     
        const newCard = [...card, exercise];
        setCard(newCard)
        }
    return (
        
       <div>
       <div className='title'>
       <img src="https://previews.123rf.com/images/vectorgalaxy/vectorgalaxy1805/vectorgalaxy180500457/101156842-gym-logo-png-isolated-on-white-background-for-your-web-and-mobile-app-design-colorful-vector-icon-br.jpg" alt="" />
        <h1>FITNESS-HEROES</h1>
       </div>
         <div className='home-container'>
            <div className='exercises-container'>

           {
            exercises.map(exercise=><Exercise
                 exercise={exercise}
                 handleAddToCard={handleAddToCard}
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
            <Card card={card}></Card>
        </div>
        </div>
       </div>
    );
};

export default Exercises;