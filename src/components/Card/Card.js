import React, { useEffect, useState } from 'react';
import './Card.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = ({card}) => {
    
    let time=0;
    for(const item of card){
    time=time+item.time;
    }

    const [breakTime,setBreakTime]=useState(0);
   
    const addABreak=(time)=>{
         localStorage.setItem("breaktime",time)
        setBreakTime(time)
    }
     
        useEffect(()=>{
            const localStorageData= localStorage.getItem("breaktime")
           if(localStorageData){
            setBreakTime(localStorageData)
           }
        },[]);

    const activityCompleted = () => toast("Congrats!! Activity completed");

    return (
        <div>
           <h3>Sheuli Akter Shathy</h3>
           <h5>Junior Web Developer</h5>
            <p>Cumilla,Bangladesh</p>
            <div className='personal-info'>
                <h5>Weight: 60kg</h5>
                <h5>Height: 5.3In</h5>
                <h5>Age: 30yr</h5>

            </div>
            <div>
                <h4>Add a break</h4>
                <div className='breakTime-btn'>
                    <button onClick={()=>addABreak(10)}>10s</button>
                    <button onClick={()=>addABreak(20)}>20s</button>
                    <button onClick={()=>addABreak(30)}>30s</button>
                    <button onClick={()=>addABreak(40)}>40s</button>
                    <button onClick={()=>addABreak(50)}>50s</button>

                </div>
            </div>
 
           <h4>Exercise Details</h4>
           <p className='required-time'>Recuired time:  {time}seconds</p>
           <p className='break-time'>Break time: {breakTime}seconds</p>
           <button className='activity-complited-btn' onClick={activityCompleted}>Activity Completed</button><ToastContainer />
        </div>
    );
};

export default Card;