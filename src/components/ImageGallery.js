import styled from 'styled-components'
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Display from './Display';


//Added styled components



function ImageGallery() {

    const [gallery,setGallery]=useState([]);

 
 

const ImageLoader=async ()=>{
    const res=await axios.get(`https://api.unsplash.com/photos/?client_id=p12LddmAh8GtuiTuclI-GUjymFqrIxr193H__iwD8Mk`)
   
    setGallery(res.data)
}

function addHandler(item){
    console.log(item);
}


useEffect(()=>{
    ImageLoader();
},[])



  
   

return (
<Contain>
{gallery.map((item,index)=>{
    return (
       
        
        <Display 
        key={index}
        id={item.id}
image={item.urls.regular}

title={item.user.first_name}
onAdd={addHandler}
       /> 
    )
})}
</Contain>
);
}

const Contain=styled.div`

display:grid;
gap:2rem;
grid-template-columns:repeat(3,1fr);
width: 100%;
text-align: center;


`;


export default ImageGallery
