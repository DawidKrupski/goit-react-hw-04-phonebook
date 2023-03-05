import React from 'react';

export const ContactList = ({ contact, filter, deleteContact }) => {
  const filteredContacts = contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </>
  );
};
