/* eslint-disable react-hooks/exhaustive-deps */
import { CapsuleTabs } from "antd-mobile"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InfoCliente from "../../infoCliente/InfoCliente"
import { ListaNegocios } from "../../negocios/ListaNegocios"
import "./clienteIndividual.css";


export const ClienteIndividual = () => {

  const location = useLocation();

  const [cliente, setCliente] = useState({});

  useEffect(() => {

    const clienteSelect = location.state[0];
    console.log(clienteSelect);
    setCliente(clienteSelect)

  }, []);


  return (
    <div className="contenedor-cliente-individual">
        <CapsuleTabs>
            <CapsuleTabs.Tab title="Info" key="1">
              <div style={{ height: "50px" }}></div>
              <InfoCliente clienteSelect={cliente}/>
            </CapsuleTabs.Tab>
            <CapsuleTabs.Tab title="Tareas" key="2">
              <div style={{ height: "50px" }}></div>
              <h1>Lista de tareas filtrada por cliente</h1>
            </CapsuleTabs.Tab>
            <CapsuleTabs.Tab title="Negocios" key="3">
              <ListaNegocios />
            </CapsuleTabs.Tab>
        </CapsuleTabs>
    </div>
  )
}
