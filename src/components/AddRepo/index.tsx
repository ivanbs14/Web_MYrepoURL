import { ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Container } from "./styles";

import { InputUser } from '../InputUser';
import { Button } from '../Button';

interface SearchProps {
    searchTitle: string;
    placeholder?: string;
    iconSearch?: ReactNode;
    onAddSuccess?: () => void;
}

export function AddRepo({ searchTitle, placeholder, iconSearch, onAddSuccess }: SearchProps) {
    const [repoName, setRepoName] = useState("");

    const handleAddClick = async () => {
        const repoId = uuidv4();
        try {
            await axios.post('http://localhost:3000/posts', {
                id: repoId,
                link: repoName,
            });

            if (onAddSuccess) {
                onAddSuccess();
            }
            setRepoName("");
        } catch (error) {
            console.error('Erro ao adicionar repositório:', error);
        }
    };

    return (
        <Container className='search'>
            <h2>{searchTitle}</h2>
            <InputUser
                icon={iconSearch}
                placeholder={placeholder}
                value={repoName}
                onInputChange={(value) => setRepoName(value)}
            />

            <Button className='btnAdd'
                title='To add'
                onClick={handleAddClick}
            />
        </Container>
    );
}
