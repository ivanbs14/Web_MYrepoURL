import React, { useState } from 'react';
import './styles.css';

import { SignOut } from '../../components/SignOut';
import { Alert } from '../../components/Alert';
import { SignIn } from '../../components/SignIn';

export function Sign() {
  const [alertDisabled, setAlertDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  /* const [isFiels, setIsField] = useState(false); */
  const [isValidateLog, setIsValidateLog] = useState(true);

  // Function to close the alert
  const handleAlertClose = () => {
    setAlertMessage('');
    setAlertDisabled(true);
  };

  // Function to handle form validation from the SignOut component
  const handleFormValidation = (isValid: boolean) => {
    setIsFormValid(isValid);

    if (!isValid) {
      /* setAlertMessage('FILL IN ALL FIELDS...'); */
      setAlertMessage('Preencha todos os campos...');
      setAlertDisabled(false);
    } else {
      setAlertMessage('');
      setAlertDisabled(true);
    }
  };

  // Function to handle click on "Create account" link
  const handleCreateAccountClick = () => {
      setIsValidateLog(false);
  };

  return (
    <div className="container">
      {!alertDisabled && (
        <Alert onClickOff={handleAlertClose} message={alertMessage}>
          <h1>{alertMessage}</h1>
        </Alert>
      )}
      {isValidateLog == true ?
        <div className="page slide-in-bottom">
          <SignIn onFormValidation={handleFormValidation} onCreateAccountClick={handleCreateAccountClick}/>
        </div>
        :
        <div className="page slide-in-bottom">
          <SignOut onFormValidation={handleFormValidation} />
        </div>
      }
    </div>
  );
}
