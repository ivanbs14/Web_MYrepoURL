import { useNavigate } from 'react-router-dom';
import './styles.css';

import { useAuth } from '../../hooks/auth';

export function HomeUser() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className='containerBody'>
      <h1>ola</h1>
      <button onClick={handleLogout}>sair</button>
    </div>
  )
}