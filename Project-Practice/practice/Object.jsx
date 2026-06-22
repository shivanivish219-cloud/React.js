import {useState } from 'react';

const Profilefunction=()=> {
    const [profile,setProfile] = useState({
        name: "diya",
        city : "mumbai",
        Number : "992723207",
    });


    const changeHere = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
        <p>hi! my name is {profile.name} from{profile.city} and my cotaact umber is {profile.Number}</p>
        <input type="text" name="name" placeholder="Name" onChange={changeHere} />
        <input type="text" name="city" placeholder="City" onChange={changeHere} />
        <input type="number" name="Number" placeholder="Number" onChange={changeHere}/>

        <button onClick={Profilefunction}>Click here</button>

    </div>
  )
}
export default Profilefunction ;



