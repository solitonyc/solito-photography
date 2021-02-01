import React, { Component } from 'react';
import './about.css';
import mainBgImage from './images-sections/bg-03.jpg';

export default class About extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='about_section' id='about'>
                <div style={style} className='main_section_background'>
                    <div className='about_section_content_container'>
                        <div className='about_headline'>ABOUT ME <br />COMING SOON</div>
                    </div>   
                </div>             
            </div>
        )
    }
}
