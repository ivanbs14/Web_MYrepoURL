import { useState } from 'react';
import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png';
import { RiUserShared2Fill, RiUserSettingsFill } from 'react-icons/ri';
import { GoPasskeyFill } from 'react-icons/go';
import { InputS } from '../InputS';
import { Button } from '../Button';

interface SignOutProps {
  onFormValidation: (isValid: boolean, message?: string) => void;
  onFormLog: (isLog: boolean) => void;
}

export function SignOut({ onFormValidation, onFormLog }: SignOutProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handlers for input changes
  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  // Event handler for button click
  const handleButtonClick = () => {
    const allFieldsFilled = name.trim() !== '' && email.trim() !== '' && password.trim() !== '';
      
      if (allFieldsFilled) {
         try {
            console.log(name, email, password)
            onFormValidation(true);
            onFormLog(true)
         } catch (error) {
            console.error(error);
            if (error instanceof Error) {
               onFormValidation(false, `${error.message}`);
            }else {
               console.log('Erro desconhecido ao realizar login');
            }
         }
      } else {
        onFormValidation(false, "FILL IN ALL FIELDS");
      }
  };

  return (
    <Container>
      <div className="header">
        <div className="logo flip-in-hor-top">
          <img src={Logo} alt="logo da pagina" />
          <h1 className="nameRepo">MYrepoURL</h1>
        </div>
        <span>Register your favorite Repositories</span>
      </div>
      <div className="inputs">
        <InputS value={name} 
          icon={RiUserShared2Fill} 
          placeholder="Name" 
          onChange={handleNameChange} 
        />
        <InputS
          value={email}
          icon={RiUserSettingsFill}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <InputS
          type="password"
          value={password}
          icon={GoPasskeyFill}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </div>
      <Button title="Create account" onClick={handleButtonClick} />
    </Container>
  );
}
