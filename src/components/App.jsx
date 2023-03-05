import React from 'react';
import { AddContact } from './AddContact/AddContact';
import { Filter } from './ContactList/Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends React.PureComponent {
  state = {
    contacts: [
      { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
      { id: 2, name: 'Hermione Kline', number: '443-89-12' },
      { id: 3, name: 'Eden Clements', number: '645-17-79' },
      { id: 4, name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = evt => {
    evt.preventDefault();
    let contactExist = this.state.contacts.find(
      contact => contact.name === this.state.name
    );
    const { contacts } = this.state;
    const lastid =
      contacts.length > 0
        ? Math.max(...contacts.map(contact => contact.id))
        : 0;

    if (!contactExist) {
      this.setState(state => ({
        contacts: state.contacts.concat({
          name: state.name,
          number: state.number,
          id: lastid + 1,
        }),
        name: '',
        number: '',
      }));
    } else alert(`${this.state.name} is alredy in contacts.`);
  };

  handleNameInput = evt => {
    this.setState({
      name: evt.target.value,
    });
  };

  handleNumberInput = evt => {
    this.setState({
      number: evt.target.value,
    });
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleInput = evt => {
    const text = evt.target.value;
    this.setState({
      filter: text,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const contactListStorage = JSON.stringify(this.state.contacts);
      window.localStorage.setItem('contact-list', contactListStorage);
    }
  }

  componentDidMount() {
    const list = window.localStorage.getItem('contact-list');
    if (!list) return;

    try {
      this.setState(state => ({
        contacts: JSON.parse(list),
      }));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div
        style={{
          marginLeft: 'calc(50% - 150px)  ',
        }}
      >
        <h1>Phonebook</h1>
        <AddContact
          name={this.state.name}
          number={this.state.number}
          handleNameInput={this.handleNameInput}
          handleNumberInput={this.handleNumberInput}
          handleSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter handleInput={this.handleInput} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
          filter={this.state.filter}
          key={this.state.contacts.id}
        />
      </div>
    );
  }
}
