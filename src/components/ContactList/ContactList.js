import React from 'react';

export class ContactList extends React.Component {
  render() {
    const { contacts, filter, deleteContact } = this.props;
    const filteredContacts = contacts.filter(contact =>
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
  }
}
