import React, { Component } from 'react';
import '../style.css';
import Contact from './Contact';
import Header from './layout/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header content="Contact Manager" />
        <div className="container">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
