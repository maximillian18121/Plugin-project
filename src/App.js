
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NavBar from "./pages/Navigation/NavBar";
import {useState} from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <nav>
        <NavBar setIsAuth = {isAuth}/>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home/>}  />
        <Route path = "/login" element = {<Login setIsAuth = {setIsAuth}/>}  />
        <Route path = "/profile" element = {<Profile/>}  />
      </Routes>
    </Router>
  );
}

export default App;
