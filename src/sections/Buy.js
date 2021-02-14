import React, { Component } from 'react';
import './buy.css';
import './common-styles.css';
import {Link} from 'react-router-dom';

export default class Buy extends Component {
    render() {
        return (
            <div className='buy_section' id='buy'>
                <div className='buy_content_container'>
                    <div className='buy_headline'>Buy My Photography</div>
                    <div className='buy_copy'>Build your collection of urban photography. Buy high-resolution prints alone or as custom, framed wall art.</div>
                    <div className='buy_copy'>Select your size, print medium material and framing style that best suits your decor and preferences.</div>
                    <div className='buy_button_copy'>Visit my online store:</div>
                    <Link to={{ pathname: 'https://studio.solitophotography.com' }} rel='noreferrer' className='common_button' target="_blank" >Buy Photography</Link>
                </div>
                    
            </div>
        )
    }
}
