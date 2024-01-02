import { useState } from 'react';
import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png';
import { RiUserShared2Fill, RiUserSettingsFill } from 'react-icons/ri';
import { GoPasskeyFill } from 'react-icons/go';
import { InputS } from '../InputS';
import { Button } from '../Button';

interface SignOutProps {
  onFormValidation: (isValid: boolean, formData: { email: string, password: string }) => void;
}

export function SignOut({ onFormValidation }: SignOutProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setIsFormValid] = useState(false);

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
    setIsFormValid(allFieldsFilled);

      if (allFieldsFilled) {
         const formData = { name, email, password };
         onFormValidation(allFieldsFilled, formData);
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
