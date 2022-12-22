import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import css from './App.module.css'
export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        {/* <Filter ... />
      <ContactList ... /> */}
      </div>
    );
  }
}
