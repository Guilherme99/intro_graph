import React from 'react';
import SignupForm from '../../components/Form';
import Table from './../../components/Table'
import { useSelector, shallowEqual } from "react-redux"
import {Container} from './styles'
const Home: React.FC = () => {

  const countries: ICountry[] = useSelector(
    (state: CountriesState) => state.countries,
    shallowEqual
  )

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
        ],
      },
  ];

  return (
      <Container>
        <h1>Formulário de Vôo</h1>
        <SignupForm/>
        {countries.length > 0 && 
          <Table columns={columns} data={countries} />
        }
      </Container>
  )
}

export default Home;