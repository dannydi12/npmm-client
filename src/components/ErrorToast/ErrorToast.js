import React, { useState } from 'react';
import './ErrorToast.css'

export default function ErrorToast() {
  const [hideClass, setHideClass] = useState("hiddenToast");

  state = {
    errorClass: ''
  }

 const handleClose = () => {
    setHideClass('hiddenToast')
  }

  render() {
    return (
      <div className={`errorToast ${errorClass}`} >
        <div className='toastMessage'>
          <p className='defaultMedium'>Error:</p>
          {/* instead of props here, we'll likely need to pass in the redux state  */}
          <p className='serverMessage'>{props.errorMessage}</p>
        </div>
        <button type='button' className='toastButton' onClick={() => handleClose()}>&#x2716;</button>
      </div >
    )
  }
}