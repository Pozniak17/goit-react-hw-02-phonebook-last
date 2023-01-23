import { Component } from 'react';
import { Form, FormLabel, FormInput, FormButton, Title } from './Form/Form';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addTodo = text => {
    console.log(text);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.reset();
  };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <Title>Phonebook</Title>
        <Form onSubmit={handleSubmit}>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </FormLabel>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </div>
    );
  }
}
