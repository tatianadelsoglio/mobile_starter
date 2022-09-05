/* eslint-disable no-unused-vars */
import { ConfigProvider } from "antd-mobile";
import "./App.css";
import AppRouter from "./Components/router/AppRouter";
import es_ES from "antd-mobile/es/locales/es-ES";
import { GlobalContext } from "./Components/context/GlobalContext";
import React, { useEffect, useState } from "react";
import AuthProvider from "./auth/AuthProvider";
import { ApolloProvider, useQuery } from "@apollo/client";
import Client from "./config/apolloClientConfig";
import { GET_TAREAS } from "./graphql/queries/Tarea";



const App = () => {


  //*States creados para utilizarlos globalmente
  const [userData, setUserData] = useState({});
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  const [tareaSeleccionada, setTareaSeleccionada] = useState({});
  const [listaTareas, setListaTareas] = useState({});
  const [plataforma, setPlataforma] = useState();

  useEffect(() => {
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
              listaTareas,
              setListaTareas,
              plataforma,
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
