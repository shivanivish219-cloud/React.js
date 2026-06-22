import { BrowserRouter, Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Todo from "./Pages/Todo2";

function RouterApp(){
    return(
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path=" /Home" element={<Home />}/>
                <Route path=" /About" element={<About />}/>
                <Route path=" /todos" element={<Todo />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;
