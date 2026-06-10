import { useState, useEffect } from "react";

function MouseTrackerBug(){
    useEffect(()=>{
        const handleMouseMove=(event)=>{
            console.log("Mouse moved:", event.clientX, event.clientY );
        };
        window.addEventListener("mousemove", handleMouseMove);
    },[]);
    return <h2>Mouse Tracker Component</h2>;
}

function SimpleComponent(){
    return <h2>Simple Component</h2>;
}

export default function MouseTrackerBugComp(){
    const [showTracker, setShowTracker] =useState(false);

    return(
    <div style={{ padding: "20px" }}>
        <button onClick={()=> setShowTracker((prev)=> !prev)}>
            Toggle Component
        </button>
        <div style={{ marginTop: "20px" }}>
        {showTracker ? <MouseTrackerBug /> : <SimpleComponent />}

        </div>
    </div>
    )
}