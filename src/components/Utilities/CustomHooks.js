import React, { useState } from 'react';

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState({ error: null });
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
  const handleError = (errorMessage) => {
    setError(errorMessage.message);
  };
  return {
    error,
    handleError,
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useSignUpForm;
