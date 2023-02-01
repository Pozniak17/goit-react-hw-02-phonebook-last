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
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    console.log(name, number);

    const contact = {
      id: nanoid(),
      name,
      number,
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
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { name, number } = this.state;

    evt.preventDefault();
    console.log(this.state);

    this.addContact(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;
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

          <FormLabel>
            Number
            <FormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
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
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
              <ContactText>
                {name}: {number}
              </ContactText>
              <ContactButton onClick={() => this.deleteContact(id)}>
                Delete
              </ContactButton>
            </ContactItem>
          ))}
        </ContactList>
      </div>
    );
  }
}

// Зроби один обробник для двох подій)
