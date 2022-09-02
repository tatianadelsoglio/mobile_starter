/* eslint-disable no-unused-vars */
import { ConfigProvider } from "antd-mobile";
import "./App.css";
import AppRouter from "./Components/router/AppRouter";
import es_ES from "antd-mobile/es/locales/es-ES";
import { GlobalContext } from "./Components/context/GlobalContext";
import React, { useState } from "react";
import moment from "moment";
import AuthProvider from "./auth/AuthProvider";
import { ApolloProvider } from "@apollo/client";
import Client from "./config/apolloClientConfig";



const App = () => {
  //*States creados para utilizarlos globalmente
  const [userData, setUserData] = useState({});
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  const [tareaSeleccionada, setTareaSeleccionada] = useState({});
  const [listaTareas, setListaTareas] = useState({});

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
