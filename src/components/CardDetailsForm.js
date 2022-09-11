import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import Button from "./Button";
const CardDetailsForm = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        cardNumber: "",
        month: "",
        year: "",
        cvv: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 Characters or less")
          .required("something wrong"),
        cardNumber: Yup.string()
          .min(16, "Should be Atleast 16 digits")
          .max(16, "Should be 16 digits only")
          .required("Can't be blank"),
        month: Yup.string().min(2).max(2).required("Can't be blank"),
        year: Yup.string()
          .min(4, "Year is Invalid")
          .max("Year is Invalid")
          .required("Required"),
        cvv: Yup.string()
          .min(3, "Invalid CVV")
          .max(3, "Invalid CVV")
          .required("Can't be blank"),
      })}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      <Form>
        <InputField
          label="cardholder name"
          name="firstName"
          type="text"
          placeholder="e.g. Jane Appleased"
        />
        <Button title="Confirm" type="submit" />
      </Form>
    </Formik>
  );
};

export default CardDetailsForm;
