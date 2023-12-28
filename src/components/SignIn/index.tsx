import { useState } from "react";

import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png'
import { RiUserShared2Fill } from "react-icons/ri";
import { GoPasskeyFill } from "react-icons/go";
import { InputS } from "../InputS";
import { Button } from "../Button";

interface SignInProps {
   onFormValidation: (isValid: boolean) => void;
}

export function SignIn({ onFormValidation }: SignInProps) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isFormValid, setIsFormValid] = useState(false);

   const handleEmailChange = (value: string) => {
      setEmail(value);
   };
   
   const handlePasswordChange = (value: string) => {
      setPassword(value)
   };

   // Event handler for button click
   const handleButtonClick = () => {
      const allFieldsFilled = email.trim() !== '' && password.trim() !== '';
      setIsFormValid(allFieldsFilled);
      onFormValidation(allFieldsFilled);
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
         <Button 
            title="Sign In"
            onClick={handleButtonClick}
         />
         
         <span className="spText">New here? <a href="">Create account</a></span>
         <button >Forgot your password?</button>
      </Container>
   )
   
}