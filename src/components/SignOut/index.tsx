import { useState } from 'react';
import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png';
import { RiUserShared2Fill, RiUserSettingsFill } from 'react-icons/ri';
import { GoPasskeyFill } from 'react-icons/go';
import { InputS } from '../InputS';
import { Button } from '../Button';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../ConfigFireB/firebase";

interface SignOutProps {
  onFormValidation: (isValid: boolean, message?: string) => void;
  onFormLog: (isLog: boolean) => void;
  onCreateAccountClick: () => void;
}

export function SignOut({ onFormValidation, onFormLog, onCreateAccountClick }: SignOutProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for button click
  const handleButtonClick = async () => {
    const allFieldsFilled = name.trim() !== '' && email.trim() !== '' && password.trim() !== '';
      
    if (allFieldsFilled) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully:", email);
        onFormValidation(true);
        onFormLog(true);
      } catch (error) {
          if (error instanceof Error) {
            onFormValidation(false, `Email in use`);
          } else {
            console.log(`Unknown error while creating user ${error instanceof Error}`);
          }
      }
    } else {
      onFormValidation(false, "FILL IN ALL FIELDS");
    }
  };

  const handleCreateAccountClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onCreateAccountClick();
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
          onChange={(value: string) => setName(value)}
        />
        <InputS
          value={email}
          icon={RiUserSettingsFill}
          placeholder="Email"
          onChange={(value: string) => setEmail(value)}
        />
        <InputS
          type="password"
          value={password}
          icon={GoPasskeyFill}
          placeholder="Password"
          onChange={(value: string) => setPassword(value)}
        />
      </div>
      <Button title="Create account" onClick={handleButtonClick} />
      <span className="spText">Already have a registration? <a href="#" onClick={handleCreateAccountClick}>Log in</a></span>
    </Container>
  );
}
