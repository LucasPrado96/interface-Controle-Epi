import Styled from "styled-components";

import { colorsTheme } from "../../constants";




export const Container = Styled.div`
width: 100%;
min-height: 100vh;
background-color: ${colorsTheme.azulRais};
display: flex;
justify-content: center;


@media(max-width: 580px ){
    display: flex;
    flex-direction: column;
}

`;


export const ContentManual = Styled.div`
width: 70%;
padding: 20px;


@media(max-width: 580px ){
   width: 100%;
}
`;

export const TitlesManual = Styled.div`

`









