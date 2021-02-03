import './about.css';
import React, { Component } from 'react';
import mainBgImage from './images-sections/bg-03.jpg';


export default class About extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className='about_section' id='about'>
                <div style={style} className='main_section_background'>
                    <div className='about_content_container'>
                        <div className='about_headline'>ABOUT ME</div>
                        <div className="about_copy">
                            <p>An urban photographer who gets enthralled by the overwhelming power of the skylines 
                            that surround him. A former Manhattan nightclub promoter who continues to see
                            energy, rhythm and inspiration within the beauty that surrounds him in the urban 
                            lanscape of where he lives. </p>
                          
                            <p>Cityscapes serve as grand symbols of what humans are 
                            capable of achieving and building 
                            with their own hands. And within these constructs of grandeur lie humanity's embodiment 
                            in colorful, cultural displays of art, food, dance, fashion and communication. No 
                            matter where you are, I hope you find inspiration in these images of urban aesthetica.</p>
                        </div>
                    </div>   
                </div>             
            </div>
        )
    }
}
