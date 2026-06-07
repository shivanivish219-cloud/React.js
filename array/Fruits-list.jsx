import { useState } from "react";

const FruitList =()=>{
    const[Fruits, setFruits]= useState([
    "Mango",
    "Apple",
    "Orange",
    "Grapes",
    "Papaya",
    "Cheeku",
    "Pomegranate",
    ]);

    return(
        <div>
    <ul>
        {Fruits.map((Fruit)=>{
            return(
                <li 
                key={Fruit}
                onClick={()=>{
                    console.log("clicked:", Fruit);

                   setFruits(function (abTkkaData) {
                    return abTkkaData.filter(function (item) {
                    return item !== Fruit;
                        });
                    });
                }}
                >
                    {Fruit}
                </li>
            );
        })}
    </ul>
        </div>
    );

};

export default FruitList