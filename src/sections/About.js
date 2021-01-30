import React, { Component } from 'react';
import mainBgImage from './images-sections/solitophotography.jpg';
import './about.css';

export default class About extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className="about_page_section" id="about">
                <div style={style} className='about_section_background'>
                    <div className="about_content_container">  
                        <div className="about_headline">About Sharon</div>
                        <div className="about_paragraph_01">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
            
                    </div>   
                </div>             
            </div>
        )
    }
}