import React, { Component, Components} from 'react';
import section from 'react'
import footer from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscrition-heading'>
                        Join our vacation deals
                    </p>
                </section>
            </div>
        )
    }
}

export default Footer