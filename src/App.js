import React, {Component} from 'react';
import Main from './sections/Main';
import About from './sections/About';
import Contact from './sections/Contact';
import Navigation from './nav-bar/Navigation';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <About />
        <Contact />        
      
      </div>
    );
  }

}

export default App;

