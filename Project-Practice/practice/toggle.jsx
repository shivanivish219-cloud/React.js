import { useState } from "react";

function ToggleFunc(){
    const[show, setShow]=useState(false);

    return(
        <div >{(show&&

<h2  style = {{
            backgroundColor: "red",
            justifyContent: "center",
            display:"flex"

            }}>
                hello</h2>)}

        <button onClick={()=>setShow(!show)}>
            {show? "hide":"show"}
            </button>
            </div>
)};


export default ToggleFunc;
