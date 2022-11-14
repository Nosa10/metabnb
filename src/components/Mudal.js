import React from 'react'
import { Button } from 'react-bootstrap';
import "./Mudal.css"

function Mudal({closeModal}) {
  return (
    <div className='center'>
       <div className="title">
            <h3>Connect Wallet</h3>
            <Button onClick={() => closeModal(false)}>X</Button>
        </div>
        <hr></hr>
        <p>Choose your preferred Wallet</p>
        <Button className="input">
            <img src="assets\images\image 66.png" alt=""/>
            <p>MetaMask</p>
            <img src="assets\images\Vector (1).png" alt=""/>
        </Button>
        <Button className="input input2">
            <img src="assets\images\image 69.png" alt=""/>
            <p>Wallet Connect</p>
            <img src="assets\images\Vector (1).png" alt=""/>
        </Button>
    </div>
  )
}

export default Mudal
