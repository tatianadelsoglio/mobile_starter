/* eslint-disable no-unused-vars */
import { ConfigProvider } from "antd-mobile";
import "./App.css";
import AppRouter from "./Components/router/AppRouter";
import es_ES from "antd-mobile/es/locales/es-ES";
import { GlobalContext } from "./Components/context/GlobalContext";
import React, { useEffect, useState } from "react";
import AuthProvider from "./auth/AuthProvider";
import { ApolloProvider } from "@apollo/client";
import Client from "./config/apolloClientConfig";
import { getDataInStorage } from "./Components/storage/manageStorage";


// const itemListaTarea = [
//   {
//     id: 23,
//     contacto: "Adrian Sabo",
//     cliente: "La Ganadera",
//     fechaHora: "01/09/2022 08:30",
//     estado: 1,
//     asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
//     prioridad: "BAJA",
//     tipoTarea: "Visita de campo",
//     tipo: "#T",
//     origen: "NEGOCIO",
//     anexo: [
//       {
//         id: 3,
//         texto: "nota numero 1, primera prueba",
//         fecha: "01/09/2022",
//         prioridad: "ALTA",
//         tipo: "#N",
//       },
//       {
//         id: 4,
//         nombre: "paisaje-02",
//         descripcion: "foto de la entrada al campo",
//         fecha: "01/09/2022 13:45",
//         tipo: "#A",
//         peso: "2035 Kb",
//       },
//     ],
//   },
//   {
//     id: 22,
//     contacto: "Adrian Sabo",
//     cliente: "La Ganadera",
//     fechaHora: "01/09/2022 08:30",
//     estado: 1,
//     asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
//     prioridad: "ALTA",
//     tipoTarea: "Visita de campo",
//     tipo: "#T",
//     origen: "NEGOCIO",
//     anexo: [
//       {
//         id: 3,
//         texto: "nota numero 1, primera prueba",
//         fecha: "01/09/2022",
//         prioridad: "ALTA",
//         tipo: "#N",
//       },
//       {
//         id: 4,
//         nombre: "paisaje-02",
//         descripcion: "foto de la entrada al campo",
//         fecha: "01/09/2022 13:45",
//         tipo: "#A",
//         peso: "2035 Kb",
//       },
//     ],
//   },
//   {
//     id: 21,
//     contacto: "Adrian Sabo",
//     cliente: "La Ganadera",
//     fechaHora: "22/08/2022 08:30",
//     estado: 1,
//     asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
//     prioridad: "ALTA",
//     tipoTarea: "Visita de campo",
//     tipo: "#T",
//     origen: "NEGOCIO",
//     anexo: [
//       {
//         id: 3,
//         texto: "nota numero 1, primera prueba",
//         fecha: "23/08/2022",
//         prioridad: "ALTA",
//         tipo: "#N",
//       },
//       {
//         id: 4,
//         nombre: "paisaje-02",
//         descripcion: "foto de la entrada al campo",
//         fecha: "24/08/2022 13:45",
//         tipo: "#A",
//         peso: "2035 Kb",
//       },
//     ],
//   },
//   {
//     id: 20,
//     contacto: "Adrian Sabo",
//     cliente: "La Ganadera",
//     fechaHora: "22/08/2022 08:30",
//     estado: 1,
//     asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
//     prioridad: "ALTA",
//     tipoTarea: "Visita de campo",
//     tipo: "#T",
//     origen: "NEGOCIO",
//     anexo: [
//       {
//         id: 3,
//         texto: "nota numero 1, primera prueba",
//         fecha: "23/08/2022",
//         prioridad: "ALTA",
//         tipo: "#N",
//       },
//       {
//         id: 4,
//         nombre: "paisaje-02",
//         descripcion: "foto de la entrada al campo",
//         fecha: "24/08/2022 13:45",
//         tipo: "#A",
//         peso: "2035 Kb",
//       },
//     ],
//   },
//   {
//     id: 1,
//     contacto: "Adrian Sabo",
//     cliente: "La Ganadera",
//     fechaHora: "22/08/2022 08:30",
//     estado: 1,
//     asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
//     prioridad: "ALTA",
//     tipoTarea: "Visita de campo",
//     tipo: "#T",
//     origen: "NEGOCIO",
//     anexo: [
//       {
//         id: 3,
//         texto: "nota numero 1, primera prueba",
//         fecha: "23/08/2022",
//         prioridad: "ALTA",
//         tipo: "#N",
//       },
//       {
//         id: 4,
//         nombre: "paisaje-02",
//         descripcion: "foto de la entrada al campo",
//         fecha: "24/08/2022 13:45",
//         tipo: "#A",
//         peso: "2035 Kb",
//       },
//     ],
//   },
//   {
//     id: 2,
//     contacto: "Horacio Mercol",
//     cliente: "La Ganadera",
//     fechaHora: "05/09/2022 08:40",
//     estado: 1,
//     asunto: "Visitar Campo Oeste",
//     prioridad: "ALTA",
//     tipoTarea: "Visita de campo",
//     tipo: "#T",
//     origen: "MAIL",
//     anexo: [
//       {
//         id: 3,
//         texto: "nota numero 1, primera prueba",
//         fecha: "22/08/2022",
//         prioridad: "ALTA",
//         tipo: "#N",
//       },
//       {
//         id: 4,
//         nombre: "paisaje-02",
//         descripcion: "foto de la entrada al campo",
//         fecha: "20/08/2022 13:45",
//         tipo: "#A",
//         peso: "2035 Kb",
//       },
//     ],
//   },
//   {
//     id: 3,
//     contacto: "Jorge Mayorga",
//     cliente: "La Ganadera",
//     fechaHora: "06/09/2022 10:00",
//     estado: 1,
//     asunto: "Llamar a Jorge para Venta de Herbicidas",
//     prioridad: "MEDIA",
//     tipoTarea: "Visita de campo",
//     origen: "TELEFONO",
//     anexo: [
//       {
//         id: 3,
//         texto: "nota numero 1, primera prueba",
//         fecha: "22/08/2022",
//         prioridad: "ALTA",
//         tipo: "#N",
//       },
//     ],
//   },
//   {
//     id: 4,
//     contacto: "Aida Campos",
//     cliente: "La Ganadera",
//     fechaHora: "29/08/2022 11:15",
//     estado: 1,
//     asunto: "Venta Trigo",
//     prioridad: "BAJA",
//     tipoTarea: "Visita de campo",
//     anexo: [
//       {
//         id: 4,
//         nombre: "paisaje/02",
//         descripcion: "foto de la entrada al campo",
//         fecha: "20/08/2022 13:45",
//         tipo: "#A",
//         peso: "2035 Kb",
//       },
//     ],
//   },
//   {
//     id: 5,
//     contacto: "Adrian Sabo",
//     cliente: "Vitalforce",
//     fechaHora: "30/08/2022 09:30",
//     estado: 1,
//     asunto: "Venta de Maíz",
//     prioridad: "MEDIA",
//     tipoTarea: "Visita de campo",
//   },
//   {
//     id: 6,
//     contacto: "Florencia Caverzasi",
//     cliente: "Vitalforce",
//     fechaHora: "31/08/2022 09:30",
//     estado: 1,
//     asunto: "Venta de Soja",
//     prioridad: "MEDIA",
//     tipoTarea: "Visita de campo",
//   },
//   {
//     id: 7,
//     contacto: "Adrian Sabo",
//     cliente: "Vitalforce",
//     fechaHora: "01/09/2022 09:40",
//     estado: 1,
//     asunto: "Venta de Maíz para temporada 2223",
//     prioridad: "MEDIA",
//     tipoTarea: "Visita de campo",
//   },
//   {
//     id: 8,
//     contacto: "Edgar jazz",
//     cliente: "Vitalforce",
//     fechaHora: "02/09/2022 10:00",
//     estado: 1,
//     asunto: "Llamar para conversar sobre nuevos insumos",
//     prioridad: "BAJA",
//     tipoTarea: "Visita de campo",
//   },
//   {
//     id: 9,
//     contacto: "Adrian Sabo",
//     cliente: "Darregueira",
//     fechaHora: "17/08/2022 10:00",
//     estado: 1,
//     asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
//     prioridad: "MEDIA",
//     tipoTarea: "Visita de campo",
//   },
//   {
//     id: 10,
//     contacto: "Horacio Mercol",
//     cliente: "Darregueira",
//     fechaHora: "17/08/2022 10:00",
//     estado: 1,
//     asunto: "Visitar Campo Oeste",
//     prioridad: "BAJA",
//     tipoTarea: "Visita de campo",
//   },
//   {
//     id: 11,
//     contacto: "Jorge Mayorga",
//     cliente: "Darregueira",
//     fechaHora: "18/08/2022 10:30",
//     estado: 1,
//     asunto: "Llamar a Jorge para Venta de Herbicidas",
//     prioridad: "ALTA",
//     tipoTarea: "Visita de campo",
//   },
//   {
//     id: 12,
//     contacto: "Aida Campos",
//     cliente: "Darregueira",
//     fechaHora: "16/08/2022 11:00",
//     estado: 1,
//     asunto: "Venta Trigo",
//     prioridad: "ALTA",
//     tipoTarea: "Visita de campo",
//   },
//   {
//     id: 13,
//     contacto: "Aida Campos",
//     cliente: "Darregueira",
//     fechaHora: "05/10/2022 11:00",
//     estado: 1,
//     asunto: "Venta Trigo",
//     prioridad: "ALTA",
//     tipoTarea: "Visita de campo",
//   },
// ];

const App = () => {

  //*States creados para utilizarlos globalmente
  const [userData, setUserData] = useState({});
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  const [tareaSeleccionada, setTareaSeleccionada] = useState({});
  const [tareas, setTareas] = useState();
  const [plataforma, setPlataforma] = useState();
  const [userId, setUserId] = useState(null);

  useEffect(() => {

    getDataInStorage("userInfo").then((res) => {
      if (res) {
        setUserData(res);
        setUserId(res.idUsuario);

      } else {
        setUserData({});
      }
    });

    if (navigator.userAgent.toUpperCase().includes("IPHONE")) {
      setPlataforma("IPHONE");
    } else {
      setPlataforma("OTRO");
    }
  }, [])
  
  return (
    <AuthProvider>
      <ApolloProvider client={Client}>
        <ConfigProvider locale={es_ES}>
          <GlobalContext.Provider
            value={{
              userData,
              setUserData,
              logoutAlert,
              setLogoutAlert,
              infoUser,
              setInfoUser,
              tareaSeleccionada,
              setTareaSeleccionada,
              tareas,
              setTareas,
              plataforma,
              userId, 
              setUserId
            }}
          >
            <AppRouter />
          </GlobalContext.Provider>
        </ConfigProvider>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default App;
