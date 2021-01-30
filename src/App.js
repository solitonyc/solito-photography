import React, {Component} from 'react';
import Navigation from './components/Navigation';
import Main from './sections/Main';
import Photos from './sections/Photos';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

<<<<<<< HEAD
class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
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
=======
function App() {
  return (
    <div className="App">
      <p>HELLO</p>
    </div>
  );
>>>>>>> parent of 5eb20aa... added welcome message to home page
}

export default App;

