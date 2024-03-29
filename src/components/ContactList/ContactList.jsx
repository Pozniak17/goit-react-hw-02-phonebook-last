import { List, ContactItem, ContactText, ContactButton } from './ContactList';

export const ContactList = ({ contacts, onSubmit }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <ContactText>
          {name}: {number}
        </ContactText>
        <ContactButton onClick={() => onSubmit(id)}>Delete</ContactButton>
      </ContactItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
