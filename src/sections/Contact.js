import './contact.css';
import React, { Component } from 'react';


export default class Contact extends Component {
    render() {
        return (
            <div className='contact_section' id='contact'>
                <div className='contact_content_container'>
                    <div className='contact_headline'>Hire Me</div>
                    <div className='contact_headline2'>Contact Me For the Following:</div>
                    <div className='contact_copy'>
                        <ul>
                            <li>Social Media Content</li>
                            <li>Unique Website Content</li>
                            <li>Commercial &amp; Business Use</li>
                            <li>Business Head &amp; Body Shots</li>
                            <li>Real Estate</li>
                            <li>Products</li>
                            <li>Events</li>
                            <li>Specific Contract Work</li>
                        </ul>
                        <p>Phone: (646) 403.7500<br />
                        Email: solito@xegomedia.com</p>
                    </div>
                </div>                    
            </div>
        )
    }
}
