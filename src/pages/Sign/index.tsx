import './styles.css'
import { useState } from 'react';
import { FiLogIn } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";

import Logo from '../../assets/5OnRVY-LogoMakr.png'
import { SignIn } from '../../components/SignIn';

export function Sign() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  }
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  }

  function sendDadas() {
    console.log(email, password);
    setEmail('');
    setPassword('');

  }
  
  /* useEffect(() => {

  }, [sendDadas]); */

  return (
    <div className='container'>
      <div className='page slide-in-bottom'>
        <SignIn />
      </div>
    </div>
  )
}