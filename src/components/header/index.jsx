import { useState } from "react";
import { Container, HeaderTitle,  HeaderResponsivo, OptionMenu, MenuIconStyled, LinkManual} from "./styles";
import manualOption from "./manual";
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.png'


export function Header({path}) {
  const [isOpen, setIsOpen] = useState(false);


  function Open(){
    setIsOpen(!isOpen)  
  }

  return (
    <Container>
      <HeaderTitle>
      <MenuIconStyled fontSize='large' onClick={Open}/>
   
      {/* <img src={Logo}/> */}
      </HeaderTitle>
      
      <HeaderResponsivo>
        {isOpen &&  (
          <div>
            {manualOption && manualOption.map(item => (
              <OptionMenu key={item.id} $isActive={path === item.link}>
                <LinkManual onClick={Open} to={item.link}>{item.label}</LinkManual>
              </OptionMenu>
            ))}
          </div>
        )}
      </HeaderResponsivo>


   

  
    </Container>
  );
}

Header.propTypes={
  path: PropTypes.string
}