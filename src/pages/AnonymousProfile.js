import React from "react";
import './Profile.css';
import {useState,useEffect} from "react";
import {addDoc,collection, where,query,getDocs} from "firebase/firestore";
import {Button} from "antd";
import {db,auth} from "../Firebase-config";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import CreateProfile from "./CreateProfile";

function AnonymousProfile({isAuth}) {

  const [Name, setName] = useState("");
  const [Status, setStatus] = useState("");
  const [Likes,setLikes] = useState(0);
  let navigate = useNavigate();

  const profileCollectionRefs = collection(db,"Clients");
  const [data, setData] = useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      const res = await axios.get('https://randomuser.me/api/')
      .then((response)=>{
        setData(response.data.results);
        console.log(response.data.results);
    })};
    fetchData();
  },[]);
  
  let userName = "";
  let imgsrc = "";
  console.log(data);

 
 
  /*const incrementLikes =async () =>{
    setLikes(Likes+1);
    };
  */
  /*const createProfile = async() =>{

    if(isAuth && (auth.currentUser.displayName) != null){
      await addDoc(profileCollectionRefs,{
        Name:userName,Status,Likes
      });
      navigate("/");
    }
  }*/



  return (
    <div className='card card-profile text-center'>
      {data.map((info)=>{  userName = `${info.name.first} ${info.name.last}` ;
      const createProfile = async() =>{

        
          await addDoc(profileCollectionRefs,{
            Name:userName,Status,Likes
          });
          navigate("/");
          console.log("hello");
      
      };
       return (
        <>
         <img alt='' className='card-img-top' src='https://unsplash.it/340/160?image=354'/>
  <div className='card-block'>
    <img alt='' className='card-img-profile' src={info.picture.large}/>
    <div className='card-title'>{`${info.name.first} ${info.name.last}` }</div> 
    <textarea className='card-title' placeholder="Update your Status" onChange={(event) => {
      setStatus(event.target.value);}}/>
    <div className="card-links">
      <Button type="primary" onClick={createProfile}>POST</Button>
    </div>
  </div>
  </>)})}
</div>

  );
}

export default AnonymousProfile;
