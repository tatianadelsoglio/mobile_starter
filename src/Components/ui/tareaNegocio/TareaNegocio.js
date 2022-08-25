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
import { Ellipsis } from "antd-mobile";

export const TareaNegocio = ({ tarea, origen = "" }) => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {}, [mostrar]);

  //*Handles para separar las fechasHoras en fecha y hora como viene de base de datos con moment.js

  const handleFechaVer = (val) => {
    let fecha = moment(val).format("DD-MM-YYYY");
    return fecha;
  };

  const handleHora = (val) => {
    let hora = moment(val).format("LT");
    return hora;
  };

  if (origen === "ListaTareas") {
    return (
      <div className="tarea-negocio-contenedor">
        <div
          className="tarea-negocio-wrapper"
          onClick={() => setMostrar(!mostrar)}
        >
          <div className="tarea-negocio-linea-superior">
            <Ellipsis
              className="asunto tarea-negocio-titulo"
              style={{
                fontWeight: "bold",
                width: "90%",
                fontSize: "16px",

              }}
              direction="end"
              content={tarea.asunto}
            />
          </div>
          <div className="tarea-negocio-linea-inferior cliente-tipo">
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
            <div className="tarea-negocio-linea-inferior horario">
              <div className="tarea-contenedor-horario">
                <ClockCircleOutline
                  style={{ color: "white", fontSize: "0.8rem" }}
                />
                <p className="texto-tarea-horario">
                  {handleFechaVer(tarea.fechaHora)}
                </p>
                <p className="texto-tarea-horario">
                  {handleHora(tarea.fechaHora)} hs
                </p>
              </div>
            </div>
            <div className="tarea-negocio-linea-inferior prioridad-fuente">
              <div>
                {tarea.prioridad === "ALTA" ? (
                  <div
                    style={{
                      height: "20px",
                      width: "40px",
                      fontSize: "12px",
                      backgroundColor: "#da4453",
                      color: "white",
                      border: "solid 1px #da4453",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px 5px",
                    }}
                  >
                    ALTA
                  </div>
                ) : null}
                {tarea.prioridad === "MEDIA" ? (
                  <div
                    style={{
                      height: "20px",
                      width: "40px",
                      fontSize: "12px",
                      backgroundColor: "#f7c560",
                      color: "white",
                      border: "solid 1px #f7c560",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px 5px",
                    }}
                  >
                    MEDIA
                  </div>
                ) : null}
                {tarea.prioridad === "BAJA" ? (
                  <div
                    style={{
                      height: "20px",
                      width: "40px",
                      fontSize: "12px",
                      backgroundColor: "#8cc152",
                      color: "white",
                      border: "solid 1px #8cc152",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px 5px",
                    }}
                  >
                    BAJA
                  </div>
                ) : null}
              </div>
              <div>
                <div className="fuente">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "solid 1px #f4f4f4",
                      height: "20px",
                      width: "auto",
                      fontSize: "12px",
                      color: "#7cb305",
                      borderColor: "#eaff8f",
                      backgroundColor: "#fcffe6",
                      padding: "2px 5px",
                      borderRadius: "4px",
                    }}
                  >
                    NEGOCIO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {tarea.anexo
          ? tarea.anexo.map((anexo) => {
              switch (anexo.tipo) {
                case "#N":
                  return (
                    <NotaTareaNegocio
                      nota={anexo}
                      interno={true}
                      display={mostrar}
                    />
                  );
                case "#A":
                  return (
                    <ArchivoTareaNegocio
                      archivo={anexo}
                      interno={true}
                      display={mostrar}
                    />
                  );
              }
            })
          : ""}
      </div>
    );
  } else {
    return (
      <div className="tarea-negocio-contenedor">
        <div
          className="tarea-negocio-wrapper"
          onClick={() => setMostrar(!mostrar)}
        >
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
                  return (
                    <NotaTareaNegocio
                      nota={anexo}
                      interno={true}
                      display={true}
                    />
                  );
                case "#A":
                  return (
                    <ArchivoTareaNegocio
                      archivo={anexo}
                      interno={true}
                      display={true}
                    />
                  );
              }
            })
          : ""}
      </div>
    );
  }
};
