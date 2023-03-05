import React, { useState } from 'react';
import { AddContact } from './AddContact/AddContact';
import { Filter } from './ContactList/Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contact, setContact] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    let contactExist = contact.find(contact => contact.name === name);
    if (!contactExist) {
      const newContact = contact.concat({
        name: name,
        number: number,
        id: nanoid(),
      });
      setContact(newContact);
    } else alert(`${name} is alredy in contacts.`);
  };

  const handleNameInput = evt => {
    const newName = evt.target.value;
    setName(newName);
  };

  const handleNumberInput = evt => {
    const newNumber = evt.target.value;
    setNumber(newNumber);
    console.log(number);
  };

  const deleteContact = id => {
    const contactDelete = contact.filter(contact => contact.id !== id);
    setContact(contactDelete);
  };

  const handleInput = evt => {
    const text = evt.target.value;
    setFilter(text);
  };

  return (
    <div
      style={{
        marginLeft: 'calc(50% - 150px)  ',
      }}
    >
      <h1>Phonebook</h1>
      <AddContact
        name={name}
        number={number}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
        handleSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      <Filter handleInput={handleInput} />
      <ContactList
        contact={contact}
        deleteContact={deleteContact}
        filter={filter}
      />
    </div>
  );
};
