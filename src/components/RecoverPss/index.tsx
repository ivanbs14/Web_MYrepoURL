import { useState } from "react";

import { auth } from "../../ConfigFireB/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png'
import { RiUserShared2Fill } from "react-icons/ri";
import { InputS } from "../InputS";
import { Button } from "../Button";

interface RecoverPssProps {
   onFormValidation: (isValid: boolean, message?: string) => void;
   onResetValidation: () => void;
}

export function RecoverPss({ onFormValidation, onResetValidation }: RecoverPssProps) {
   const [email, setEmail] = useState("");

   const recoverPassword = async () => {
      if(!email) {
         onFormValidation(false, "FILL IN ALL FIELDS");
      } else {
         try {
            // Se o usuário existe, enviar e-mail de redefinição de senha
            await sendPasswordResetEmail(auth, email);
            onFormValidation(true);
            onResetValidation();
            onFormValidation(false, `reset sent email`);
         } catch (error) {
            if (error instanceof Error && error.message === 'Firebase: Error (auth/invalid-email).') {
               onFormValidation(false, `Invalid email`);
            } else if (error instanceof Error && error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
               onFormValidation(false, `The password must contain at least 6 characters`);
            } else {
               onFormValidation(false, `${error}`);
            }
         }
      }
   }

   return (
      <Container>
         <div className="header">
            <div className='logo flip-in-hor-top'>
            <img src={Logo} alt="logo da pagina" />
            <h1 className='nameRepo'>MYrepoURL</h1>
            </div>
         </div>
         <span>Provide password recovery email</span>
         <div className="inputs">
            <InputS 
               value={email}
               icon={RiUserShared2Fill}
               placeholder="Email"
               onChange={(value: string) => setEmail(value)}
            />
         </div>
         <Button 
            title="Send"
            onClick={recoverPassword}
         />
      </Container>
   )
   
}