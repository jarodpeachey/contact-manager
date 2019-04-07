import React from 'react';

export default function Contact(props) {
  const { contact } = props;
  const { name, email, id } = contact;
  return (
    <li className="collection-item" id={id}>
      <strong>{name}</strong>
      <div className="right">
        <small>{email}</small>
      </div>
    </li>
  );
}
