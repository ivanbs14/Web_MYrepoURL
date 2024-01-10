import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import { AiOutlineFileSearch } from 'react-icons/ai';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';

import axios from 'axios';

import { Nav } from '../../components/Nav';
import { Search } from '../../components/Search';
import { AddRepo } from '../../components/AddRepo';
import { Repository } from '../../components/Repository/index.js';
import teste from '../../assets/Logo.png'

interface Repo {
  id: number;
  link: string;
}

export function HomeUser() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setRepos(response.data);
      } catch (error) {
        console.error("Error getting repositories", error);
      }
    };

    fetchRepos();
  }, []);

  const handleDelete = async (id: number) => {
    try {

      // Realiza uma requisição DELETE para a API JSON Server
      await fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' });

      // Atualiza a lista de repositórios após a exclusão bem-sucedida
      setRepos((prevRepos) => prevRepos.filter(repo => repo.id !== id));
    } catch (error) {
      console.error(`Error deleting repository with id ${id}`, error);
    }
  };

  return (
    <Container>
      <div className='scale-out-tl'>
        <img className='animation' src={teste} alt="teste" />
      </div>
      <Nav />

      <div className='mid'>
        <Search 
          searchTitle='Search:'
          iconSearch={<AiOutlineFileSearch />}
          placeholder='Enter the repository name'
        />

        <AddRepo 
          searchTitle='Repository:'
          iconSearch={<RiGitRepositoryCommitsLine />}
          placeholder='Add a new repository'
        />
        
        <h4 className='titleRepo'>Repositories</h4>
        {repos?
            repos.map((repo) => (
              <Repository
              key={repo.id}
              title={`Link Repository ${repo.id}`}
              link={repo.link}
              onDelete={() => handleDelete(repo.id)}
            />
          ))
          :
          <><h1>Not Repository found</h1></>
        }
      </div>
    </Container>
  );
}
