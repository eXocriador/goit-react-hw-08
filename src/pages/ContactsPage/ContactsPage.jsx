import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={css.container}>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
