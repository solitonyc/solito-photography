import React, { Component } from 'react';
import mainBgImage from './images-sections/solitophotography.jpg';
import './contact.css';

export default class Contact extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className="contact_page_section" id="contact">
                <div style={style} className='contact_section_background'>
                    <div className="contact_content_container">  
                        <div className="contact_headline">Make Contact</div>
                        <div className="contact_paragraph_01">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className='contact_button_space'><button>Contact Me</button></div>
            
                    </div>   
                </div>             
            </div>
        )
    }
}