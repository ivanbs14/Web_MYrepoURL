import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import { AiOutlineFileSearch } from 'react-icons/ai';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';

import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import axios from 'axios';

import { Nav } from '../../components/Nav';
import { Search } from '../../components/Search';
import { AddRepo } from '../../components/AddRepo';
import { Repository } from '../../components/Repository/index.js';
import teste from '../../assets/Logo.png'

interface Repo {
  id: string;
  link: string;
}

export function HomeUser() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const repoCollection = collection(db, 'repositories');

      try {
        const result = await getDocs(repoCollection);

        const listCli: Repo[] = [];
        result.forEach((doc) => {
          listCli.push({
            id: doc.id,
            link: doc.data().link
          });
        });

        setRepos(listCli);
      } catch (error) {
        console.error('Erro ao obter dados do Firestore:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const db = getFirestore();
    
      // Referência ao documento no Firestore usando a coleção 'repositories' e o ID fornecido
      const repoRef = doc(db, 'repositories', id);
    
      await deleteDoc(repoRef);
    
      // Atualiza a lista de repositórios após a exclusão bem-sucedida
      setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id));
    } catch (error) {
      console.error(`Error deleting repository with id ${id}`, error);
    }
  };

  const handleAddSuccess = async () => {
    // Atualiza a lista de repositórios após adicionar um novo repositório
    const response = await axios.get("http://localhost:3000/posts");
    setRepos(response.data);
  };

  const handleSearchClick = (searchValue: string) => {
    const filteredRepos = repos.filter(repo => repo.link.includes(searchValue));
    setFilteredRepos(filteredRepos);
  };

  const handleClearClick = () => {
    setFilteredRepos([]);
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
          onSearchValueChange={handleSearchClick}
          onClearClick={handleClearClick}
        />

        <AddRepo 
          searchTitle='Repository:'
          iconSearch={<RiGitRepositoryCommitsLine />}
          placeholder='Add a new repository'
          onAddSuccess={handleAddSuccess}
        />
        
        <h4 className='titleRepo'>Repositories</h4>
        {filteredRepos.length ?
            filteredRepos.map((repo, index) => (
                <Repository
                    key={repo.id}
                    title={`Link Repository ${index + 1}`}
                    link={repo.link}
                    onDelete={() => handleDelete(repo.id)}
                />
            ))
            :
            repos.length ?
                repos.map((repo, index) => (
                    <Repository
                        key={repo.id}
                        title={`Link Repository ${index + 1}`}
                        link={repo.link}
                        onDelete={() => handleDelete(repo.id)}
                    />
                ))
                :
                <h1>Not Repository found</h1>
        }
      </div>
    </Container>
  );
}
