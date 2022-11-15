import React from 'react'
import {Navbar,Nav,NavLink,NavItem,Col,Container,Row} from'react-bootstrap'

function PlaceToStay() {
  return (
    <div>
        <Nav className="me-auto place">
            <Nav.Link href="#" className='placeLink'>Restaurant</Nav.Link>
            <Nav.Link href="#" className='placeLink'>Cottage</Nav.Link>
            <Nav.Link href="#" className='placeLink'>Castle</Nav.Link>
            <Nav.Link href="#" className='placeLink'>Fantastic City</Nav.Link>
            <Nav.Link href="#" className='placeLink'>Beach</Nav.Link>
            <Nav.Link href="#" className='placeLink'>Cartins</Nav.Link>
            <Nav.Link href="#" className='placeLink'>Off-grid</Nav.Link>
            <Nav.Link href="#" className='placeLink'>Farm</Nav.Link>
            <img src='assets\images\Frame 13.png' className='placeImage'/>
          </Nav>

      <Container>
        <Row className='cardFlex'>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4048 (2).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4049.png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4050.png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4051.png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Frame 143.png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4049 (1).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4050 (1).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4051 (1).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4051 (2).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4048 (5).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4048 (3).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4049 (3).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4050 (3).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4050 (2).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4049 (4).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4051 (3).png'/></Col>
        </Row>
      </Container>  
    </div>
  )
}

export default PlaceToStay
