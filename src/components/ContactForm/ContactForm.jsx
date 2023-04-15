import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyle, Label, Input, ButtonAdd } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);


 const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        console.log(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        console.log(event.target.value);
        break;
      default:
        return;
    }
  };


  const handleSubmit = e => {
    e.preventDefault();
   const includesName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
 if (includesName) {
   alert(`${name} is already in contacts`);
   return
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
          />
        </Label>
        <ButtonAdd>Add contact</ButtonAdd>
      </form>
    </FormStyle>
  );
};

export default Form;


Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
}