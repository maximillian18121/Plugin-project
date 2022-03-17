import React,{useState,useEffect} from 'react'
import {getDocs,collection,updateDoc,doc, increment,query, OrderByDirection, orderBy} from "firebase/firestore";
import {db} from "../Firebase-config";
import "./Profile.css";
import {auth} from "../Firebase-config";
import {LikeTwoTone,DislikeTwoTone} from "@ant-design/icons";
import ReactPaginate from "react-paginate";

function Home() {

  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db,"Clients");

  const [pageNumber, setPageNumber] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(2);


  useEffect(()=>{
    const q = query(postsCollectionRef,orderBy("Likes"));
    const getposts = async() =>{
      const data =  await getDocs(q);
      setPostLists(data.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      })));
    };
    getposts();
    console.log(postLists);
  },[postLists.Likes]);

    const userPerPage = 2;
    const pagesVisited = pageNumber*userPerPage;

    const displayUsers = postLists.slice(pagesVisited,pagesVisited+userPerPage).map((post)=>{
      return( <div className='card card-profile text-center'>
      <img alt='' className='card-img-top' src='https://unsplash.it/340/160?image=354'/>
      <div className='card-block'>
        <img alt='' className='card-img-profile' src='https://unsplash.it/340/160?image=354'/>
        <div className='card-title'>{post.  Name}</div>
        <div className='card-title'>{post.Status}</div>
        <div className="card-links">
          <div type="submit" onClick={()=>{
            LikeFunction(post.id)
          }}><LikeTwoTone/></div>
          <div type="submit" onClick={()=>{
            DisLikeFunction(post.id)
          }}><DislikeTwoTone/></div>
           <div> {-post.Likes}</div>
        </div>
      </div>
    </div>)
    })




  
    const LikeFunction = async(id) =>{
    const postDoc = doc(db,"Clients",id);
    await updateDoc(postDoc,{
      Likes : increment(-1)
    })
    window.location.reload();
      }
      const DisLikeFunction = async(id) =>{
        const postDoc = doc(db,"Clients",id);
        await updateDoc(postDoc,{
          Likes : increment(1)
        })
        window.location.reload();
          }
   const pageCount = Math.ceil(postLists.length/userPerPage);

   const changePage = ({selected}) =>{
     setPageNumber(selected);
   }
         
  return (
    <div className='Homepage'>
      {displayUsers}
      <ReactPaginate
       previousLabel = {"Previous"}
       nextLabel = {"Next"}
       pageCount = {pageCount}
       onPageChange = {changePage}
       containerClassName = {"paginationBtn"}
       previousLinkClassName = {"previousBtn"}
       nextLinkClassName = {"nextBtn"}
       disabledClassName ={"disableBtn"}
       activeClassName ={"activeBtn"}

      />
    </div>
  )
}

export default Home