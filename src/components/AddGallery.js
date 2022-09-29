
import React, { useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import styled from 'styled-components'
import {removeGallery} from '../store/features/gallerySlice'




function AddGallery() {
const gallery=useSelector(store=>store.gallery);
const dispatch=useDispatch();

useEffect(()=>{
  console.log(gallery.items);
},[gallery.items])

  return (
    <Contain>
      {gallery.items.map((item)=>{
        return (
         <Template key={item.id}>
         <img src={item.urls.regular} alt={item.user.first_name} />
        <h3> {item.user.first_name}</h3>
        <button onClick={()=>dispatch(removeGallery(item.id))}>Remove</button>
         </Template>

        );
      })}
    </Contain>
  )
}

const Contain=styled.div`

display:grid;
gap:2rem;
grid-template-columns:repeat(3,1fr);
width: 100%;
text-align: center;


`;

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

export default AddGallery
