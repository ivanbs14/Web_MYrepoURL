import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles'

import { Button } from '../Button'
import Logo from '../../assets/Logo.png'

export function Nav() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  return (
    <Container>
      <div className='logo'>
        <img src={Logo} alt="logo da pagina" />
        <div className='contain'>
          <h1 className='nameRepo'>MYrepoURL</h1>
          <span>Cadastre seus Repositórios favoritos</span>
        </div>
      </div>

      <Button 
        className='logout'
        title='Sair'
        onClick={handleLogout}
      >
      </Button>
    </Container>
  )
}