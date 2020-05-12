import React, { useState } from 'react';

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const [form, setForm] = useState('SignUp');
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      callback();
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(() => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  const decideForm = (boolean) =>
    boolean ? setForm('Login') : setForm('Signup');
  return {
    decideForm,
    handleSubmit,
    handleInputChange,
    inputs,
    form,
  };
};

export default useSignUpForm;
