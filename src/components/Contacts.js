import React from 'react';
import Contact from './Contact';

export default function Contacts(props) {
  const { contacts } = props;
  return (
    <div>
      <h2>
        Contact
        <span className="highlight"> Manager</span>
      </h2>
      <ul className="collection spaced">
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
