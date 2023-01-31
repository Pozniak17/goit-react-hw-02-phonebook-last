import { nanoid } from 'nanoid';

import { Component } from 'react';
// import ContactList from './ContactList';

import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Title,
  ContactList,
  ContactItem,
  ContactText,
  ContactButton,
} from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Banana' },
      { id: 'id-2', name: 'Orange' },
      { id: 'id-3', name: 'Kiwi' },
    ],

    name: '',
  };

  // addContact = name => {
  //   console.log(name);
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.push(name),
  //   }));
  // };

  addContact = name => {
    console.log(name);

    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // тут ми беремо вибраний id тудушки яку треба видалити і показуємо всі, в яких id не сходиться.
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);

    this.addContact(this.state.name);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    const { contacts } = this.state;

    return (
      <div>
        <Title>Phonebook</Title>
        <Form onSubmit={this.handleSubmit}>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.onChange}
            />
          </FormLabel>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
        {/* в проп contacts ми передаємо масив який лежить в state contacts
         ми створили метод видалення, який фільтрує(якщо ід не сходяться=>показати, якщо сходяться скрити. Ми прокидуємо цей метод deleteContact в ContactList, потім на кнопці передаємо його через onClick в середину якого поміщаємо ід кнопки. При кліку воно буде фільтрувати, і ті ід що в state та ті що на кнопці якщо вони зійдуться, то кнопка не буде показана, а всі в кого не зійшлися будуть показані */}
        {/* <ContactList contacts={contacts} onDeleteContact={this.deleteContact} /> */}
        <Title>Contacts</Title>
        <ContactList>
          {contacts.map(contact => (
            <ContactItem key={contact.id}>
              <ContactText>{contact.name}</ContactText>
              <ContactButton onClick={() => this.deleteContact(contact.id)}>
                Delete
              </ContactButton>
            </ContactItem>
          ))}
        </ContactList>
      </div>
    );
  }
}
