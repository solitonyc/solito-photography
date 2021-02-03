import React, { Component } from 'react';
import {Link, animateScroll as scroll } from 'react-scroll';
import logo from './images-nav-bar/sp-logo.png';
import './navigation.css';

export default class Navigation extends Component {
    state = {};
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render() {
        return (
            <div className='nav-bar'>
                <img src={logo} 
                    alt="Logo" 
                    className='nav_logo'
                    onClick={this.scrollToTop}
                    />
                <Link
                    className='nav-links'
                    activeClass='active'
                    to='main'
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    >MAIN</Link>

                <Link
                    className='nav-links'
                    activeClass='active'
                    to='photogallery'
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >PHOTO GALLERY</Link>

                <Link
                    className='nav-links'
                    activeClass='active'
                    to='buy'
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >BUY</Link>

                <Link
                    className='nav-links'
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >ABOUT</Link>
                    
                <Link
                    className='nav-links'
                    activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-38}
                    duration={500}
                    >CONTACT</Link>
            </div>
        )
    }
}
