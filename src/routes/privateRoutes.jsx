import { Navigate, Outlet } from "react-router-dom"
// import PropTypes from "prop-types"




function isTokenExpired(token){
    if(!token) return true;

    const [, payloadBase64] = token.split('.')

    if(!payloadBase64) return true

    try{
      const payloadJSON = atob(payloadBase64);
      const payload = JSON.parse(payloadJSON);

      const exp = payload.exp;

      if(!exp) return true;

      const now = Math.floor(Date.now() / 1000);

      return exp < now;
    } catch(err){
      console.error('Erro ao decodificar o token:', err)
      return true
    }
  } //função para verificar a existencia e validade do token 

 function PrivateRoutes(){
const user = localStorage.getItem('admControlEpi:UserData')

if(!user){
  return <Navigate to="/session" />
}

const parsedUserData = JSON.parse(user);
const token = parsedUserData.token;

if(!token || isTokenExpired(token)) {
  localStorage.removeItem('admControlEpi:UserData')
  return <Navigate to="/session" />
}

 return <Outlet />;


  

  //   const user = localStorage.getItem('admControlEpi:UserData')

    
  // return user ? <Outlet /> : <Navigate to="/session" />;



};

export default PrivateRoutes

// PrivateRoutes.propType ={
//     element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
// }
// PrivateRoutes.propTypes = {
//     element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
// }
