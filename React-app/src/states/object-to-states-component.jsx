import { useState } from "react";
import ProfileCard from "./Profile-box";

const StateObjectWithFunc = () => {
  const [user, setUser] = useState({
    name: "yash",
    age: "",
    email: "",
   
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Hello {user.name} to the batch</p>

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

      <hr />

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
    </div>
  );
};

export default StateObjectWithFunc;