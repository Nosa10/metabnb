import React, { Component, Components} from 'react';
import section from 'react';
import header from 'react';
import Carrd from './Carrd';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div>
                    <Container>
                        <div className='home'>
                        <Row className='one'>
                            <Col sm={12} md={6} lg={5}>
                            <h2>Rent a <span>Place</span> away from  <span>Home</span> in the  <span>Metaverse</span></h2>
                            <br/>
                             <p>we provide you access to luxury and affordable houses in the metaverse, 
                                 get a chance to turn your imagination to reality at your comfort zone</p>
                             <br/>
                             <div className='input-container'>
                             <input placeholder='Search for Location' />
                             <Link className='search'>Search</Link>
                             </div>
                             
                            </Col>
                            <Col sm={12} md={6} lg={5}>
                                <img src='assets\images\Group 4028.png' className='img_'/>
                            </Col>
                        </Row>
                        </div>
                       
                        <Row className='flex1'>
                            <div className='contents'>
                            <Col><img src='assets\images\Group 59537.png' className='widt'/></Col>
                            <Col><img src='assets\images\Group 4040.png' className='widt'/></Col>
                            <Col>  <img src='assets\images\Frame 4041.png' className='widt'/></Col>
                            </div>
                          
                        </Row>
                        <div className='card'>
                            <div className='contents'>
                                <h2>Inspiration for your next adventure</h2>
                                <Carrd/>
                            </div>
                            
                        </div>
                        <Row className='nfts hidden-xs hidden-sm'>
                        <h3>Metabnb NFTs</h3>
                             <p>Discover our NFT gift cards collection. Loyal customers gets 
                                 amazing gift cards which are traded as NFTs.
                                 These NFTs gives our cutomer access to loads of our exclusive services.
                             </p>
                             <input type='button' value='Learn More'/>
                                <div className='right'>
                                     <img src='assets\images\Frame 59546.png'/>
                                </div>
                        </Row>
                        <Row className='nfts2' sm={12}>
                            <Col sm={12}>
                                <h3>Metabnb NFTS</h3>
                                <p>Discover our NFT gift cards collection. Loyal customers gets 
                                 amazing gift cards which are traded as NFTs.
                                 These NFTs gives our cutomer access to loads of our exclusive services.
                             </p>
                             <input type='button' value='Learn More'/>
                            </Col>
                            <Col>
                                <img src='assets\images\Frame 59546.png'/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            // <div id='container'>
            //     <Container>
            //     <Row>
            //         <Col sm={12} lg={7}> 
            //         <div className='sideBar1'>
            //                 <h2>Rent a <span>Place</span> away from  <span>Home</span> in the  <span>Metaverse</span></h2>
            //                 <br/>
            //                 <p>we provide you access to luxury and affordable houses in the metaverse, 
            //                     get a chance to turn your imagination to reality at your comfort zone</p>
            //                     <br/>
            //                     <input placeholder='Search for Location' />
            //                     <Link className='search'>Search</Link>
            //             </div>
            //             </Col>
            //         <Col sm={12} lg={5}>
            //             <div className='sideBar2'>
            //                 <img src='assets\images\Group 4028.png'/>
                            
            //             </div>
            //             </Col>
            //     </Row>
            //     </Container>
            //          <aside>
                       
                        
            //         </aside>
                    
            //         <div className='flex1'>
            //             <Container>
            //                 <Row>
            //                     <Col>
            //                         <div>
            //                             <img src='assets\images\Group 59537.png' className='widt'/>
            //                         </div>
            //                     </Col>
            //                     <Col >
            //                         <div>
            //                             <img src='assets\images\Group 4040.png' className='widt'/>
            //                          </div>
            //                     </Col>
            //                     <Col >
            //                          <div>
            //                             <img src='assets\images\Frame 4041.png' className='widt'/>
            //                          </div>
            //                     </Col>
            //                 </Row>
            //             </Container>
            //         </div> 
            //         <br/><br/> 
            //         <div className='card'>
            //             <h2>Inspiration for your next adventure</h2>
            //             <Carrd/>
            //         </div>
            //         <div className='nfts'>
            //             <div className='left'>
            //                 <h3>Metabnb NFTs</h3>
            //                 <p>Discover our NFT gift cards collection. Loyal customers gets 
            //                     amazing gift cards which are traded as NFTs.
            //                     These NFTs gives our cutomer access to loads of our exclusive services.
            //                 </p>
            //                 <input type='button' value='Learn More'/>
            //             </div>
            //             <div className='right'>
            //                 <img src='assets\images\Frame 59546.png'/>
            //             </div>
            //         </div>
                    
                   
            // </div> 
           
        )
    }
}

export default Main