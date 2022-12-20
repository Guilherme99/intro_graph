import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

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
const ContainerModal: React.FC<P> = ({data, user, visibled, setVisibled, ...props}): any => {

   const navigate = useNavigate();
   return (
        <Modal
            isOpen={visibled}
            toggle={() => {
                setVisibled(false);
            }}
        >
            <ModalHeader toggle={() => {
                setVisibled(false);
            }}>
            Informações
            </ModalHeader>
            <ModalBody>
                <h5>Nome:   <span>{user?.name} </span> </h5>  
                <h5>Idade:  <span>{user?.age}</span> </h5>
                <h5>Data:   <span>{user?.date}</span> </h5>
                <h5>País:   <span>{data?.name}</span> </h5>
                <h5>Moeda:  <span>{data?.currency ?? 'Não encontrada'}</span> </h5>
                <h5>Código: <span>{data?.code ?? 'Não encontrada'}</span> </h5>
            </ModalBody>
            <ModalFooter>
            <Button
                color="primary"
                onClick={() => {
                    setVisibled(false);
                    navigate('/');
                }}
            >
                Ir para a home
            </Button>
            {' '}
            <Button onClick={() => {
                setVisibled(false);
            }}>
                Cancelar
            </Button>
            </ModalFooter>
        </Modal>
      );
  
}

export default ContainerModal;