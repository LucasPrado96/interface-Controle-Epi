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

export default function DeliveryEPi() {
  const [epiOptions, setEpiOptions] = useState({});
  const [selectedEpi, setSelectedEpi] = useState(null);

  useEffect(() => {
    async function FetchEpis() {
      const { data } = await api.get("epi");
      const options = data.map((epiOption) => ({
        value: epiOption.id,
        label: epiOption.name,
      }));

      setEpiOptions(options);
    }
    FetchEpis();
  }, []);

  const schema = Yup.object({
    funcionario_id: Yup.string().required("A ID é obrigatorio"),
    // epi_id: Yup.string().required('A ID do EPI é obrigatório'),
    // nome: Yup.string().required('Selecionar um nome é obrigatório'),
    quantidade: Yup.string().required("A quantidade é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (selectedEpi) {
      setValue("epi_id", selectedEpi.value);
      setValue("nome", selectedEpi.label);
    }
  }, [selectedEpi, setValue]);
 

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
      <h1>ENTREGA DO EPI</h1>

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

        {/* <InputContainer>
          <Label>ID do Epi</Label>
          <Input
            type="text"
            placeholder="Digite a ID do EPI."
           
           
          />
          <p>{errors?.epi_id?.message}</p>
        </InputContainer> */}

        <InputContainer>
          <Label>Descrição do EPI </Label>
          <StyledSelect
            type="text"
            placeholder="Selecione o EPI."
            options={epiOptions}
            value={selectedEpi}
            onChange={setSelectedEpi}
          />
          <p>{errors?.nome?.message}</p>
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
          <Button type="submit">ENTREGAR EPI</Button>
        </InputContainer>
      </Form>
    </Container>
  );
}
