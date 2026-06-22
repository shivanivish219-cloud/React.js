import { useState } from "react";
import {useNavigate} from "react-router";

const UserList =() =>{
    const navigate = useNavigate();

    const[ users, setUsers] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Abhishek" },
    { id: 3, name: "Tarun" },
    { id: 4, name: "Deepak" },
    { id: 5, name: "Uvesh" },
    ]);

    return(
        <div>
            <h1>my users</h1>
            {users.map((items)=>{
                return(
                    <li key={items.id } onClick={()=> navigate(`/users/${items.id}/${items.name}`)}>
                        {items.name}
                    </li>
                );
            })}
        </div>
    );



};


export default UserList;
