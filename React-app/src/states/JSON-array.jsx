import { useState } from "react";

function ArrayList() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul",
      age: 22,
    },
    {
      id: 2,
      name: "Riya",
      age: 20,
    },
  ]);

    const Adduser = ()=>{
        setUsers([
  ...users,
  {
    id: 3,
    name: "Dev",
    age: 25,
  },
  {
    id: 4,
    name: "tarun",
    age: 30,
  }
]);
    }
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
        </div>
      ))}
         <button onClick={Adduser}>
        Add User
      </button>
    </>
  );
}
export default ArrayList;