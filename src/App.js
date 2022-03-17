
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/SignUp"
import NavBar from "./pages/Navigation/NavBar";
import {useState,useEffect} from "react";
import {auth} from "./Firebase-config"
import axios from "axios";
import CreateProfile from "./pages/CreateProfile";
import AnonymousProfile from "./pages/AnonymousProfile";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState([]);



  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }

    });
  }, []);

  if(isAuth){
  console.log(auth.currentUser.displayName);
  return (
    <Router>
      <nav>
        <NavBar isAuth = {isAuth}/>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home/>}  />
        <Route path = "/login" element = {<Login setIsAuth = {setIsAuth}/>}  />
        <Route path = "/profile" element = {<Profile isAuth = {isAuth} data = {data}/>} />
        <Route path = "/signup" element = {<Signup setIsAuth = {setIsAuth} isAuth = {isAuth}/>}  />
        <Route path = "/createProfile" element = {<CreateProfile/>}  />
        <Route path = "/anonymousProfile" element = {<AnonymousProfile isAuth = {isAuth}/>}/>
      </Routes>
    </Router>
  );}

  else{
    return (
      <Router>
        <nav>
        <NavBar isAuth = {isAuth}/>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home setIsAuth = {setIsAuth}/>}  />
        <Route path = "/login" element = {<Login setIsAuth = {setIsAuth}/>}  />
        <Route path = "/signup" element = {<Signup setIsAuth = {setIsAuth}/>} />
        <Route path = "/createProfile" element = {<CreateProfile/>}  />
      </Routes>
    </Router>
    )
  }
}

export default App;
