import { useState } from "react";
import React from 'react';
import { Component, Components} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Button
} from 'reactstrap';
import Mudal from "./Mudal";
  

function Navbarr() {

    const [openModal, setOpenModal] = useState(false)
  return (
    <div className="NavBar">
        <div className="navbar-container">
            <Link to='/' className="navbar-logo">
                <img src='\assets\images\home.jpg'/><img src='\assets\images\Vector.jpg' />
            </Link>
        </div>
        <header>
        {/* <Nav className="mr-auto" navbar>
            <NavItem className="nav">
                <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className="nav">
                <NavLink href="#">Place to Stay</NavLink>
            </NavItem>
            <NavItem className="nav">
                <NavLink href="#">NFTs</NavLink>
            </NavItem>
            <NavItem className="nav">
                <NavLink href="#">Community</NavLink>
            </NavItem>
        </Nav> */}
        <div className="container">

            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/PlaceToStay">Place to Stay</a></li>
                    <li><a href="#">NFTs</a></li>
                    <li><a href="#">Community</a></li>
                    
                </ul>
                {/* <Button className="btn openModalBtn" href='#'>Connect Wallet</Button> */}
                <Link className="button openModalBtn" onClick={()=> {
                    setOpenModal(true)
                }}>Connect Wallet
                </Link>
            </nav>
            
        </div>
        {openModal&&<Mudal closeModal={setOpenModal}/>}
        </header>
        
    </div>
  )
}

export default Navbarr
