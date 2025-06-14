import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "../routes/privateRoutes.jsx";
import { Home } from "../containers/home";
import Registro from "../containers/registroEmployee";

import paths from "../constants/paths.jsx";
import Login from "../containers/login/index.jsx";
import RegistroEpi from "../containers/registrarEpi/index.jsx";
import ListEmployee from "../containers/listEmployee/index.jsx";
import ListEpi from "../containers/listEPI/index.jsx";
import DeliveryEPi from "../containers/deliveryEPi/index.jsx";
import GetHistory from "../containers/getHistory/index.jsx";
import ListHistory from "../containers/listHistory/index.jsx";
import AddStock from "../containers/addStock/index.jsx";

export const Routes = createBrowserRouter([
  {
    path: "/session",
    element: <Login />,
  },

  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: paths.Registro,
            element: <Registro />,
          },
          {
            path: paths.RegistroEpi,
            element: <RegistroEpi />,
          },

          {
            path: paths.ListEmployee,
            element: <ListEmployee />,
          },
           {
            path: paths.ListEpi,
            element: <ListEpi />,
          },
          {
            path: paths.DeliveryEpi,
            element: <DeliveryEPi />,
          },
          {
            path: paths.GetHistory,
            element: <GetHistory />,
          },
          {
            path: paths.ListEmployeeHistory,
            element: <ListHistory />,
          },

           {
            path: paths.AddStock,
            element: <AddStock />,
          },

          {
            index: true,
            element: (
              <p
                style={{
                  color: "white",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                Selecione alguma opção no menu ao lado.
              </p>
            ),
          },
        ],
      },
    ],
  },
]);
