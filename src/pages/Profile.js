import React from "react";
import './Profile.css';
import {useState,useEffect} from "react";
import {addDoc,collection, where,query,getDocs} from "firebase/firestore";
import {Button} from "antd";
import {db,auth} from "../Firebase-config";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import CreateProfile from "./CreateProfile";

function Profile({isAuth},{data}) {

  const [Name, setName] = useState("");
  const [Status, setStatus] = useState("");
  const [Likes,setLikes] = useState(0);
  let navigate = useNavigate();

  const profileCollectionRefs = collection(db,"Clients");
  const userCollectionRefs = collection(db,"User");
  const [userLists, setUserLists] = useState([]);

  const letEmail = auth.currentUser.email;

  useEffect(()=>{
    const q = query(userCollectionRefs,where("Email","==",letEmail));
    const getposts = async() =>{
      const data =  await getDocs(q);
      setUserLists(data.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      })));
    };
    getposts();
    console.log(userLists);
  },[userLists.Email]);


  console.log(userLists);
  let userName = "";
  userLists.map((data)=>{
    userName = data.Name;
  })
  
  

  /*const incrementLikes =async () =>{
    setLikes(Likes+1);
    };
  */


  const createProfile = async() =>{

    if(isAuth && (auth.currentUser.displayName) != null){
      await addDoc(profileCollectionRefs,{
        Name:userName,Status,Likes
      });
      navigate("/");
    }
  }

  return (
    <div className='card card-profile text-center'>
  <img alt='' className='card-img-top' src='https://unsplash.it/340/160?image=354'/>
  <div className='card-block'>
    <img alt='' className='card-img-profile' src='https://unsplash.it/340/160?image=354'/>
    <div className='card-title'>{userName}</div> 
    <textarea className='card-title' placeholder="Update your Status" onChange={(event) => {
      setStatus(event.target.value);}}/>
    <div className="card-links">
      <Button type="primary" onClick={createProfile}>POST</Button>
    </div>
  </div>
</div>

  );
}

export default Profile;
