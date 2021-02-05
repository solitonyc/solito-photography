import './main.css';
import './common-styles.css';
import React, { Component } from 'react';
import mainBgImage from './images-sections/bg-01.jpg';
import {Link} from 'react-router-dom';
import bigLogo from './images-sections/sr-logo.png';

export default class Main extends Component {
     render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='main_section' id='main'>
                <div style={style} className='main_section_background'>
                    <div className='main_content_container'>
                        <img className='big_logo' alt='' src={bigLogo} />                                            
                        <div className='main_copy'>See store to shop photos alone or as framed, wall art:</div>
                        <Link to={{ pathname: 'https://studio.solitophotography.com' }} rel='noreferrer' className='common_button' target="_blank" >Buy Photography</Link>
                    </div>
                </div>
            </div>
        )
    }
}
