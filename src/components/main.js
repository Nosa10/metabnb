import React, { Component, Components} from 'react';
import section from 'react';
import header from 'react';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='container'>
                <section id='profile'>
                    <header>
                       <div className='relative'>
                           <img src='/assets/images/profile.jpg' alt='profile' id='profile_img'/>
                           <img src="assets/images/share_button_desktop.png" alt="share button" className='button_desktop'/>
                           <img src="assets/images/share_button_mobile.png" alt="share_button" className='button_mobile'/>
                           <div id='camera'>
                              <img src='assets/images/camera_icon.png' alt='camera icon' id='icon'/>
                           </div>
                        </div>
                
                        <br/>
                        <h1 id='slack'>Edison Nosakhare</h1>
                    </header>
                </section>
                <section id='links'>
                    <div id='main'>
                    <div className='twitter'>
                        <a href='https://twitter.com/edisonnosakhare' id='twitter' target='_blank' >Twitter Link</a>
                    </div>
                    <div className='twitter'>
                        <a href='https://training.zuri.team/' id='btn_zuri' target='_blank' >Zuri Team</a>
                    </div>
                    <div className='twitter'>
                        <a href='https://books.zuri.team' id='books' target='_blank' >Zuri books</a>
                    </div>
                    <div className='twitter'>
                        <a href='https://books.zuri.team/python-for-beginners?ref_id = Edison Nosakhare' target='_blank' id='book_python' >Python Books</a>
                    </div>
                    <div className='twitter'>
                        <a href='https://background.zuri.team' target='_blank' id='pitch' >Background Checkers for coders</a>
                    </div>
                    <div className='twitter'>
                        <a href='https://books.zuri.team/design-rules' target='_blank' id='book_design' >Design Books</a>
                    </div>
                    </div>
                    
                    
                </section>
                <section id='social_links'>
                    < a href='https://hng9.slack.com' target='_blank' id='left'>
                    <img src='assets/images/slack.png' target='_blank' alt='slack'/>
                    </a>
                    <a href='https://www.github.com/Nosa10'>
                    <img src='assets/images/github.png' alt='github'/>
                    </a><br/>
                    
                </section><br/>
                <section id='footer'>
                    <footer>
                        <div><img src='\assets\images\zuri_logo (1).png' alt='zuri logo' id='logo'/></div>
                        
                        <div><p id='message'>HNG Internship 9 Frontend Task</p></div>
                        <div><img src='\assets\images\I4G.png' alt='14G' className='logg'/></div>
                    </footer>
                </section>
                
                
            </div>
        )
    }
}

export default Main