import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
          <Link to="/Todo2" style={{color: "white"}}>Todo2</Link>
           <Link to="/home"  style={{ color: 'white' }}>Home</Link>
           <Link to="/About" style={{ color: "white"}}>About</Link>
        </nav>
    )
};

export  default Navbar;
