import { Container, DivTable, StyledPaperIcon, StyledDeleteIcon } from "./styles";


import {api} from '../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";

import { FormatDate } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";



export default function ListEmployee() {
const  [employee, setEmployee] = useState([])
const navigate = useNavigate()


useEffect(() => {
  async function getEmployee(){
    const {data} = await api.get('funcionarios')
      setEmployee(data)
  }

  getEmployee()
 
},[])

async function SelectEmployee(id){
  const {data} = await api.get(`/ficha/${id}`)
  navigate(paths.ListEmployeeHistory, {state: {data}})
  console.log(data)
 
}


async function DeleteEmployee(id){
  const confirmDelete = window.confirm('Tem certeza que deseja excluir esse Colaborador?')
  

  if(!confirmDelete) return

  try{
    await api.delete(`/funcionarios/${id}`)
    alert('Colaborador deletado com sucesso')
    setEmployee(prevsEmployee => prevsEmployee.filter(employ => employ.id !== id))
  } catch(err){
       console.error('erro', err)
      alert('Erro ao deletar o produto')
  }
}
  
  return (
    <Container>
      <h1>LISTA DOS FUNCIONARIOS</h1>
 

      

     <DivTable>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell >ID</TableCell>
            <TableCell >Cargo</TableCell>
            <TableCell >Data de Admissão</TableCell>
            <TableCell align="center">Ficha de EPI</TableCell>
            <TableCell ></TableCell>
            
         
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((employ) => (
            <TableRow
              key={employ.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employ.nome}
              </TableCell>
              <TableCell >{employ.id}</TableCell>
              <TableCell>{employ.cargo}</TableCell>
              <TableCell>{FormatDate(employ.data_admissao)}</TableCell>
              <TableCell align="center" >{<StyledPaperIcon onClick={() => SelectEmployee(employ.id)} />}</TableCell>
              <TableCell align="center">{<StyledDeleteIcon onClick={() => DeleteEmployee(employ.id)}/>}</TableCell>
              
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       
        
     </DivTable>
       

    </Container>
  );
}
