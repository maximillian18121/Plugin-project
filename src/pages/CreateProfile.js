import React from "react";
import './Profile.css';
import {useState} from "react";
import {addDoc,collection} from "firebase/firestore";
import {db} from "../Firebase-config";
import {useNavigate} from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

function CreateProfile() {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  let navigate = useNavigate();

  const profileCollectionRefs = collection(db,"User");

  /*const incrementLikes =async () =>{
    setLikes(Likes+1);
    };
  */

  const createProfile = async() =>{
    await addDoc(profileCollectionRefs,{
      Name,Email
    });
    navigate("/profile");
  }

  return (
    <div className='card card-profile text-center'>
  <img alt='' className='card-img-top' src='https://unsplash.it/340/160?image=354'/>
  <div className='card-block'>
    <img alt='' className='card-img-profile' src='https://unsplash.it/340/160?image=354'/>
    <input className='card-title' placeholder="Name" onChange={(event) => {
      setName(event.target.value);
    }}/>
    <textarea type="E-mail" className='card-title' placeholder="Type your email lik with registered google id" onChange={(event) => {
      setEmail(event.target.value);}}/>
    <div className="card-links">
      <button type="submit" onClick={createProfile}>CREATE</button>
    </div>
  </div>
</div>

  );
}

export default CreateProfile;