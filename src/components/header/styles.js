import { Link } from 'react-router-dom'
import Styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { colorsTheme } from "../../constants";


const slideDown = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = Styled.div`
    align-items: center;
    justify-content: space-between;
    background-color: ${colorsTheme.azulContrast};
  
    width: 30%;
   
    @media(max-width: 580px) {
      width: 100%;
    }
  
`;

export const HeaderTitle = Styled.div`
display: flex;
align-items: center;
gap: 40px;
padding: 15px;

@media(max-width: 580px){
  justify-content: center;

}

h2{
  padding-left: 10px;
  color: ${colorsTheme.font};


}

img{
  width: 150px;


  @media(max-width: 580px){
    width: 130px;
}

@media(max-width: 768px){
  width: 100px;
  }  
  
  @media(max-width: 853px){
  width: 100px;
  }   

}

`





export const HeaderResponsivo = Styled.div`
width: 100%;
display: flex;
transition: 200ms; 
overflow: hidden;
justify-content: start;
flex-direction: column;
cursor: pointer;




@media (max-width: 680px){
width: 100%;
}
`

export const OptionMenu = Styled.div`
background-color: ${props => props.$Active ? colorsTheme.backgroundYellow : colorsTheme.contrasteAmarelo};
border: 1px solid white;
width: 100%;
padding: 10px;
border-radius: 3px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
animation: ${slideDown} 0.5s ease forwards;



&:hover{
  background-color: ${colorsTheme.hoverYellow};
}
`

export const LinkManual = Styled(Link)`
    font-size: 25px;
    text-decoration: none;
    font-weight: bold;
  
    color: ${colorsTheme.black};
    cursor : pointer;
   
   
    
    
    &:hover{
        text-decoration: underline;
    }

`


export const MenuIconStyled = Styled(MenuIcon)`
cursor: pointer;
color: ${colorsTheme.fontPrimaria};
margin-left: 20px ;
color: ${colorsTheme.font};


&:hover{
    opacity: 0.5;
}

`