import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Required"),
    number: Yup.string()
      .matches(/^[+]?\d[\d\s-]*\d$/, "Invalid phone number")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const nameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (nameExists) {
      toast.error(`${values.name} is already in contacts`, {
        position: "top-right",
      });
      setSubmitting(false);
      return;
    }

    dispatch(addContact(values))
      .unwrap()
      .then(() =>
        toast.success(`${values.name} added`, { position: "top-right" })
      )
      .catch(() =>
        toast.error("Failed to add contact", { position: "top-right" })
      );

    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validate={(values) => {
        const errors = {};
        try {
          validationSchema.validateSync(values, { abortEarly: false });
        } catch (err) {
          err.inner.forEach((error) => {
            toast.error(error.message, { position: "top-right" });
            errors[error.path] = error.message;
          });
        }
        return errors;
      }}
    >
      <Form>
        <label>Name</label>
        <Field name="name" placeholder="John Doe" />

        <label>Number</label>
        <Field name="number" placeholder="+123456789" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
