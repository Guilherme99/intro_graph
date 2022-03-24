import React, { useState } from 'react';
import Table from '../../components/Table'
import { useSelector, shallowEqual } from "react-redux"
import {Container} from './styles'
import ContainerModal from '../../components/Modal';
import { useLocation } from 'react-router-dom';
import { useContinentQuery } from '../../generated/graphql';

import { Spinner } from 'reactstrap';

const Destinos: React.FC = () => {

  const user: IUser = useSelector(
    (state: UserState) => state.user,
    shallowEqual
  );
  
  const [country, setCountry] = useState<any>();
  const [visible, setVisibled] = useState(false);
  
  const {state} = useLocation();
  const { code } = state as any;
  const { data, refetch, loading }  = useContinentQuery({
    variables: { code: String(code) },
   });
  
  React.useEffect(() => {
    refetch({ code: String(code) });
  }, [refetch, code]);

  const columns = [
      {
        Header: 'Países',
        columns: [
          {
            Header: 'Código',
            accessor: 'code',
          },
          {
            Header: 'Nome',
            accessor: 'name',
          },
          {
            Header: 'Moeda',
            accessor: 'currency',
          },
          {
            Header: 'Ação',
            accessor: '',
            Cell: (values:any)=> (
              <span style={{margin: '0 auto', cursor:'pointer',color:'green',textDecoration:'none'}}
                onClick={() => {
                    setCountry(values.row.values);
                    setVisibled(true);
                  }}>
                    Escolher
              </span> 
              )
          },
          
        ],
      },
  ];

  
  return loading ? (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      <Spinner/>
    </div>
  )
  : (
    <>
      <Container visibled={visible}>
        <h1>Destinos</h1>
        {
          data?.continents[0]?.countries?.length && data?.continents[0]?.countries?.length > 0 &&
          <Table columns={columns} data={data?.continents[0]?.countries} />
        }
      </Container>
      <ContainerModal data={country} user={user} visibled={visible} setVisibled={setVisibled}/>
    </>
  )
}

export default Destinos;