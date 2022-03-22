import React from 'react';
import SignupForm from '../../components/Form';
import {Container} from './styles'
const Home: React.FC = () => {
  return (
      <Container>
        <h1>Formulário de Vôo</h1>
        <SignupForm/>
      </Container>
  )
}

export default Home;