import './styles.css'

import { Button } from '../Button'
import Logo from '../../assets/5OnRVY-LogoMakr.png'

export function Nav() {

  return (
    <div className='container'>
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
      >
      </Button>
    </div>
  )
}