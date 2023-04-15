import { Contact } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <Contact>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Contact>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

