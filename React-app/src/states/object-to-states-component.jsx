import { useState } from "react";
import ProfileCard from "./Profile-box";

const StateObjectWithFunc = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
   
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const addUser= ()=>{
    if (!user.name || !user.age || !user.email) {
      alert("Please fill all fields");
      return;
    }

    setUsers((prevUsers)=>[
      ...prevUsers, 
      {
         id: Date.now(),
    name: user.name,
    age: user.age,
    email: user.email,
      }
    ]);

    setUser({
      name: "",
      age:"",
      email:"",

    })

  }
    return (
    <div>
     

      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        value={user.age}
        placeholder="Enter Age"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />
        <button onClick={addUser}>Add User</button>
      <hr />

      {/* <ProfileCard
        name={user.name}
        age={user.age}
        email={user.email}
      />
      <ProfileCard
        name={user.name}
        age={user.age}
        email={user.email}
      />
      <ProfileCard
        name={user.name}
        age={user.age}
        email={user.email}
      />
     

    </div>,


  );
}; */}

{users.map((item) => (
        <ProfileCard
          key={item.id}
          name={item.name}
          age={item.age}
          email={item.email}
        />
      ))}
    
     </div>

  );
};

export default StateObjectWithFunc;