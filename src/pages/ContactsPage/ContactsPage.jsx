import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <h2>Your Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
