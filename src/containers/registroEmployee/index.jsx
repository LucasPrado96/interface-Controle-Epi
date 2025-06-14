import { Container, Form, InputContainer, Button, Input, Label  } from "./styles";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'
import { api } from "../../services/api";

import { useState } from "react";



export default function Registro() {
const [dataAdmissao, setdataAdmissao] = useState('')
 

  const schema = Yup.object({

    nome: Yup.string().required('O nome é obrigatorio'),
    cargo: Yup.string().required('O cargo é obrigatorio'),
    data_admissao: Yup.string().required('A data é obrigatoria')
  })

  const {register,handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), })

  const onSubmit = async (employinfo) => {
     try{
      const { data } = await toast.promise(
      api.post('/funcionarios', {
        nome: employinfo.nome,
        cargo: employinfo.cargo,
        data_admissao: convertedToISO(dataAdmissao)
      }),
      {
        pending: 'Registrando Colaborador...',
        success: 'Colaborador Registrado',
        error: 'Não foi possivel Cadastrar.',
      }
    )
     } catch(err){
        console.error('Erro no cadastro:', err);
     }
  }
  

  

  function FormatData(value){
    const onlynumbers = value.replace(/\D/g, '')

    let formated = onlynumbers

    if(onlynumbers.length > 2 && onlynumbers.length <= 4) {
      formated = onlynumbers.replace(/(\d{2})(d{1,2})/, "$1/$2");
    } else if (onlynumbers.length > 2 ){
      formated = onlynumbers.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3")
    }
    return formated
  }

  function convertedToISO(data) {
    const [day, month, year ] = data.split('/');
    return `${year}-${month}-${day}`;
  }

  return (
    <Container>
      <h1>REGISTRE UM NOVO COLABORADOR</h1>

     <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Nome</Label>
          <Input type="text" placeholder="Digite o nome"  {...register("nome")}/>
          <p>{errors?.nome?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Cargo</Label>
          <Input type="text" placeholder="Digite o cargo"  {...register("cargo")}/>
          <p>{errors?.cargo?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Data de admissão</Label>
          <Input type="text"  placeholder="Digite a data de admissão"  {...register("data_admissao")}
            value={dataAdmissao}
            maxLength={10}
            onChange={(e) => {
              const formated = FormatData(e.target.value)
              setdataAdmissao(formated)
            }}
          />
          <p>{errors?.data_admissao?.message}</p>
        </InputContainer>

        <InputContainer>
        <Button type="submit">REGISTRAR</Button>
        </InputContainer>
       
        
     </Form>

    
    </Container>
  );
}
