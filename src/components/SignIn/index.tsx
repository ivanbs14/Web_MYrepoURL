import { useState } from "react";
import { useAuth } from '../../hooks/auth';

import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png'
import { RiUserShared2Fill } from "react-icons/ri";
import { GoPasskeyFill } from "react-icons/go";
import { InputS } from "../InputS";
import { Button } from "../Button";

interface SignInProps {
   onFormValidation: (isValid: boolean, message?: string) => void;
   onCreateAccountClick: () => void;
   onForgotPasswordClick: () => void;
}

export function SignIn({ onFormValidation, onCreateAccountClick, onForgotPasswordClick }: SignInProps) {
   const { signIn } = useAuth();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleCreateAccountClick = (event: React.MouseEvent) => {
      event.preventDefault();
      onCreateAccountClick();
   };

   // Event handler for button click
   const handleButtonClick = async () => {
      const allFieldsFilled = email.trim() !== '' && password.trim() !== '';
      
      if (allFieldsFilled) {
         try {
            await signIn({ email, password });
            onFormValidation(true);
         } catch (error) {
            console.error(error);
            if (error instanceof Error) {
               onFormValidation(false, `Invalid email or password`);
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
            <div className='logo flip-in-hor-top'>
            <img src={Logo} alt="logo da pagina" />
            <h1 className='nameRepo'>MYrepoURL</h1>
            </div>
            <span>Register your favorite Repositories</span>
         </div>
         <div className="inputs">
            <InputS 
               value={email}
               icon={RiUserShared2Fill}
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
         <Button 
            title="Sign In"
            onClick={handleButtonClick}
         />
         
         <span className="spText">New here? <a href="#" onClick={handleCreateAccountClick}>Create account</a></span>
         <button onClick={onForgotPasswordClick}>Forgot your password?</button>
      </Container>
   )
   
}