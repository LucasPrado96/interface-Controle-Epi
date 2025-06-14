import { Container, Form, InputContainer, Button, Input, Label  } from "./styles";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'
import { api } from "../../services/api";

export default function RegistroEpi() {
  
    const schema = Yup.object({
  
      name: Yup.string().required('O descrição é obrigatorio'),
      code: Yup.string().required('O código é obrigatorio'),
      quantity: Yup.string().required('A quantidade é obrigatoria'),
      ca: Yup.string().nullable()
    })

    const {register,handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), })
    
      const onSubmit = async (epiInfo) => {
         try{
          const { data } = await toast.promise(
          api.post('/epi', {
            name: epiInfo.name,
            code: epiInfo.code,
            quantity: epiInfo.quantity,
            ca: epiInfo.ca
           
          }),
          {
            pending: 'Registrando EPI...',
            success: 'Epi Registrado',
            error: 'Não foi possivel Registrar.',
          }
        )
         } catch(err){
            console.error('Erro no cadastro:', err);
         }
      }


  return (
    <Container>
      <h1>REGISTRE UM NOVO EPI</h1>

     <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Descrição</Label>
          <Input type="text" placeholder="Descrição do Epi." {...register("name")}/>
           <p>{errors?.descricao?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Código</Label>
          <Input type="text" placeholder="Digite o cargo." {...register("code")}/>
           <p>{errors?.codigo?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Quantidade</Label>
          <Input type="number"  placeholder="Informe a quantidade." {...register("quantity")}/>
           <p>{errors?.quantidade?.message}</p>
        </InputContainer>

          <InputContainer>
          <Label>C.A</Label>
          <Input type="text"  placeholder="Informe o C.A, se houver." {...register("ca")}/>
           <p>{errors?.ca?.message}</p>
        </InputContainer>

        <InputContainer>
        <Button type="submit">REGISTRAR EPI</Button>
        </InputContainer>
       
        
     </Form>

    
    </Container>
  );
}
