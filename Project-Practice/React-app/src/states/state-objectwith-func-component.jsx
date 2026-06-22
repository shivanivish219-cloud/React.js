import { use, useState } from "react";

function App(){
    const [user, setUser] = useState({
        name : "riya",
        city : "mumbai",
        age : 23,
        email : "riya123@gmail.com",
    });
    const [user2, setUser2] = useState({
        name : "komal",
        city : "mumbai",
        age : 23,
        email : "komal123@gmail.com",
    });

    const changeName =()=>{
        setUser({
            ...user, name: "rohini",
            email : "rohinixyz@gmail.com",
            age : 25,
        });
        setUser2({
            ...user2, name: "siya",
            email : "siyaabz@gmail.com",
            age : 22,
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
        <div>
            <h3>name : {user2.name}</h3>
            <h3>age : {user2.age}</h3>
            <h3>email :{user2.email}</h3>
            <button onClick={changeName}>click here to change</button>
        </div>

        
    )
}

export default App;
