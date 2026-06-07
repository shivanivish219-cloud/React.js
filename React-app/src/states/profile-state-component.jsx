import { useState } from "react";

const ProfileObjState = () => {
  const [profile, setProfile] = useState({
    name: "Aviral",
    city: "Udaipur",
    email: "aviral@meta.com",
    Education : "graduate",
    DOB : "12 march 2006"
  });

  console.log("Profile: ", profile);

  return (
    <div>
      <h1>
        My name is {profile.name} &amp; I'm from {profile.city} & email is{" "}
        {profile.email} my education is {profile.Education} DOB is {profile.DOB}
      </h1>
      <input
        type="text"
        placeholder="Enter name"
        value={profile.name}
        onChange={(e) => {
         
          setProfile({ ...profile, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter city"
        value={profile.city}
        onChange={(e) => {
          setProfile({ ...profile, city: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={profile.email}
        onChange={(e) => {
          setProfile({ ...profile, email: e.target.value });
        }}
      />
      <input type="text" placeholder="Education" value={profile.Education} onChange={(e)=>{
        setProfile({...profile, Education : e.target.value});
      }} 
      />
        <input type="date" placeholder="Date of birth" value={profile.DOB} onChange={(e)=>{
setProfile({...profile, DOB : e.target.value});
        }}/>
    </div>
  );
};

export default ProfileObjState;