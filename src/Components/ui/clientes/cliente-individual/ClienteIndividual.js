/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@apollo/client";
import { CapsuleTabs, SwipeAction } from "antd-mobile";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GET_NEGOCIOS } from "../../../../graphql/queries/Negocio";
import { GET_TAREAS } from "../../../../graphql/queries/Tarea";
import { GlobalContext } from "../../../context/GlobalContext";
import InfoCliente from "../../infoCliente/InfoCliente";
import { ListaNegocios } from "../../negocios/ListaNegocios";
import { TareaNegocio } from "../../tareaNegocio/TareaNegocio";
import "./clienteIndividual.css";

export const ClienteIndividual = () => {
  const { userId } = useContext(GlobalContext);
  const [cliente, setCliente] = useState({});
  const [tareasXCliente, setTareasXCliente] = useState();

  const location = useLocation();


  const { loading, error, data } = useQuery(GET_TAREAS, {
    variables: {
      idUsuario: userId,
      filtroFecha: "",
      fecha: "",
      estado: 1,
      idUsuarioFiltro: "",
      idClienteFiltro: parseInt(location.state[0].cli_id)
    },
  });

  const {data: dataNegocios } = useQuery(GET_NEGOCIOS, {
    variables: {
      idPipeline: null,
      idEstado: 0,
      fechaDesde: null,
      fechaHasta: null,
      idUsuario: userId,
      tipoFecha: "creacion",
      listadoEtiquetas: {"listaIdEtiqueta": []},
      usuarioFiltro: null,
      idCliente: parseInt(location.state[0].cli_id)
    },
  });


  const ordenarDatos = (tareas) => {
    let tareasOrdenadas;
    if (tareas) {
      tareasOrdenadas = tareas.sort(function(a,b){
        return (new Date(moment(b.fechavencimiento, "DD/MM/YYYY").format("YYYY,MM,DD")) - new Date(moment(a.fechavencimiento, "DD/MM/YYYY").format("YYYY,MM,DD")));
      }) 
      setTareasXCliente(tareasOrdenadas);
    }
  }

  useEffect(() => {
    const clienteSelect = location.state[0];
    console.log(clienteSelect);

    setCliente(clienteSelect);
  }, []);

  useEffect(() => {
    if(data) {
      console.log(JSON.parse(data.getTareasIframeResolver));
      ordenarDatos(JSON.parse(data.getTareasIframeResolver));
    }
  }, [data]);

  useEffect(() => {
    if(dataNegocios) {
      console.log(JSON.parse(dataNegocios.getNegocioResolver));
      // ordenarDatos(JSON.parse(dataNegocios.getNegocioResolver));
    }
  }, [dataNegocios]);

  useEffect(() => {

  }, [tareasXCliente]);

  return (
    <CapsuleTabs className="contenedor-cliente-individual">
      <CapsuleTabs.Tab title="Info" key="1">
        <InfoCliente clienteSelect={cliente} />
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="Tareas" key="2">
        <div className="contenedor-titulo-cliente">
          <p className="titulo-cliente-tareas">{cliente.cli_nombre}</p>
        </div>
        <div className="div_lista_l">
          {tareasXCliente && tareasXCliente.map((tarea) => {
            return (
              <SwipeAction className="swipe_clienteTarea">
                <TareaNegocio tarea={tarea} origen="ListaTareas" />
              </SwipeAction>
            );
          })}
        </div>
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="Negocios" key="3">
        <div className="div_lista_l">
          <ListaNegocios />
        </div>
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};
