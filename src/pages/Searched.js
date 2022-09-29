import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {useParams} from 'react-router-dom'
import styled from 'styled-components'


function Searched() {

    const params=useParams();

    const [search,setSearch]=useState([]);

    const searchHandler=async (name)=>{
const res=await axios.get(`https://api.unsplash.com/search/users/?query=${name}&client_id=p12LddmAh8GtuiTuclI-GUjymFqrIxr193H__iwD8Mk`)
setSearch(res.data.results)
console.log(res.data.results);
console.log(res.data.results[0].photos.length===0);

    }

    console.log(search);


    useEffect(()=>{
searchHandler(params.searchTerm)
console.log(params.searchTerm);
    },[params.searchTerm])

 
  return (
  
    <Conatiner>

  {search.map((searchItem)=>{

return (
    <Template key={searchItem.id}
    id={searchItem.id}>
{ searchItem.photos.length!==0 && <img src={searchItem.photos[0].urls.regular} alt={searchItem.name} />}
{ searchItem.photos.length===0 && <h2>Result Not Found</h2>}
<h3>{searchItem.name}</h3>
<button>Add To Gallery</button>
    </Template>
)

  })}
       </Conatiner>  
  )
}


const Conatiner=styled.div`

display:grid;
gap:2rem;
grid-template-columns:repeat(3,1fr);
width: 100%;
text-align: center;


`;

const Template=styled.div`

box-sizing: border-box;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
background-color: #fff;
img{
    width:20rem;
    height: 15rem;
    border-radius: 5px;
    transition: all .2s ease-out;
    margin: 1rem 0rem;
}

img:hover{
    width:22rem;
    height:18rem;
    cursor: pointer;
}

button{
 
}

`;

export default Searched
