import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ErrorToast.css';

export default function ErrorToast() {
  const [, setHideClass] = useState('hiddenToast');

  state = {
    errorClass: '',
  };

  const handleClose = () => {
    setHideClass('hiddenToast');
  };

  return (
    <div className={`errorToast ${errorClass}`}>
      <div className="toastMessage">
        <p className="defaultMedium">Error:</p>
        {/* instead of props here, we'll likely need to pass in the redux state  */}
        <p className="serverMessage">{props.errorMessage}</p>
      </div>
      <button
        type="button"
        className="toastButton"
        onClick={() => handleClose()}
      >
        &#x2716;
      </button>
    </div>
  );
}

ErrorToast.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
