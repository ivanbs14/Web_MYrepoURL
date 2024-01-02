import { useState } from 'react';
import './styles.css';

import { SignOut } from '../../components/SignOut';
import { Alert } from '../../components/Alert';
import { SignIn } from '../../components/SignIn';

export function Sign() {
  const [alertDisabled, setAlertDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [, setIsFormValid] = useState(false);
  const [isValidateLog, setIsValidateLog] = useState(true);

  // Function to close the alert
  const handleAlertClose = () => {
    setAlertMessage('');
    setAlertDisabled(true);
  };

  // Function to handle form validation from the SignOut component
  const handleFormValidation = (isValid: boolean, message?: string) => {
    setIsFormValid(isValid);

    if (!isValid) {
      setAlertMessage(message || '');
      setAlertDisabled(false);
    } else {
      console.log(message)
      setAlertDisabled(true);
    }
  };

  // Function to handle click on "Create account" link
  const handleCreateAccountClick = () => {
      setIsValidateLog(false);
  };
  
  // Function to handle click on "Create account" link
  const handleLog = (isLog: boolean,) => {
      setIsValidateLog(isLog);
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
          <SignOut onFormValidation={handleFormValidation} onFormLog={handleLog}/>
        </div>
      }
    </div>
  );
}
