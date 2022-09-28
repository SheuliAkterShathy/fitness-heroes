import React, { useState } from 'react';
import './Card.css'
const Card = ({card}) => {
    
    let time=0;
    for(const item of card){
    time=time+item.time;
    }

    const [breakTime,setBreakTime]=useState(0);

    const addABreak=(time)=>{

    setBreakTime(time)
    }
    return (
        <div>
           <h3>Sheuli Akter Shathy</h3>
            <p>Cumilla,Bangladesh</p>
            <div>
                <h5>Weight:60kg</h5>
                <h5>Height:5.3In</h5>
                <h5>Age:30 years</h5>

            </div>
            <div>
                <h4>Add a break</h4>
                <div>
                    <button onClick={()=>addABreak(10)}>10s</button>
                    <button onClick={()=>addABreak(20)}>20s</button>
                    <button onClick={()=>addABreak(30)}>30s</button>
                    <button onClick={()=>addABreak(40)}>40s</button>
                </div>
            </div>
 
           <h4>Exercise Details</h4>
           <p>Recuired time:{time}s</p>
           <p>Break time:{breakTime}s</p>
        </div>
    );
};

export default Card;