import Filter from "components/Filter/Filter";
import ContactList from "components/Phonebook/Phonebook";
import { useAuth } from "../hooks/useAuth";
import Form from '../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from "redux/contacts/operations";


export default function ContactsPage() {
     const dispatch = useDispatch();
    const { isLoading } = useAuth();
    
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
        <div>
            {isLoading}
            <Form />
            <p>Your contacts</p>
            <Filter />
            <ContactList/>
        </div>
    );
    
};