// No componente Sign
import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/5OnRVY-LogoMakr.png';
import { SignOut } from '../../components/SignOut';
import { Alert } from '../../components/Alert';

export function Sign() {
  const [alertDisabled, setAlertDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Function to close the alert
  const handleAlertClose = () => {
    setAlertMessage('');
    setAlertDisabled(true);
  };

  // Function to handle form validation from the SignOut component
  const handleFormValidation = (isValid: boolean) => {
    setIsFormValid(isValid);

    if (!isValid) {
      setAlertMessage('FILL IN ALL FIELDS...');
      setAlertDisabled(false);
    } else {
      setAlertMessage('');
      setAlertDisabled(true);
    }
  };

  return (
    <div className="container">
      {!alertDisabled && (
        <Alert onClickOff={handleAlertClose}>
          <h1>{alertMessage}</h1>
        </Alert>
      )}
      <div className="page slide-in-bottom">
        <SignOut onFormValidation={handleFormValidation} />
      </div>
    </div>
  );
}
