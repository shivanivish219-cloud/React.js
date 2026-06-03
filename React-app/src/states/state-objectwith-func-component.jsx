import { use, useState } from "react";

function App(){
    const [user, setUser] = useState({
        name : "riya",
        city : "mumbai",
        age : 23,
        email : "riya123@gmail.com",
    });

    const changeName =()=>{
        setUser({
            ...user, name: "rohini",
            email : "rohinixyz@gmail.com",
            age : 25,
        });
    };

    return(
        <div>
            <h3>name : {user.name}</h3>
            <h3>age : {user.age}</h3>
            <h3>email :{user.email}</h3>
            <button onClick={changeName}>click here to change</button>
        </div>
        ,
        // <div>
        //     <h3>name : {user.name}</h3>
        //     <h3>age : {user.age}</h3>
        //     <h3>email :{user.email}</h3>
        //     <button onClick={changeName}>click here to change</button>
        // </div>
    )
}

export default App;
