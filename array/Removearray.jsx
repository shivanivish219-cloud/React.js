import { useState } from "react";

const RemoveItemsFromArray =()=>{
    const[hobbies, SetHobbies] = useState(["Music", "Travel", "Food","OTT"]);

    return(
        <div>
            <ul>
                {hobbies.map((hobby, index)=>{
                    return(
                        <li
                            key={index}>
                                {hobby}
                    <button
                            onClick={()=>{
                                SetHobbies((prevState)=>
                               prevState.filter((_, item)=>item !==index), );
                            }}
                            >
                             {SetHobbies}tap to remove
                             </button>
                            {hobby}
                        </li>
                    );
                })}
            </ul>

            
        </div>
    )
};

export default RemoveItemsFromArray;