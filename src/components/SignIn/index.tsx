import { useState } from "react";

import "./styles.css";
import Logo from '../../assets/5OnRVY-LogoMakr.png'
import { RiUserShared2Fill } from "react-icons/ri";
import { GoPasskeyFill } from "react-icons/go";
import { InputS } from "../InputS";
import { Button } from "../Button";

export function SignIn() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleEmailChange = (value: string) => {
      setEmail(value);
   };
   
   const handlePasswordChange = (value: string) => {
      setPassword(value)
   };

   return (
      <div className="SignIn">
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
         />
         
         <span className="spText">New here? <a href="">Create account</a></span>
         <a href="">Forgot your password?</a>
      </div>
   )
   
}