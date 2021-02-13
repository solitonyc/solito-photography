import './contact.css';
import React, { Component } from 'react';


export default class Contact extends Component {
    render() {
        return (
            <div className='contact_section' id='contact'>
                <div className='contact_content_container'>
                    <div className='contact_headline'>HIRE ME</div>
                    <div className='contact_headline_2'>Contact Me For the Following:</div>
                    <div className='contact_copy'>
                        <ul>
                            <li>Social Media Content</li>
                            <li>Website Content</li>
                            <li>Business Presentations</li>
                            <li>Business Portraits</li>
                            <li>Real Estate</li>
                            <li>Products</li>
                            <li>Events Coverage</li>
                            <li>Special Contract Work</li>
                        </ul>
                        <div className='contact_copy'><span className='bold_this'>Phone:</span><br />(646) 403.7500</div>
                        <div className='contact_copy'><span className='bold_this'>Email:</span><br />solito@xegomedia.com</div>
                    </div>
                </div>                    
            </div>
        )
    }
}
