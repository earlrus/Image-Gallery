import React,{useState} from 'react'

import axios from 'axios';
import {addGallery} from '../store/features/gallerySlice'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'


function Display(props) {



    const dispatch=useDispatch();

const imageHandler=async()=>{
    const res=await axios.get(`https://api.unsplash.com/photos/?client_id=p12LddmAh8GtuiTuclI-GUjymFqrIxr193H__iwD8Mk`)
 
 
const result=res.data.find((item)=>{
    return item.id===props.id;
})

console.log(result);

setTimeout(()=>{
    dispatch(addGallery(result))
},1000)



}



  return (
   
    <Template>
   
    
        <img src={props.image} alt="random"/>
        <h3>{props.title}</h3>
        <button onClick={imageHandler}>Add to Gallery</button>
  
    </Template>
   
  );
}



const Template=styled.div`
background-color:#fff;
box-sizing: border-box;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

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
    padding: 1rem 1rem;
border-radius: 5px;
font-size: 0.8rem;
    margin: 0.8rem 0.5rem;

}

button:hover{
    background-color: black;
    color: #fff;
}

`;

export default Display
