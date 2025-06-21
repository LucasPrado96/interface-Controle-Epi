import { Container, Form, InputContainer, Button, Input, Label  } from "./styles";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'
import { api } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import paths from "../../constants/paths";

export default function EditEpi() {
   const location = useLocation();
  const epiToEdit = location.state?.id;
  const navigate = useNavigate()


    const schema = Yup.object({
  
      name: Yup.string().required('O descrição é obrigatorio'),
      code: Yup.string().required('O código é obrigatorio'),
      quantity: Yup.string().required('A quantidade é obrigatoria'),
      ca: Yup.string().nullable()
    })

    const {register,handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), })
    
      const onSubmit = async (epiInfo) => {
         try{
         await toast.promise(
          api.patch(`/epi/${epiToEdit.id}`, {
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
        navigate(paths.ListEpi)
         } catch(err){
            console.error('Erro no cadastro:', err);
         }
      }


  return (
    <Container>
      <h1>EDITE O EPI</h1>

     <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Descrição</Label>
          <Input type="text" placeholder="Descrição do Epi." {...register("name")}
          defaultValue={epiToEdit.name}
          />
           <p>{errors?.descricao?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Código</Label>
          <Input type="text" placeholder="Digite o cargo." {...register("code")}
          defaultValue={epiToEdit.code}
          />
           <p>{errors?.codigo?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Quantidade</Label>
          <Input type="number"  placeholder="Informe a quantidade." {...register("quantity")}
          defaultValue={epiToEdit.quantity}
          />
           <p>{errors?.quantidade?.message}</p>
        </InputContainer>

          <InputContainer>
          <Label>C.A</Label>
          <Input type="text"  placeholder="Informe o C.A, se houver." {...register("ca")}
          defaultValue={epiToEdit.ca}
          />
           <p>{errors?.ca?.message}</p>
        </InputContainer>

        <InputContainer>
        <Button type="submit">EDITAR EPI</Button>
        </InputContainer>
       
        
     </Form>

    
    </Container>
  );
}
