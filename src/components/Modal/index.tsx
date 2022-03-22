import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

interface P {
    data: {
        name: string
        code: string
        currency: string    
    },
    user: {
        name: string
        email: string
        cpf: string
        age: number
        date: string
    },
    visibled: boolean,
    setVisibled: (value:boolean) => void
}
const Modal: React.FC<P> = ({data, user, visibled, setVisibled, ...props}): any => {

   const navigate = useNavigate();
   return (
    visibled && <Container>
            <h2>Resultado: </h2>
            <h3>Nome: {user?.name} </h3>
            <h3>Idade: {user?.age}</h3>
            <h3>Data: {user?.date}</h3>
            <h3>País: {data?.name}</h3>
            <h3>Moeda: {data?.currency}</h3>
            <h3>Código: {data?.code}</h3>

            
            <button className='btn' onClick={() => {
                setVisibled(false);
                navigate('/');
            }}>Fechar</button>
        </Container>
      ) 
  
}

export default Modal;