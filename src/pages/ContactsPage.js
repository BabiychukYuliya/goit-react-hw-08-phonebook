import Filter from "components/Filter/Filter";
import ContactList from "components/Phonebook/Phonebook";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectorsAuth";
import Form from '../components/ContactForm/ContactForm'

export default function ContactsPage() {
    const loader = useSelector(selectIsLoggedIn);
    
    return (
        <div>
            {loader}
            <Form />
            <p>Your contacts</p>
            <Filter />
            <ContactList/>
        </div>
    );
    
};