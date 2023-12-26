import './styles.css';

import { AiOutlineFileSearch } from 'react-icons/ai';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';

import { Nav } from '../../components/Nav';
import { Search } from '../../components/Search';
import { AddRepo } from '../../components/AddRepo';
import { Repositorios } from '../../components/Repositorios';
import teste from '../../assets/5OnRVY-LogoMakr.png'

export function HomeUser() {

  return (
    <div className='containerBody'>
      <div className='scale-out-tl'>
        <img className='animation' src={teste} alt="teste" />
      </div>
      <Nav />

      <div className='mid'>
        <Search 
          searchTitle='Procurar:'
          iconSearch={<AiOutlineFileSearch />}
          placeholder='Digite o nome do repositório'
        />

        <h4 className='titleRepo'>Repositórios</h4>
        <Repositorios />
        <Repositorios />
        <Repositorios />

        <AddRepo 
          searchTitle='Repositório:'
          iconSearch={<RiGitRepositoryCommitsLine />}
          placeholder='Adicione um novo repositório'
        />
      </div>

    </div>
  )
}