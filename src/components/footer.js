import React, { Component, Components} from 'react';
import section from 'react'
import footer from 'react';
import { Container,Row,Col } from "react-bootstrap";

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <footer>
                <div className='footer'>
                    <Row>
                        <Col sm={12} md={6} lg={3} className='bottom'>
                            <div><img src='assets\images\Group (2).png'/></div>
                            <br/><br/><br/>
                            <div><img src='assets\images\facebook-263-721950.png'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <img src='assets\images\instagram-216-721958.png' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src='assets\images\twitter-241-721979.png'/>
                            </div> 
                            <br/><br/>
                            <div>
                                <img src='assets\images\Group 1355.png'/>    
                            </div>                       
                        </Col>
                        <Col sm={12} md={6} lg={3} className='bottom'><img src='assets\images\Group 4043.png ' alt='hi'/></Col>
                        <Col sm={12} md={6} lg={3} className='bottom'><img src='assets\images\Group 4046.png'/></Col>
                        <Col sm={12} md={6} lg={3} className='bottom'><img src='assets\images\Group 4047.png'/></Col>

                    </Row>
                </div>
            </footer>
        )
    }
}

export default Footer