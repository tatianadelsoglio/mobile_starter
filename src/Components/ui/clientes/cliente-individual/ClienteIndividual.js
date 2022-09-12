/* eslint-disable react-hooks/exhaustive-deps */
import { CapsuleTabs } from "antd-mobile";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import InfoCliente from "../../infoCliente/InfoCliente";
import { ClienteTareas } from "./ClienteTareas";
import "./clienteIndividual.css";
import { ClienteNegocios } from "./ClienteNegocios";

export const ClienteIndividual = () => {
  const { userId } = useContext(GlobalContext);
  // const [cliente, setCliente] = useState({});
  const [activeKey, setActiveKey] = useState();

  const location = useLocation();

  // useEffect(() => {
  //   if (dataNegocios) {
  //     console.log(JSON.parse(dataNegocios.getNegocioResolver));
  //     // ordenarDatos(JSON.parse(dataNegocios.getNegocioResolver));
  //   }
  // }, [dataNegocios]);

  useEffect(() => {

  }, [activeKey]);

  return (
    <CapsuleTabs
      className="contenedor-cliente-individual"
      onChange={(v) => setActiveKey(v)}
    >
      <CapsuleTabs.Tab title="Info" key="1">
        <InfoCliente clienteSelect={location.state[0]} />
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="Tareas" key="2">
        {activeKey === "2" && <ClienteTareas cliente={location.state[0]} />}
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="Negocios" key="3">
        {activeKey === "3" && <ClienteNegocios cliente={location.state[0]} /> }
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};
