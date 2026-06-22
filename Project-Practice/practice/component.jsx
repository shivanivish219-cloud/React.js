import { useState } from "react";

export default function LoginComponent() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
   const {name, value}=e.target;
   setUser({...user, [name]: value})
  };

  
  

  const onClear = () =>{
    setUser({
        email: "",
        password: "",


    })
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        value= {user.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <hr />

      <h3>Live Preview</h3>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}













