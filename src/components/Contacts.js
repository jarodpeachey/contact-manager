import React from 'react';
import Contact from './Contact';

export default function Contacts(props) {
  const { contacts } = props;
  return (
    <div>
      <div>
        <ul className="collection spaced">
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    </div>
  );
}
