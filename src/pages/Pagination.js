import React from 'react'

function Pagination({postsPerPage,totalPosts,paginate}) {
    const pageNumber = [];
    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i);
    }
  return (
   <nav>
       <ul className='pagination ml-5'>
           {pageNumber.map(number=>(
               <li key={number} className = "page-item ml-1">
                   <a onClick={()=>paginate(number)} href='!#'className='page-link' >
                       {number}
                   </a>
               </li>
           ))}

       </ul>
   </nav>
  )
}

export default Pagination