import React, { Component, Components} from 'react';
import { Form } from 'reactstrap';
import Input from 'reactstrap';
import { TextareaHTMLAttributes } from 'react';
import Button from 'reactstrap';
import Placeholder from 'reactstrap';

export default function Contact(){
    return (
        <div className='container-2'>
          <div className='left'>
              <h1>Contact me</h1>
              <p>Hi there, contact me to ask me about anything you have in mind.</p>

              <form>
                  <div className='float'>
                      <div className='float_1'>
                          <label>First Name</label> <br/>
                          <input id= 'first_name' type='text' placeholder='Enter your first name'/><br/><br/>
                      </div>
                      <div className='float_2'>
                          <label>Last Name</label> <br/>
                          <input id= 'last_name' type='text' placeholder='Enter your first name'/><br/><br/>
                      </div>
                      
                  </div>
                      <label>Email</label> <br/>
                      <input id= 'email' type='email' placeholder='yourname@gmail.com'/><br/><br/>
                      <label>Message</label> <br/>
                      <textarea id='message' placeholder="Send me a message and I'll reply you as soon as possible..."/>
                      <div className='float_3'>
                          <input type='checkbox' required/>
                          <label className='checkbox'>You agree to providing your data to Kharey who may contact you.</label>
                      </div>
                      <button id='btn__submit'>Send Message</button>

                 
              </form>

          </div>
          
        </div>
      )
    }
        