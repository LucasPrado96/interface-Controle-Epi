import paths from "../../constants/paths";

const manualOption = [
  {
    id: 1,
    label: "Registro de Colaborador",
    link: paths.Registro,
  },

  {
    id: 2,
    label: "Consultar Colaboradores",
    link: paths.ListEmployee,
  },

  {
    id: 3,
    label: "Registrar EPI",
    link: paths.RegistroEpi,
  },
  {
    id: 4,
    label: "Consultar EPIs",
    link: paths.ListEpi,
  },

  {
    id: 5,
    label: "Entregar EPI",
    link: paths.DeliveryEpi
  },
  {
    id: 6,
    label: "Consultar fichas",
    link: paths.GetHistory
  },
];

export default manualOption;
