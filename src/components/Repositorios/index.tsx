import './styles.css';

import { Button } from '../Button';

export function Repositorios() {

    return (
        <div className='allRepository'>
            <div className='itensRepo'>
                <h4 className='title'>LinkedIn:</h4>
                <a>https://www.linkedin.com/in/ivan-barbosa-653a29192/</a>
            </div>
            <Button className='btnRepo'
                title='Apagar'
            />
        </div>
    )
}