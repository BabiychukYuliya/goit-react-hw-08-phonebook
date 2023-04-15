import Filter from "components/Filter/Filter";
import ContactList from "components/Phonebook/Phonebook";
import { useAuth } from "../hooks/useAuth";
import Form from '../components/ContactForm/ContactForm'

export default function ContactsPage() {
    const { isLoading } = useAuth();
    
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