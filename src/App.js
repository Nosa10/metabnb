import React, { Component } from 'react';
import header from 'react'
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Route, Routes } from "react-router-dom";
import Contact from './components/contact';
import Footer from './components/footer'
import Main from './components/main';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

    
  }
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;







{/* <header className="App-header"> */}
          // <img src={logo} className="App-logo" alt="logo" />
          // <h1 className="App-title">Welcome to React</h1>
        // </header>
        // <p className="App-intro">
          // To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
