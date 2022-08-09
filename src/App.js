/* eslint-disable no-unused-vars */
import { ConfigProvider } from "antd-mobile";
import "./App.css";
import AppRouter from "./Components/router/AppRouter";
import es_ES from "antd-mobile/es/locales/es-ES";
import { GlobalContext } from "./Components/context/GlobalContext";
import React, { useState } from "react";
import moment from "moment";
import AuthProvider from "./auth/AuthProvider";

const defaultSingle = moment().format("DD/MM/YYYY");

const App = () => {
  //*States creados para utilizarlos globalmente
  const [fecha, setFecha] = useState(defaultSingle); //*Se utiliza para el Calendario.js

  return (
    <AuthProvider>
      <ConfigProvider locale={es_ES}>
        <GlobalContext.Provider
          value={{
            fecha,
            setFecha,
          }}
        >
          <AppRouter />
        </GlobalContext.Provider>
      </ConfigProvider>
    </AuthProvider>
  );
};

export default App;
