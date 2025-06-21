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

import { useLocation, useNavigate } from "react-router-dom";

export default function AddStock() {
  const location = useLocation();
  const epiInfo = location.state?.id;
  const navigate = useNavigate();

  const schema = Yup.object({
    code: Yup.string().required("Código é obrigatório"),
    quantity: Yup.number().required("A quantidade é obrigatória"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (epiInfo) => {
    try {
      await toast.promise(
        api.patch("/epi/add-estoque", {
          code: epiInfo.code,
          quantity: epiInfo.quantity,
        }),
        {
          pending: "Adicionando Saldo...",
          success: "Saldo Adicionado",
          error: "Não foi possivel Adicionar.",
        }
      );
      navigate("/epi");
    } catch (err) {
      console.error("Erro ao adicionar saldo:", err);
    }
  };

  return (
    <Container>
      <h1>ADICIONAR SALDO</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Código</Label>
          <Input
            type="text"
            placeholder="Digite o cargo."
            {...register("code")}
            defaultValue={epiInfo.code}
          />
          <p>{errors?.codigo?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Quantidade</Label>
          <Input
            type="number"
            placeholder="Informe a quantidade."
            {...register("quantity")}
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
