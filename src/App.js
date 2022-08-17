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

const defaultSingle = moment().format("DD-MM-YYYY");

const App = () => {
  //*States creados para utilizarlos globalmente
  const [fecha, setFecha] = useState(defaultSingle); //*Se utiliza para el Calendario.js
  const [userData, setUserData] = useState({});
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [infoUser, setInfoUser] = useState({});


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
              fecha,
              setFecha,
              infoUser,
              setInfoUser,
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
