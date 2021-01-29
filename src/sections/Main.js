import React, { Component } from 'react';
import mainBgImage from './images-sections/solitophotography.jpg';
import './main.css';

export default class Main extends Component {
    render() {
        let style = {
            backgroundImage: `url(${mainBgImage})`
        }
        return (
            <div className="App">
                <h1>Welcome to Solito's Photography!</h1>
                <h2>This site is still in development.</h2>
                <h3>But you can still...</h3>
                <a target="_blank" href="https://studio.solitophotography.com">Buy Solito's Photography and Wall Art here.</a>
          </div>
        )
    }
}
