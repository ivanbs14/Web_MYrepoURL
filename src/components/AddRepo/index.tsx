import { ReactNode, useState } from 'react';
import { Container } from "./styles";

import { InputUser } from '../InputUser';
import { Button } from '../Button';

interface SearchProps {
    searchTitle: string;
    placeholder?: string;
    iconSearch?: ReactNode;
}

export function AddRepo({ searchTitle, placeholder, iconSearch }: SearchProps) {
    const [searchValue, setSearchValue] = useState<string>('');

    // Atualiza o valor de searchValue com a função fornecida por onInputChange
    const handleInputChange = (value: string) => {
        setSearchValue(value);
    };

    // Função para ser chamada ao clicar em "Localizar"
    const handleSearchClick = () => {
        console.log('Repository input value:', searchValue);
        // Aqui você pode realizar outras ações relacionadas à busca
    };

    return (
        <Container className='search'>
            <h2>{searchTitle}</h2>
            <InputUser
                icon={iconSearch}
                placeholder={placeholder}
                onInputChange={handleInputChange}
            />

            <Button className='btnAdd'
                title='To add'
                onClick={handleSearchClick}
            />
        </Container>
    )
}