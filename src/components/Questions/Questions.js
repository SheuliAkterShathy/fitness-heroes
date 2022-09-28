import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div className='questions-container'>
              <div>
              <h3>1.What are the differences between state and props?</h3>
               <p>Ans: 1.React State is mutable and its value can be changed as per requirement.
                Props are immutable that is their content cannot be changed once assigned.
               2. State set by parent component on the othehand props set by eventhandles that is they are completely managed by component by itself.
               3.State is local to a component and cann't be used in other components.Props allows child components to read values from parent components. </p>
              </div>

            <div>
            <h3>2.What are the other uses of useEffect without fetching data?</h3>
               <p>Ans:The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components.Without  fetching data from API, UseEffect is used many purposes.Such as:- 
               1.Add an event listener for a button.
               2.Perform an action when state or props change.
               3.Clean up event listeners when the component unmounts.
               4.Directly update the Dom.  
               </p>
            </div>

           <div>
           <h3>3.How does React work?</h3>
               <p>Ans:React basically maintains a tree. This tree is able to do efficient diff computations on the nodes.

               Think HTML code as a tree. In fact, that is exactly how the browser treats DOM ( rendered HTML on the browser). React allows to effectively re-construct DOM in JavaScript and push only those changes to the DOM which have actually occurred. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code</p>
            </div>
        </div>
    );
};

export default Questions;