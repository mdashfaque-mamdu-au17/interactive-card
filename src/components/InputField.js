import { useField } from "formik";
import React from "react";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default InputField;
