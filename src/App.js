import React, {Component} from 'react';
import Navigation from './nav-bar/Navigation';
import Main from './sections/Main';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Photogallery from './sections/Photogallery';


class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <Photogallery />
        <About />
        <Contact />        
        <Footer />
      </div>
    );
  }
}

export default App;

