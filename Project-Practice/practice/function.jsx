import { useState } from "react";

function CounterFunction () {
    const [counter, setCounter] = useState(0);


    
       const Increment=()=>{
            setCounter(counter+1)
        };
       const Decrement=()=>{
             setCounter(counter-1)
        };
    
    return(
        <div>
    <p> Counter : {counter}</p>
         <button onClick={Increment}>+</button>
         <button onClick={Decrement}>-</button>
        </div>
    );
};

export default CounterFunction;


