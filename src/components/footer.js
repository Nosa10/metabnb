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
                <Container className='footer'>
                    <Row>
                        <img src='C:\Users\User\Desktop\zuri\metabnb\public\assets\images\Group (1).png'/>
                        <br/><br/><br/>
                        
                    </Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Container>
            </footer>
        )
    }
}

export default Footer