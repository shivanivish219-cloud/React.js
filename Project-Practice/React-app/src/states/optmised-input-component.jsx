import { useState } from "react";

const ProfileNewObjectState =()=>{
    const [profile, setProfile] = useState({
        name : "harshita",
        age: 24,
        city: "bhopal",
    });

    // console.log("profile:", profile);

    const [darkMode, setDarkMode] = useState(false);

    const handleInputChange =(e)=>{
         
        const{name, value} = e.target;
        setProfile({...profile, [name]: value});
    };

    // const clearData =()=>{
    //     setProfile({
    //         name: "",
    //         city: "",
    //         age:"",
    //     })
    
    return(
        <div style={{
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
  }}>
    <button style={{width: "150px", height: "50px", padding:"20px",}} onClick={()=>setDarkMode(!darkMode)}>
        {darkMode? "Light Mode": "Drak Mode"}
    </button>
            <h2>
                my name is {profile.name} i am from {profile.city} & my age is {profile.age}.
            </h2>

            <input type="text" name="name" placeholder="name" value={profile.name} onChange={handleInputChange}/>
            <input type="text" name="city" placeholder="city" value={profile.city} onChange={handleInputChange}/>
            <input type="number" name="age" placeholder="age" value={profile.age} onChange={handleInputChange}/>


        </div>
    );
}

export default ProfileNewObjectState;
