import { Container, DivTable, Button  } from "./styles";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';







import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import paths from '../../constants/paths'


import { FormatDate } from "../../utils/formatDate";
import { useLocation, useNavigate } from "react-router-dom";




export default function ListHistory() {
const navigate = useNavigate()
const location = useLocation()
const EmployHistory = location.state?.data
const employ = EmployHistory.funcionario
const deliveredEpi = EmployHistory.episEntregue




function ExportPDF(){
  const doc = new jsPDF();



  doc.setFontSize(16);
  doc.text('Ficha de Entrega de EPIs', 105, 20, null, null, 'center');
  

  doc.setFontSize(12);
  doc.text(`Colaborador: ${employ.nome}`, 15, 40);
  doc.text(`ID: ${employ.id}`, 15, 45);
  doc.text(`Cargo: ${employ.cargo}`, 15, 50);
  doc.text(`Data de Admissão: ${FormatDate(employ.data_admissao)}`, 15, 55);
 


  const rows = deliveredEpi.map(epi => [
    epi.epi ? epi.epi.name : epi.nome_epi,
    epi.epi ? epi.epi.ca : epi.ca,
    epi.quantidade,
    FormatDate(epi.data_entrega)
  ]);

  autoTable(doc, {
    theme: 'grid',
    head: [["EPI", "C.A", 'Quantidade', 'Data de Entrega', 'Assinatura']],
    body: rows,
    startY: 60,
     headStyles: {
      fillColor: [41, 128, 185],
      textColor: 255,
    },
  })

  doc.save(`ficha-funcionario-${employ.id}.pdf`)


}

function ComeBack(){
  navigate(paths.ListEmployee)
}


  return (
    <Container>
      <h1>HISTÓRICO DE ENTREGA DE EPIS</h1>
       <Button onClick={ComeBack}>VOLTAR</Button>

      

     <DivTable>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor: '#ffffff'}}>
            <TableRow  >
                  <TableCell><img style={{width: '80px'}} /></TableCell>
                  <TableCell ></TableCell>
                  <TableCell style={{fontSize: '14px', }} align="center">FICHA DE CONTROLE DE EPI</TableCell>
                  <TableCell ></TableCell>
                  <TableCell ></TableCell>
            </TableRow>
          <TableRow >
            <TableCell >Colaborador: {employ.nome}</TableCell>
            <TableCell >ID: {employ.id}</TableCell>
            <TableCell >Cargo: {employ.cargo}</TableCell>
            <TableCell >Data de Admissão {FormatDate(employ.data_admissao)}</TableCell>
            <TableCell ></TableCell>
          
           
          </TableRow>
        </TableHead>

       <TableBody>
          {deliveredEpi.map((epi) => (
            <TableRow
              key={epi.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {epi.epi? epi.epi.name : epi.nome_epi}
              </TableCell>
              <TableCell >C.A: {epi.epi? epi.epi.ca : epi.ca}</TableCell>
              <TableCell> Quantidade: {epi.quantidade}</TableCell>
              <TableCell>Data da entrega: {FormatDate(epi.data_entrega)}</TableCell>
              <TableCell></TableCell>
           
              
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       
        
     </DivTable>
       
          <Button onClick={ExportPDF}>{<FileDownloadIcon fontSize="small"/>}EXPORTAR</Button>
    </Container>
  );
}
