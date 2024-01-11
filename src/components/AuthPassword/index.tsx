import { useState } from "react";

import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png'
import { GoPasskeyFill } from "react-icons/go";
import { InputS } from "../InputS";
import { Button } from "../Button";

interface AuthPasswordProps {

}

export function AuthPassword({}: AuthPasswordProps) {
   const [password, setPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");

   const handleNewPasswordChange = (value: string) => {
      setNewPassword(value);
   };

   const handlePasswordChange = (value: string) => {
      setPassword(value)
   };

   return (
      <Container>
         <div className="header">
            <div className='logo flip-in-hor-top'>
            <img src={Logo} alt="logo da pagina" />
            <h1 className='nameRepo'>MYrepoURL</h1>
            </div>
         </div>
         <span>Provide new password</span>
         <div className="inputs">
            <InputS 
               value={password}
               icon={GoPasskeyFill}
               placeholder="New password"
               onChange={handlePasswordChange}
            />

            <InputS 
               value={newPassword}
               icon={GoPasskeyFill}
               placeholder="Repeat new password"
               onChange={handleNewPasswordChange}
            />
         </div>
         <Button 
            title="Reset Password"
            onClick={() => {}}
         />
      </Container>
   )
   
}