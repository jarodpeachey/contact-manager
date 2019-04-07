import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <li className="collection-item">
        <strong>{this.props.contact.name}</strong>
        <div className="right">
          <small>{this.props.contact.email}</small>
        </div>
      </li>
    );
  }
}

export default Contact;
