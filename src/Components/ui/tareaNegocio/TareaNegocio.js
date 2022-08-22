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

export const TareaNegocio = ({ tarea }) => {
  return (
    <div className="tarea-negocio-contenedor">
      <div className="tarea-negocio-wrapper">
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
        ? tarea.anexo.map((tarea) => {
            switch (tarea.tipo) {
              case "#N":
                return <NotaTareaNegocio nota={tarea} interno={true} />;
              case "#A":
                return <ArchivoTareaNegocio archivo={tarea} interno={true} />;
            }
          })
        : ""}
    </div>
  );
};
