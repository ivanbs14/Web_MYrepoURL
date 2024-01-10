import { useEffect, useState } from 'react';
import { Container } from "./styles";

import { Button } from '../Button';

interface RepositoryProps {
  title: string;
  link: string;
  onDelete: () => void;
}

export function Repository({ title, link, onDelete }: RepositoryProps) {

  return (
    <Container>
      <div className='itensRepo'>
        <h4 className='title'>{title}:</h4>
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </div>
      <Button className='btnRepo' title='Delete' onClick={onDelete}/>
    </Container>
  );
}
