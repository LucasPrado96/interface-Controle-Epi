import {
  Container,
  Form,
  InputContainer,
  Button,
  Input,
  Label,
  StyledSelect,
} from "./styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export default function AddStock() {
  const [epiOptions, setEpiOptions] = useState({});
  const [selectedEpi, setSelectedEpi] = useState(null);

 

  const schema = Yup.object({
    funcionario_id: Yup.string().required("A ID é obrigatorio"),
    // epi_id: Yup.string().required('A ID do EPI é obrigatório'),
    // nome: Yup.string().required('Selecionar um nome é obrigatório'),
    quantidade: Yup.string().required("A quantidade é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


 

  const onSubmit = async (epiInfo) => {
    try {
      const { data } = await toast.promise(
        api.post("/entrega", {
          funcionario_id: epiInfo.funcionario_id,
          epi_id: epiInfo.epi_id,
          nome: epiInfo.nome,
          quantidade: epiInfo.quantidade,
        }),
        {
          pending: "Entregando EPI...",
          success: "Epi Entregue",
          error: "Não foi possivel Entregar.",
        }
      );
    } catch (err) {
      console.error("Erro no cadastro:", err);
    }
  };

  return (
    <Container>
      <h1>ADICIONAR SALDO</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>


          <InputContainer>
                  <Label>Código</Label>
                  <Input type="text" placeholder="Digite o cargo." {...register("code")}/>
                   <p>{errors?.codigo?.message}</p>
          </InputContainer>
        

        <InputContainer>
          <Label>Quantidade</Label>
          <Input
            type="number"
            placeholder="Informe a quantidade."
            {...register("quantidade")}
          />
          <p>{errors?.quantidade?.message}</p>
        </InputContainer>

        <InputContainer>
          <Button type="submit">ADICIONAR SALDO</Button>
        </InputContainer>
      </Form>
    </Container>
  );
}
