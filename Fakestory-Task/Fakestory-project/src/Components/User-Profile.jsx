import { useState, useContext } from "react";

function UserProfile({children}) {
  const [Profile, setProfile] = useState(()=>{

    export function userProvider({children}){
        const [users, setuser]= useState({
    name: "Shivani",
    city: "Indore",
    age: "23",
    eductation: "Graduate",
    Nationality:"india",
    Email: shivanivish@12345.

    

  })




  return (
    <div>
    < userContsxt.provider value ={{users, setUser}}>
    {childern}
    </userContsxt.provider>
</div>
  );
}


