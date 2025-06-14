import Styled from "styled-components";
import {colorsTheme} from '../../constants/index'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DeleteIcon from '@mui/icons-material/Delete';


export const Container = Styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
 align-items: center;



h1{
    color: white;
    font-size: 35px;
    text-align: center;
    margin-top: 20px;

    @media(max-width: 580px){
        font-size: 20px;
    }

    @media(max-width: 768px){
        font-size: 20px;
    }

    @media(max-width: 820px){
        font-size: 20px;
         }   
 }


`;

export const DivTable = Styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center; 
 width: 100%;
 background-color: ${colorsTheme.offwhite};
 border-radius: 15px;
 padding: 25px;
 margin-top: 20px;
 box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
 `;
export const InputContainer = Styled.div`
 display: flex;
 flex-direction: column;
 width: 50%;
 justify-content: center; 
 margin-top: 10px;
`;

export const Input = Styled.input`
width: 100%;
height: 45px;
border-radius: 10px;
outline: none;
border: none;
padding: 8px;
font-size: 18px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &::placeholder {
    opacity: 0.4; 
  }

 `;

// export const Button = Styled.button`
// width: 60%;
// height: 30px;
// border-radius: 5px;
// outline: none;
// border: none;
// font-weight: 800;
// font-size: 9px;
// margin-top: 25px;
// background-color: ${colorsTheme.contrasteAmarelo};
// cursor: pointer;
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

// &:hover{
//     background-color: ${colorsTheme.backgroundYellow};
// }

// &:active{
//     opacity: 0.6;
// }
// `;

export const Label = Styled.label`
font-size: 13px;
font-weight: 800;
opacity: 0.6;

`

export const StyledPaperIcon = Styled(ReceiptLongIcon)`

color: ${colorsTheme.backgroundYellow};
cursor: pointer;
`

export const StyledDeleteIcon = Styled(DeleteIcon)`

color: red;
cursor: pointer;
`