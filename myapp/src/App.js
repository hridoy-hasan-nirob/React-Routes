

import { Link, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Profile from "./Component/Profile";
const App = () => {
    return ( 
        <div className="navbar">
            <ul className="ul-style">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/About">About</Link></li>
                <li><Link to ="/Contact">Contact</Link></li>
                <li><Link to ="/Profile">Profile</Link></li>
            </ul>

            <nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                </Routes>
            </nav>

        </div>
        
     );
}
 
export default App;