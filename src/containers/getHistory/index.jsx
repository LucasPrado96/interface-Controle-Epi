import {
  Container,
  Form,
  InputContainer,
  Button,
  Input,
  Label,

} from "./styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";


export default function GetHistory() {
const navigate = useNavigate()



  

  const schema = Yup.object({
    funcionario_id: Yup.string().required("A ID é obrigatorio"),
   
  });

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


 

  const onSubmit = async (epiInfo) => {
   
    try {
      const { data } = await toast.promise(
        
        api.get(`/ficha/${epiInfo.funcionario_id}`), 
       
        {
          pending: "Buscando ficha...",
          success: "Ficha encontrada com sucesso",
          error: "Ficha não encontrada.",
        },
        
      );
       navigate(paths.ListEmployeeHistory, {state: {data}})
       
    } catch (err) {
      console.error("Erro ao buscar a ficha:", err);
    }
  };

  return (
    <Container>
      <h1>CONSULTAR FICHA</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>ID do colaborador</Label>
          <Input
            type="text"
            placeholder="Digite a ID."
            {...register("funcionario_id")}
          
        
          />
          <p>{errors?.funcionario_id?.message}</p>
        </InputContainer>


        <InputContainer>
          <Button type="submit">BUSCAR FICHA</Button>
        </InputContainer>
      </Form>
    </Container>
  );
}
