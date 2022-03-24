import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup';
import { Form } from '@unform/web'
import Select from '../Select';
import Input from '../Input';
import InputMask from '../Mask';
import { useContinentsQuery } from '../../generated/graphql';
import getValidationErrors from './../Errors';

import { Dispatch } from "redux"
import { useDispatch } from 'react-redux';
import { newUser } from '../../store/actionCreators';

import {Container} from './style'
interface FormData {
  name: string
  old: string
  date: string
  country: string
  continent: string
}

const SignUp = () => {

  let navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch()

  const formRef = useRef<FormHandles>(null)
  
  const [code, setCode] = useState<string>();

  const continents = useContinentsQuery().data?.continents; 
  
  const handleContinent = (value: React.ChangeEvent<HTMLSelectElement>) => {
    const code = value.target.value;
    if(code !== '0'){
     setCode(code);
    }
  }
  
  const handleSubmit: SubmitHandler<FormData> = async (values) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email().required('E-mail obrigatório'),
        cpf: Yup.string().required('CPF obrigatório'),
        age: Yup.number().required('idade obrigatório'),
        date: Yup.date().required('Data obrigatória'),
        continent: Yup.string().required('Obrigatório'),
      });
      await schema.validate(values, {
        abortEarly: false,
      });
      dispatch(newUser(values as any));
      formRef.current?.clearField('name');
      formRef.current?.clearField('age');
      formRef.current?.clearField('date');
      formRef.current?.clearField('email');
     
      setTimeout(() => {
        navigate("/destinos", { state: { code: code }});
      },1000);

    } catch (err) {
      const errors = getValidationErrors(err as any);
      formRef.current?.setErrors(errors);
    }
  }  

  return (
    <Container>
      <h1>Formulário de Voo</h1>

      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input 
            placeholder='Nome'
            label="Nome:" name="name" />
          <Input 
            placeholder='Idade'
            label="Idade:" name="age" type="number" />
          <Input
            placeholder='Data'
            label="Data:"
            name="date"
            type="date"
          />
          <InputMask placeHolder='000.000.000-00' className="masks" label='CPF:' name="cpf" mask='999.999.999-99'/>
          <Input
            placeholder='E-mail'
            label="E-mail:" name="email" type="text" />

          <Select name="continent" label="Escolha seu continente" onChange={(e) => handleContinent(e)} >
            <option key={0} value={0}>
                Selecione
              </option>
            {continents?.map((option:any) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </Select>
          <button type="submit">Enviar</button>
        </Form>
      </div>

    </Container>
  )
}


export default SignUp;