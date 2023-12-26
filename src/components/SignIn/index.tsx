import React from "react";
import { useState } from "react";

import "./styles.css";
import Logo from '../../assets/5OnRVY-LogoMakr.png'
import { FiLogIn, FiEye, FiEyeOff } from "react-icons/fi";
import { InputS } from "../InputS";
import { Button } from "../Button";

export function SignIn() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [showPassword, setShowPassword] = useState(false);

   const handleEmailChange = (value: string) => {
      setEmail(value);
   };
   
   const handlePasswordChange = (value: string) => {
      setPassword(value)
   };

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
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
               icon={FiLogIn}
               placeholder="Email"
               onChange={handleEmailChange}
            />
            
            <InputS 
               type="password"
               value={password}
               icon={FiLogIn}
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