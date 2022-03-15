import React, { useRef, useState } from 'react'

import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup';
import { Form } from '@unform/web'
import Select from '../Select';
import Input from '../Input';
import { useContinentQuery, useContinentsQuery } from '../../generated/graphql';
import getValidationErrors from './../Errors';

import { Dispatch } from "redux"
import { useDispatch } from 'react-redux';
import { newContries } from '../../store/actionCreators';

import {Container} from './style'
interface FormData {
  name: string
  old: string
  date: string
  country: string
  continent: string
}

const SignUp = () => {
  const formRef = useRef<FormHandles>(null)
  const [code, setCode] = useState<string>();
  const { data, refetch }  = useContinentQuery({
   variables: { code: String(code) },
  });

  const dispatch: Dispatch<any> = useDispatch()


  const continents = useContinentsQuery().data?.continents; 
  
  React.useEffect(() => {
    refetch({ code: String(code) });
  }, [refetch, code]);

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
        age: Yup.number().positive().required('idade obrigatório'),
        date: Yup.date().required('Data obrigatória'),
      });
      await schema.validate(values, {
        abortEarly: false,
      });
      dispatch(newContries(data?.continents[0].countries as any));
      formRef.current?.clearField('name');
      formRef.current?.clearField('age');
      formRef.current?.clearField('date');
    } catch (err) {
      const errors = getValidationErrors(err as any);
      formRef.current?.setErrors(errors);
    }
  }  

  return (
    <Container>
      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input 
            placeholder='Data'
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
          <Select name="continent" label="Choose your continent" onChange={(e) => handleContinent(e)}>
            <option key={0} value={0}>
                Selecione
              </option>
            {continents?.map((option:any) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </Select>
          <button type="submit">Submit</button>
        </Form>
      </div>

    </Container>
  )
}


export default SignUp;