import React, {Component} from 'react';
import Navigation from './nav-bar/Navigation';
import Main from './sections/Main';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <About />
        <Contact />        
        <Footer />
      </div>
    );
  }
}

export default App;

