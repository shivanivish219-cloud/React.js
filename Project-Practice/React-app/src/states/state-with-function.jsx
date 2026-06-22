import { useState } from "react";

const StateWithFunc =()=>{
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <p>Counter : {counter}</p>
            <button onClick={()=>setCounter (counter + 1)}>Increment</button>
            <button onClick={()=>setCounter (counter - 1)}>Decrement</button>
        </div>
    )
};

export default StateWithFunc;