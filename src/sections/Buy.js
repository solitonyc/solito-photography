import React, { Component } from 'react';
import './buy.css';
import {Link} from 'react-router-dom';

export default class Buy extends Component {
    render() {
        return (
            <div className='buy_section' id='buy'>
                <div className='buy_content_container'>
                    <div className='buy_headline'>Browse My Photography Store</div>
                    <div className='buy_copy'>Build your collection of urban photography, with cities such as Manhattan. You are provided the option of buying high-resolution prints alone; or as customized wall art. For wall art, select your size, print medium and framing that best suits your decor and preferences.</div>
                    <div className='buy_copy'>Click this button to see the online store:</div>
                    <Link to={{ pathname: 'https://studio.solitophotography.com' }} rel='noreferrer' className='common_button' target="_blank" >Shop Photography</Link>
                </div>
                    
            </div>
        )
    }
}
