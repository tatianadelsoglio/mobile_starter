/* eslint-disable no-unused-vars */
import { ConfigProvider } from "antd-mobile";
import "./App.css";
import AppRouter from "./Components/router/AppRouter";
import es_ES from "antd-mobile/es/locales/es-ES";
import { GlobalContext } from "./Components/context/GlobalContext";
import React, { useState } from "react";

const defaultSingle = new Date();

const App = () => {

  //*States creados para utilizarlos globalmente
  const [fecha, setFecha] = useState({
    content: defaultSingle,
  });



  return (
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
  );
};

export default App;
