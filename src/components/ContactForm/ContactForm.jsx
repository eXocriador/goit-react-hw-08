import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { toast } from "react-hot-toast";

const ContactForm = ({ editing = null, setEditing = () => {} }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Required"),
    number: Yup.string()
      .matches(/^[+]?[\d\s-]*\d$/, "Invalid phone number")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() &&
        (!editing || contact.id !== editing.id)
    );

    if (isDuplicate) {
      toast.error(`${values.name} is already in contacts`, {
        position: "top-right",
      });
      setSubmitting(false);
      return;
    }

    const action = editing
      ? updateContact({ id: editing.id, ...values })
      : addContact(values);

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success(
          editing
            ? `${values.name} updated successfully`
            : `${values.name} added`,
          { position: "top-right" }
        );
        resetForm();
        setEditing(null);
      })
      .catch(() => {
        toast.error(
          editing ? "Failed to update contact" : "Failed to add contact",
          { position: "top-right" }
        );
      });

    setSubmitting(false);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: editing?.name || "",
        number: editing?.number || "",
      }}
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

        <button type="submit">
          {editing ? "Update Contact" : "Add Contact"}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
