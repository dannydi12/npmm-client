import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import Toilet from '../../images/toilet.svg';
import Checkmark from '../../images/checkmark.svg';
import Alert from '../../images/alert.svg';
import Exit from '../../images/dot-menu-x.svg';

export default function Modal(props) {
  const imageSource = (classname) => {
    if (classname === 'modalToilet') {
      return Toilet;
    } else if (classname === 'modalAlert') {
      return Alert;
    }
    return Checkmark;
  };

  console.log(imageSource(props.imageClass));

  return (
    <div className="modalFixed">
      <div className="modalContainer">
        <div className="modalHeader">
          <button
            type="button"
            onClick={props.handleExit()}
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
};

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleExit: PropTypes.func,
};
