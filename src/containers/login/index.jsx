import { Container, Form, InputContainer, Button, Input, Label  } from "./styles";
import logo from '../../assets/logo.png'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'
import { api } from "../../services/api";
import {  useNavigate } from "react-router-dom";



export default function Login() {
const navigate = useNavigate()

const schema = Yup.object({
  email: Yup.string().email('Digite um Email Válido.').required('O Email é obrigatório'),
  password: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres').required('A senha é obrigatória'),
}).required()

 const {register,handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), })

 const onSubmit = async userdata =>  {
  try {
    const { data } = await toast.promise(
      api.post('/session', {
        email: userdata.email,
        password: userdata.password,
      }),
      {
        pending: 'Efetuando login...',
        success: 'Seja Bem-vindo(a)',
        error: 'Email ou senha incorretos.',
      }
    );

  
    if (data) {
      localStorage.setItem('admControlEpi:UserData', JSON.stringify(data));
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else{
       navigate('/session');
    }

  } catch (error) {
    console.error('Erro no login:', error);
  }
  
  
 };




  return (
    <Container>

      <div className="headerbox">
        {/* <img src={logo}/> */}
        <h1>FAÇA SEU LOGIN</h1>
      </div>
    

     <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Email</Label>
          <Input type="text" placeholder="Digite seu email" {...register("email")}/>
           <p>{errors?.email?.message}</p>
        </InputContainer>

        <InputContainer>
          <Label>Cargo</Label>
          <Input type="password" placeholder="Digite sua senha" {...register("password")}/>
           <p>{errors?.password?.message}</p>
        </InputContainer>

        

        <InputContainer>
        <Button type="submit">ENTRAR</Button>
        </InputContainer>
       
        
     </Form>

    
    </Container>
  );
}
