import {useParams} from "react-router";

const UserName=()=>{
    const {name}= useParams();
    return(
        <div>
            <h1>My user name is: {name}</h1>
        </div>
    )
};
export default UserName;
