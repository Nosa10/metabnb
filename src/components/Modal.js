import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Mudal.css"

function ModalExample(props) {
  const {show, handleClose, handleShow} = props

  return (
    <>
      
      {/* <Link className="button" onClick={handleShow}>Connect Wallet
                </Link> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose your preferred Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Choose your preferred Wallet</p>
        <Button className="input">
            <img src="assets\images\image 66.png" alt=""/>
            <p>MetaMask</p>
            <img src="assets\images\Vector (1).png" alt=""/>
        </Button><br/>
        <Button className="input input2">
            <img src="assets\images\image 69.png" alt=""/>
            <p>Wallet Connect</p>
            <img src="assets\images\Vector (1).png" alt=""/>
        </Button>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalExample;