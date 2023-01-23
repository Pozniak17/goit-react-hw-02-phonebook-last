// import { Component } from 'react';
// import { Form, FormLabel, FormInput, FormButton, Title } from './Form';

// export class ContactForm extends Component {
//   state = {
//     inputValue: '',
//   };

//   onHandleSubmit = event => {
//     event.preventDefault();
//     console.log(event.currentTarget.value);
//     this.reset();
//   };

//   onhandleChange = event => {
//     this.setState({ inputValue: event.target.value });
//   };

//   reset = () => {
//     this.setState({ inputValue: '' });
//   };

//   render() {
//     const { inputValue } = this.state;
//     const { onHandleSubmit, onhandleChange } = this;

//     return (
//       <div>
//         <Title>Phonebook</Title>
//         <Form onSubmit={onHandleSubmit}>
//           <FormLabel>
//             Name
//             <FormInput
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={inputValue}
//               onChange={onhandleChange}
//             />
//           </FormLabel>
//           <FormButton type="submit">Add contact</FormButton>
//         </Form>
//       </div>
//     );
//   }
// }
