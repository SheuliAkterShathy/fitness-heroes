import React from 'react';
import './Card.css'
const Card = () => {
    
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
                <h3>Add a break</h3>
                <div>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
        </div>
    );
};

export default Card;