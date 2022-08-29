/* eslint-disable react-hooks/exhaustive-deps */
import { CapsuleTabs, SwipeAction } from "antd-mobile"
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import InfoCliente from "../../infoCliente/InfoCliente"
import { ListaNegocios } from "../../negocios/ListaNegocios"
import { TareaNegocio } from "../../tareaNegocio/TareaNegocio";
import "./clienteIndividual.css";


export const ClienteIndividual = () => {

  const { listaTareas } = useContext(GlobalContext);

  const location = useLocation();

  const [cliente, setCliente] = useState({});

  const [ tareasXCliente, setTareasXCliente ] = useState();

  const tareasHandler = () => {
    setTareasXCliente(listaTareas.filter(tarea => tarea.cliente === cliente.empresa));
  }


  useEffect(() => {
    const clienteSelect = location.state[0];

    setCliente(clienteSelect);

  }, []);

  useEffect(() => {
    tareasHandler();

  }, [cliente]);

  useEffect(() => {

  }, [tareasXCliente]);

  return (
    <div className="contenedor-cliente-individual">
        <CapsuleTabs>
            <CapsuleTabs.Tab title="Info" key="1">
              <InfoCliente clienteSelect={cliente}/>
            </CapsuleTabs.Tab>
            <CapsuleTabs.Tab title="Tareas" key="2">
              {tareasXCliente?.map( tarea => {
                return(
                  <SwipeAction >
                    <TareaNegocio tarea={tarea} origen = "ListaTareas"/>

                  </SwipeAction>
                )
              })}
            </CapsuleTabs.Tab>
            <CapsuleTabs.Tab title="Negocios" key="3">
              <ListaNegocios />
            </CapsuleTabs.Tab>
        </CapsuleTabs>
    </div>
  )
}
