import Styled from "styled-components";
import {colorsTheme} from '../../constants/index'

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

export const Form = Styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center; 
 width: 80%;
 background-color: ${colorsTheme.offwhite};
 border-radius: 15px;
 padding: 25px;
 margin-top: 20px;
 box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

   p{
    font-size: 11px;
    color: red;
    margin-top: 5px;
    height: 10px;
 }
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

export const Button = Styled.button`
width: 100%;
height: 45px;
border-radius: 10px;
outline: none;
border: none;
font-weight: 800;
font-size: 18px;
margin-top: 25px;
background-color: ${colorsTheme.contrasteAmarelo};
cursor: pointer;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

&:hover{
    border: 1px solid black;
}

&:active{
    opacity: 0.6;
}


`;

export const Label = Styled.label`
font-size: 13px;
font-weight: 800;
opacity: 0.6;

`
