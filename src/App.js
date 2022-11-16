import React, { Component } from 'react';
import header from 'react'
import { Routes, Route,Router } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/footer';
import ModalExample from './components/Modal';
import PlaceToStay from './components/PlaceToStay';
import Main from './components/main';
import Navbarr from './components/navbar';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return(
    <>
      <Navbarr/>
      
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/PlaceToStay' element={<PlaceToStay/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default App;







{/* <header className="App-header"> */}
          // <img src={logo} className="App-logo" alt="logo" />
          // <h1 className="App-title">Welcome to React</h1>
        // </header>
        // <p className="App-intro">
          // To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
