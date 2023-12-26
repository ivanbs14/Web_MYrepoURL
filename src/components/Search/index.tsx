import { ReactNode } from 'react';
import './styles.css';

import { InputUser } from '../InputUser';
import { Button } from '../Button';

interface SearchProps {
    searchTitle: string;
    placeholder?: string;
    iconSearch?: ReactNode;
}

export function Search({ searchTitle, placeholder, iconSearch }: SearchProps) {

    return (
        <div className='search'>
            <h2>{searchTitle}</h2>
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
        </div>
    )
}