/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import moment from "moment";
import "./tareaNegocio.css";
import {
  CheckOutline,
  ShopbagOutline,
  InformationCircleOutline,
  ClockCircleOutline,
} from "antd-mobile-icons";
import { NotaTareaNegocio } from "../notaTareaNegocio/NotaTareaNegocio";
import { ArchivoTareaNegocio } from "../archivoTareaNegocio/ArchivoTareaNegocio";
import { useEffect, useState } from "react";

export const TareaNegocio = ({ tarea, origen="" }) => {

  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    
  }, [mostrar])
  

  if(origen==="ListaTareas") {
    return (
      <div className="tarea-negocio-contenedor">
        <div className="tarea-negocio-wrapper" onClick={() => setMostrar(!mostrar)}>
          <div className="tarea-negocio-linea-superior">
            <p className="tarea-negocio-titulo">{tarea.asunto}</p>
          </div>
          <div className="tarea-negocio-linea-inferior">
            {tarea.contacto ? (
              <div className="tarea-negocio-item">
                <ShopbagOutline style={{ color: "#00B33C" }} />{" "}
                <p className="tarea-negocio-contacto">{tarea.cliente}</p>
              </div>
            ) : (
              ""
            )}
            {tarea.tipoTarea ? (
              <div className="tarea-negocio-item">
                <InformationCircleOutline style={{ color: "#00B33C" }} />{" "}
                <p className="tarea-negocio-tipoTarea">{tarea.tipoTarea}</p>
              </div>
            ) : (
              ""
            )}
            <div className="tarea-contenedor-horario">
              <ClockCircleOutline
                style={{ color: "white", fontSize: "0.8rem" }}
              />
              <p className="texto-tarea-horario">{tarea.cierreEstimado}</p>
              <p className="texto-tarea-horario">{tarea.hora} hs</p>
            </div>
          </div>
        </div>
        {tarea.anexo
          ? tarea.anexo.map((anexo) => {
              switch (anexo.tipo) {
                case "#N":
                  return <NotaTareaNegocio nota={anexo} interno={true} display={mostrar} />;
                case "#A":
                  return <ArchivoTareaNegocio archivo={anexo} interno={true} display={mostrar} />;
              }
            })
          : ""}
      </div>
    );
  }
  else {
    return (
      <div className="tarea-negocio-contenedor">
        <div className="tarea-negocio-wrapper" onClick={() => setMostrar(!mostrar)}>
          <div className="tarea-negocio-linea-superior">
            <p className="tarea-negocio-titulo">{tarea.asunto}</p>
            <CheckOutline
              style={{ color: "#00B33C", marginRight: "5px", fontSize: "1rem" }}
            />
          </div>
          <div className="tarea-negocio-linea-inferior">
            <p className="tarea-negocio-fecha">
              {moment(tarea.fechaInicio, "DD/MM/YYYY").fromNow()}
            </p>
            {tarea.contacto ? (
              <div className="tarea-negocio-item">
                <ShopbagOutline style={{ color: "#00B33C" }} />{" "}
                <p className="tarea-negocio-contacto">{tarea.contacto}</p>
              </div>
            ) : (
              ""
            )}
            {tarea.tipoTarea ? (
              <div className="tarea-negocio-item">
                <InformationCircleOutline style={{ color: "#00B33C" }} />{" "}
                <p className="tarea-negocio-tipoTarea">{tarea.tipoTarea}</p>
              </div>
            ) : (
              ""
            )}
            <div className="tarea-contenedor-horario">
              <ClockCircleOutline
                style={{ color: "white", fontSize: "0.8rem" }}
              />
              <p className="texto-tarea-horario">{tarea.cierreEstimado}</p>
              <p className="texto-tarea-horario">{tarea.hora} hs</p>
            </div>
          </div>
        </div>
        {tarea.anexo
          ? tarea.anexo.map((anexo) => {
              switch (anexo.tipo) {
                case "#N":
                  return <NotaTareaNegocio nota={anexo} interno={true} display={true} />;
                case "#A":
                  return <ArchivoTareaNegocio archivo={anexo} interno={true} display={true} />;
              }
            })
          : ""}
      </div>
    );
  }
  
};
