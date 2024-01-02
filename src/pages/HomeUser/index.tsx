import { useEffect, useState } from 'react';
import { Container } from './styles';

import { AiOutlineFileSearch } from 'react-icons/ai';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';

import { Nav } from '../../components/Nav';
import { Search } from '../../components/Search';
import { AddRepo } from '../../components/AddRepo';
import { Repositorios } from '../../components/Repositorios';
import teste from '../../assets/Logo.png'

const userId = '64ee749422dc63b88a6abf68';

export function HomeUser() {
  const [allRepo, setAllRepo] = useState()

  /* const loadRepository = async (query = '') => {
    const response = await getRepository(userId, query);

    console.log(response.data);
  } */

  /* useEffect(() => {
    (async () => await loadRepository())();

    async function fetchTags() {
      const response = await api.get("/repositories");
      setAllRepo(response.data)
    }
    
    fetchTags();
  }, []) */

  /* console.log(allRepo) */

  return (
    <Container>
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

    </Container>
  )
}