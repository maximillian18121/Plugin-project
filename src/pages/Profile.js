import React from "react";
import './Profile.css';
import {useState} from "react";
import {addDoc,collection} from "firebase/firestore";
import {db} from "../Firebase-config";
import {useNavigate} from "react-router-dom";

function Profile() {

  const [Name, setName] = useState("");
  const [Status, setStatus] = useState("");
  const [Likes,setLikes] = useState(0);
  let navigate = useNavigate();

  const profileCollectionRefs = collection(db,"Clients");

  /*const incrementLikes =async () =>{
    setLikes(Likes+1);
    };
  */

  const createProfile = async() =>{
    await addDoc(profileCollectionRefs,{
      Name,Status,Likes
    });
    navigate("/");
  }



  return (
    <div className='card card-profile text-center'>
  <img alt='' className='card-img-top' src='https://unsplash.it/340/160?image=354'/>
  <div className='card-block'>
    <img alt='' className='card-img-profile' src='https://unsplash.it/340/160?image=354'/>
    <input className='card-title' placeholder="Name" onChange={(event) => {
      setName(event.target.value);
    }}/>
    <textarea className='card-title' placeholder="Post your Status" onChange={(event) => {
      setStatus(event.target.value);}}/>
    <div className="card-links">
      <button type="submit" onClick={createProfile}>POST</button>
    </div>
  </div>
</div>

  );
}

export default Profile;
