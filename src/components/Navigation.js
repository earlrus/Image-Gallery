import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Navigation.css'

// import styled from 'styled-components'

function Navigation() {
  return (
    // <Conatiner>

    // <ul>
    //   <li><Link to={'/'}>Home</Link></li>
    //   <li> <Link to={'/add-to-gallery'}>Add to gallery</Link></li>
    // </ul>
     // </Conatiner>


     <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link> */}
            <NavLink className='style_nav' to={'/'}>Home</NavLink>
            <NavLink className='style_nav' to={'/gallery'}>Gallery</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// const Conatiner=styled.div`

// background-color: black;


// ul{

//   text-decoration: none;
//   margin-left:60rem;
//   display:flex;
//   li{
    
    
//     margin: 0 1rem;
//     padding:2rem 0rem;
    
    
//     a{
// text-decoration: none;
// color: white;
// cursor: pointer;
//     }
// a:hover{
//   background-color: #fff;
//   color:black;
// }


//   }
// }

// `;

export default Navigation
