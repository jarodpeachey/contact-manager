/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import '../style.css';
import axios from 'axios';
import Contacts from './Contacts';
import Header from './layout/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/contacts')
      .then(res => this.setState({ contacts: res.data }));
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Header content="Contact Manager" />
        <div className="container">
          <Contacts contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default App;
