import './main.css';
import React, { Component } from 'react';
import mainBgImage from './images-sections/bg-01.jpg';
import {Link} from 'react-router-dom';

export default class Main extends Component {
     render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='main_section' id='main'>
                <div style={style} className='main_section_background'>
                    <div className='main_section_content_container'>
                        <div className="main_headline">Welcome to Solito's Photography Website</div>
                        <div className='main_headline_2'>This site is currently Under Construction.</div>
                        <Link to={{ pathname: 'studio.solitophotography.com' }} className='main_button' target="_blank" >BUY PHOTOS &amp; WALL ART</Link>
                    </div>
                </div>
            </div>
        )
    }
}
