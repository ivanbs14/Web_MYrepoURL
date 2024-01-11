import { useState } from "react";

import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png'
import { RiUserShared2Fill } from "react-icons/ri";
import { InputS } from "../InputS";
import { Button } from "../Button";

interface RecoverPssProps {

}

export function RecoverPss({}: RecoverPssProps) {
   const [email, setEmail] = useState("");

   const handleEmailChange = (value: string) => {
      setEmail(value);
   };


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
               onChange={handleEmailChange}
            />
         </div>
         <Button 
            title="Send"
            onClick={() => {}}
         />
      </Container>
   )
   
}