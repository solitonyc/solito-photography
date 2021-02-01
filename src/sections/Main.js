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
                        <div className="main_headline">SOLITO PHOTOGRAPHY </div>
                        <div className='main_headline_2'>Site is currently Under Construction.</div>
                        <div className='main_copy'>You can still buy photos alone or framed as wall decor:</div>
                        <Link to={{ pathname: 'studio.solitophotography.com' }} className='main_button' target="_blank" >SEE STUDIO STORE</Link>
                    </div>
                </div>
            </div>
        )
    }
}
