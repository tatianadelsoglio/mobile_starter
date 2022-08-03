/* eslint-disable no-unused-vars */
import { ConfigProvider } from "antd-mobile";
import "./App.css";
import AppRouter from "./Components/router/AppRouter";
import es_ES from "antd-mobile/es/locales/es-ES";

const App = () => {
  return (
    <ConfigProvider locale={es_ES}>
      <AppRouter />
    </ConfigProvider>
  );
};

export default App;
