import { useState } from 'react';
import { Container } from "./styles";

import { SignOut } from '../../components/SignOut';
import { Alert } from '../../components/Alert';
import { SignIn } from '../../components/SignIn';
import { RecoverPss } from '../../components/RecoverPss';

export function Sign() {
  const [alertDisabled, setAlertDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [, setIsFormValid] = useState(false);
  const [isValidateLog, setIsValidateLog] = useState(true);
  const [resetPassword, setResetPassword] = useState(false);

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
  const handleReturnLogAccountClick = () => {
      setIsValidateLog(true);
  };
  
  // Function to handle click on "Create account" link
  const handleLog = (isLog: boolean,) => {
      setIsValidateLog(isLog);
  };

  const handleResetPass = () => {
    setResetPassword(true)
  }
  
  const handleResetPassValidat = () => {
    setResetPassword(false);
  }

  return (
    <Container>
      {!alertDisabled && (
          <Alert onClickOff={handleAlertClose} message={alertMessage}>
            <h1>{alertMessage}</h1>
          </Alert>
      )}
      {resetPassword == true ?
        <RecoverPss onFormValidation={handleFormValidation} onResetValidation={handleResetPassValidat}/>
        :
        <>
          {isValidateLog == true ?
            <div className="page slide-in-bottom">
              <SignIn onForgotPasswordClick={handleResetPass} onFormValidation={handleFormValidation} onCreateAccountClick={handleCreateAccountClick}/>
            </div>
            :
            <div className="page slide-in-bottom">
              <SignOut onFormValidation={handleFormValidation} onFormLog={handleLog} onCreateAccountClick={handleReturnLogAccountClick}/>
            </div>
          }
        </>
      }
    </Container>
  );
}
