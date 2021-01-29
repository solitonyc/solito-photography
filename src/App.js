import React, {Component} from 'react';
import Navigation from './components/Navigation';
import Main from './sections/Main';
import Photos from './sections/Photos';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <Photos />
        <About />
        <Contact />
        <Footer />
      
      </div>
    );
  }
}

export default App;
