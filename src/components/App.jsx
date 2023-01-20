import { Component } from 'react';
import { ContactForm } from './Form/Form.jsx';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <ContactForm />
      </>
    );
  }
}
