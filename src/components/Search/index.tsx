import { ReactNode, useState } from 'react';
import { Container } from "./styles";

import { InputUser } from '../InputUser';
import { Button } from '../Button';

interface SearchProps {
    searchTitle: string;
    placeholder?: string;
    iconSearch?: ReactNode;
}

export function Search({ searchTitle, placeholder, iconSearch }: SearchProps) {
    const [searchValue, setSearchValue] = useState<string>('');

    // Atualiza o valor de searchValue com a função fornecida por onInputChange
    const handleInputChange = (value: string) => {
        setSearchValue(value);
    };

    // Função para ser chamada ao clicar em "Localizar"
    const handleSearchClick = () => {
        console.log('Valor do input na busca:', searchValue);
        // Aqui você pode realizar outras ações relacionadas à busca
    };

    return (
        <Container>
            <h2 className='h2One'>{searchTitle}</h2>
            <InputUser
                icon={iconSearch}
                placeholder={placeholder}
                onInputChange={handleInputChange}
            />

            <div className='btnButts'>
                <Button className='btnclear'
                    title='Clear'
                />
                <Button className='btnsearch'
                    title='Search'
                    onClick={handleSearchClick}
                />
            </div>
        </Container>
    )
}