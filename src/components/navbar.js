import { useState } from "react";
import React from 'react';
import { Component, Components} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import ModalExample from "./Modal";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";
  

// function Navbarr() {

//   return (
//     // <div className="NavBar">
//     //     <div className="navbar-container">
//     //         <Link to='/' className="navbar-logo">
//     //             <img src='\assets\images\home.jpg'/><img src='\assets\images\Vector.jpg' />
//     //         </Link>
//     //     </div>
//     //     <header>
//         {/* <Nav className="mr-auto" navbar>
//             <NavItem className="nav">
//                 <NavLink href="#">Home</NavLink>
//             </NavItem>
//             <NavItem className="nav">
//                 <NavLink href="#">Place to Stay</NavLink>
//             </NavItem>
//             <NavItem className="nav">
//                 <NavLink href="#">NFTs</NavLink>
//             </NavItem>
//             <NavItem className="nav">
//                 <NavLink href="#">Community</NavLink>
//             </NavItem>
//         </Nav> */}
//         // {/* <div className="container">

//             // <nav>
//             //     <ul>
//             //         <li><a href="/">Home</a></li>
//             //         <li><a href="/PlaceToStay">Place to Stay</a></li>
//             //         <li><a href="#">NFTs</a></li>
//             //         <li><a href="#">Community</a></li>
                    
//             //     </ul>
//                 // {/* <Button className="btn openModalBtn" href='#'>Connect Wallet</Button> */}
              
//             // </nav>
            
//         // </div>
//         // {/* {openModal&&<Mudal closeModal={setOpenModal}/>} */}
//         // </header> */}



//         <ModalExample/>
        
//     // </div>
//   )
// }

// export default Navbarr
function Navbarr() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
          <img src='\assets\images\home.jpg'className="home_image"/><img src='\assets\images\Vector.jpg' className="meta_bnb" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="header li">Home</Nav.Link>
              <Nav.Link href="/PlaceToStay" className="header li">Place To Stay</Nav.Link>
              <Nav.Link href="#" className="header li">NFTs</Nav.Link>
              <Nav.Link href="#" className="header li">Community</Nav.Link>
              <Nav.Link>
                    <Button variant='white' className='button' onClick={() => handleShow()}>
                        Connect Wallet
                   </Button>
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>

        <ModalExample show={show} handleClose={handleClose} handleShow={handleShow}/>
      </Navbar>

    );
  }
  
  export default Navbarr;
