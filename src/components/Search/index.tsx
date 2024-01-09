import { ReactNode } from 'react';
import { Container } from "./styles";

import { InputUser } from '../InputUser';
import { Button } from '../Button';

interface SearchProps {
    searchTitle: string;
    placeholder?: string;
    iconSearch?: ReactNode;
}

export function Search({ searchTitle, placeholder, iconSearch }: SearchProps) {

    return (
        <Container>
            <h2 className='h2One'>{searchTitle}</h2>
            <InputUser
                icon={iconSearch}
                placeholder={placeholder}
            />

            <Button className='btnclear'
                title='Limpar'
            />
            <Button className='btnsearch'
                title='Localizar'
            />
        </Container>
    )
}