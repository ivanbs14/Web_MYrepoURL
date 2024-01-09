import { ReactNode } from 'react';
import { Container } from "./styles";

import { InputUser } from '../InputUser';
import { Button } from '../Button';

interface SearchProps {
    searchTitle: string;
    placeholder?: string;
    iconSearch?: ReactNode;
}

export function AddRepo({ searchTitle, placeholder, iconSearch }: SearchProps) {

    return (
        <Container className='search'>
            <h2>{searchTitle}</h2>
            <InputUser
                icon={iconSearch}
                placeholder={placeholder}
            />

            <Button className='btnAdd'
                title='Adicionar'
            />
        </Container>
    )
}