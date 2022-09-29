import React,{useState} from 'react'
import { useRef } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

function Search(props) {



const search=useRef();

const navigate=useNavigate();

const clickHandler=(e)=>{
    
    e.preventDefault();
    const searchVal=search.current.value;
   navigate('/searched/'+searchVal)
    
}



  return (
  
  <SearchContainer>
 <input type="text" name="image" ref={search}/>
    <button onClick={clickHandler}>Search</button>

  </SearchContainer>
   
  
  )
}

const SearchContainer=styled.form`

text-align: center;
padding: 5px 0px;
margin: 2rem 0rem;

button{
    margin-left: 0.5rem;
}

`;

export default Search
