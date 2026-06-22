import {useState} from 'react';

function CounterNum(){
    const [counter, setCounter]=useState(0);


    const increment=()=>{
        setCounter (counter+1)
    }
    const decrement=()=>{
        setCounter (counter-1)
    }

    return(
        <div>
            <p>count:{counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default CounterNum;
