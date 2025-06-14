import {
  Container,
  ContentManual

} from "./styles";
import { Header } from "../../components/header";

import { Outlet, useLocation } from "react-router-dom";



export function Home() {
  const location = useLocation()


  return (
    <Container>
      
        <Header path={location.pathname}/>

        <ContentManual>
         <Outlet/>
        </ContentManual>
    </Container>
  );
}
