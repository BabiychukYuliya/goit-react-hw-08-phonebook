import ContactList from './Phonebook/Phonebook';
import Form from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useEffect } from "react";
import { useDispatch} from "react-redux";

import { fetchContacts } from "redux/operations";
// import { getIsLoading, getError } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />

    </div>
  );
};
