import React, { Component } from 'react';
import '../style.css';
import Contact from '../components/Contact';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Contact />
      </div>
    );
  }
}

export default App;
