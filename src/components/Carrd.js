import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function Carrd() {
  return (
    <div className='cardFlex'>
      <Container>
        <Row className='cardFlex'>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Frame 143.png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4049 (1).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4050 (1).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4051 (1).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4048 (2).png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4049.png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4050.png'/></Col>
          <Col sm={12} md={6} lg={3}><img src='assets\images\Group 4051.png'/></Col>
        </Row>
      </Container>  
    </div>
  )
}

export default Carrd
