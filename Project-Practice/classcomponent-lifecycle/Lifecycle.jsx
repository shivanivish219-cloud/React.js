import { useEffect, useState } from "react";
import LifecycleCC from "./Mounting-CC-lifecycle";
import LifecycleDemoPart2 from "./functionComponent-lifecycle-2";


const LifeCycleAllDemo =()=>{
    const[ toggleChatBox, setToggleChatBox] = useState(false);

    useEffect(()=>{
        console.log("Mounting successfull");
    }, []);

    return(
        <div>
            <button onClick={()=> setToggleChatBox((prev)=> !prev)}>
                toggle ChatBox
            </button>
            <hr />
            {toggleChatBox && <LifecycleCC/>}
            <hr />
            {toggleChatBox && <LifecycleDemoPart2/>}

        </div>
    )
};

export default LifeCycleAllDemo;
