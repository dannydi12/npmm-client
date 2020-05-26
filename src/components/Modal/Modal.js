import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import Toilet from '../../images/toilet.svg';
import Checkmark from '../../images/checkmark.svg';
import Alert from '../../images/alert.svg';
import Exit from '../../images/dot-menu-x.svg';

export default function Modal(props) {
  // Chooses which vector graphic to display based on prop
  const imageSource = (classname) => {
    if (classname === 'modalToilet') {
      return Toilet;
    }
    if (classname === 'modalAlert') {
      return Alert;
    }
    return Checkmark;
  };

  return (
    <div className="modalFixed">
      <div className="modalContainer">
        <div className="modalHeader">
          <button
            type="button"
            onClick={props.handleExit}
            className="modalExitContainer"
          >
            <img src={Exit} className="modalExit" alt="modal exit" />
          </button>

          {props.title && <h3 className="modalTitle">{props.title}</h3>}
        </div>
        <div className="modalBody">
          <img
            src={imageSource(props.imageClass)}
            className={props.imageClass}
            alt="modal alert"
          />
          <p className="modalMessage">{props.message}</p>
          <button
            type="button"
            onClick={props.clickHandler}
            className="modalButton"
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  title: '',
  handleExit: () => {},
  imageClass: '',
};

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleExit: PropTypes.func,
  imageClass: PropTypes.string,
};
