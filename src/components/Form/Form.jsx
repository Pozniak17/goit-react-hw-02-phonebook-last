import { Component } from 'react';
import { Form, FormLabel, FormInput, FormButton, Title } from './Form';

export class ContactForm extends Component {
  render() {
    return (
      <div>
        <Title>Phonebook</Title>
        <Form>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </div>
    );
  }
}
