
import { Container } from "./styles";
import Logo from '../../assets/5OnRVY-LogoMakr.png'
import Send from '../../assets/Send.svg'

interface ModalSendProps {

}

export function ModalSend({}: ModalSendProps) {
   
   return (
      <Container>
         <div className="header">
            <div className='logo flip-in-hor-top'>
            <img src={Logo} alt="logo da pagina" />
            <h1 className='nameRepo'>MYrepoURL</h1>
            </div>
         </div>
         <span>check password recovery email</span>
            <img src={Send} alt="logo da pagina" />
      </Container>
   )
   
}