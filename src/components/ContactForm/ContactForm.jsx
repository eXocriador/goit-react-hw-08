import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit, initialValues }) => {
  const [values, setValues] = useState(() => ({
    name: initialValues?.name || "",
    number: initialValues?.number || "",
    id: initialValues?.id || undefined
  }));

  useEffect(() => {
    if (initialValues?.id !== values.id) {
      setValues({
        name: initialValues?.name || "",
        number: initialValues?.number || "",
        id: initialValues?.id || undefined
      });
    }
  }, [initialValues?.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);

    if (!values.id) {
      setValues({ name: "", number: "", id: undefined });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.form}>
      <Typography variant="h6" component="h2" className={styles.title}>
        {values.id ? "Edit Contact" : "Add Contact"}
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Phone Number"
        name="number"
        value={values.number}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles.button}
      >
        {values.id ? "Update Contact" : "Add Contact"}
      </Button>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string
  })
};

export default ContactForm;
