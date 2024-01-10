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
        <img src={Logo} alt="logo of the page" />
        <div className='contain'>
          <h1 className='nameRepo'>MYrepoURL</h1>
          <span>Register your favorite Repositories</span>
        </div>
      </div>

      <Button 
        className='logout'
        title='Exit'
        onClick={handleLogout}
      >
      </Button>
    </Container>
  )
}