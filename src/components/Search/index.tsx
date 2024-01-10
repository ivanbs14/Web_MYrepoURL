import { ReactNode, useState } from 'react';
import { Container } from "./styles";

import { InputUser } from '../InputUser';
import { Button } from '../Button';

interface SearchProps {
    searchTitle: string;
    placeholder?: string;
    iconSearch?: ReactNode;
    onSearchValueChange?: (value: string) => void;
    onClearClick?: () => void;
}

export function Search({ searchTitle, placeholder, iconSearch, onSearchValueChange, onClearClick }: SearchProps) {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleInputChange = (value: string) => {
        setSearchValue(value);
    };

    const handleSearchClick = () => {
        if (onSearchValueChange) {
            onSearchValueChange(searchValue);
        }
    };

    const handleClearClick = () => {
        setSearchValue('');
        if (onClearClick) {
            onClearClick();
        }
    };

    return (
        <Container>
            <h2 className='h2One'>{searchTitle}</h2>
            <InputUser
                icon={iconSearch}
                placeholder={placeholder}
                value={searchValue}
                onInputChange={handleInputChange}
            />

            <div className='btnButts'>
                <Button className='btnclear'
                    title='Clear'
                    onClick={handleClearClick}
                />
                <Button className='btnsearch'
                    title='Search'
                    onClick={handleSearchClick}
                />
            </div>
        </Container>
    )
}