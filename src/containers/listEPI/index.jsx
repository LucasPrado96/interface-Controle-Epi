import { Container, DivTable, StyledAddIcon, StyledDeleteIcon, } from "./styles";


import {api} from '../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";





export default function ListEpi() {
const  [epi, setEpi] = useState([])
const navigate = useNavigate()


useEffect(() => {
  async function getEmployee(){
    const {data} = await api.get('epi')
      setEpi(data)
  }

  getEmployee()
 
},[])

function AddStock(id){
navigate(paths.AddStock, {state: {id}})
}

// function EditEpi(id){
// navigate(paths.EditEpi, {state: {id}})
// }
  

async function DeleteEpi(id){
  const confirmDelete = window.confirm('Tem certeza que deseja excluir esse Epi?')
  

  if(!confirmDelete) return

  try{
    await api.delete(`/epi/${id}`)
    alert('Epi deletado com sucesso')
    setEpi(prevsepi => prevsepi.filter(epi => epi.id !== id))
  } catch(err){
       console.error('erro', err)
      alert('Erro ao deletar o produto')
  }
}

  return (
    <Container>
      <h1>LISTA DE EPI</h1>


      

     <DivTable>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Descrição do Epi</TableCell>
            <TableCell >ID</TableCell>
            <TableCell  align="center">Quantidade</TableCell>
            <TableCell  align="center">C.A</TableCell>
            <TableCell align="center">Adicionar Saldo</TableCell>
            {/* <TableCell align="center">Editar Epi</TableCell> */}
            <TableCell ></TableCell>
            
         
          </TableRow>
        </TableHead>
        <TableBody>
          {epi.map((epi) => (
            <TableRow
              key={epi.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {epi.name}
              </TableCell>
              <TableCell >{epi.id}</TableCell>
              <TableCell  align="center">{epi.quantity}</TableCell>
              <TableCell  align="center">{epi.ca}</TableCell>
              <TableCell  align="center">{<StyledAddIcon onClick={() => {AddStock(epi)}}/>}</TableCell>
              {/* <TableCell  align="center">{<StyledEditIcon onClick={() => {EditEpi(epi)}}/>}</TableCell> */}
              <TableCell  align="center">{<StyledDeleteIcon onClick={() => {DeleteEpi(epi.id)}}/>}</TableCell>
              
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       
        
     </DivTable>
       

    </Container>
  );
}
