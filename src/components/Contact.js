import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h4>John Doe</h4>
        <ul className="collection">
          <li className="collection-item">Email: jdoe@mail.com</li>
          <li className="collection-item">Phone: 444-444-4356</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
