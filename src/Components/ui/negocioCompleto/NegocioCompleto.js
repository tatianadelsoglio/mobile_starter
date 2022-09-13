/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import { useQuery } from "@apollo/client";
import { CapsuleTabs, Steps } from "antd-mobile";
import {
  ShopbagOutline,
  UserOutline,
  FilterOutline,
  CalendarOutline,
  FileOutline,
  PictureOutline,
  TagOutline,
} from "antd-mobile-icons";
import { Step } from "antd-mobile/es/components/steps/step";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  GET_COUNT_TAREAS,
  GET_NEGOCIO_CONTENT,
} from "../../../graphql/queries/NegocioContent";
import { ArchivoTareaNegocio } from "../archivoTareaNegocio/ArchivoTareaNegocio";
import { NotaTareaNegocio } from "../notaTareaNegocio/NotaTareaNegocio";
import { TareaNegocio } from "../tareaNegocio/TareaNegocio";
import "./negocioCompleto.css";

export const NegocioCompleto = () => {
  const [tareasDefinitivo, setTareasDefinitivo] = useState([{}]);

  const location = useLocation();

  const [negocio, setNegocio] = useState(location.state[0]);

  const getColor = (i) => {
    const colorList = [
      "#ff7f50",
      "#87cefa",
      "#da70d6",
      "#32cd32",
      "#6495ed",
      "#ff69b4",
      "#ffa500",
      "#40e0d0",
      "#66f666",
      "#FFA07A",
      "#0066ff",
      "#FA8072",
      "#8DC4DE",
      "#7FFF00",
      "#ba55d3",
      "#cd5c5c",
      "#ADFF2F",
      "#FF0000",
      "#00FF7F",
      "#ADD8E6",
      "#6B8E23",
      "#9ACD32",
      "#3322ff",
      "#32CD32",
    ];

    i = i - 1;

    while (i > colorList.length) {
      i = i - colorList.length;
    }

    return colorList[i];
  };

  // const { data } = useQuery(GET_NEGOCIO_CONTENT, {
  //   variables: {
  //     idNegocio: location.state[0].neg_id,
  //   },
  // });

  const { data: dataTareas } = useQuery(GET_COUNT_TAREAS, {
    variables: {
      idNegocio: location.state[0].neg_id,
    },
  });

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //     console.log(JSON.parse(data.getNegocioByIdResolver).dataNeg);
  //   }
  // }, [data]);

  useEffect(() => {
    if (dataTareas) {
      setTareasDefinitivo(dataTareas.tiposTareasCantidadResolver);
    }
  }, [dataTareas]);

  return (
    <div className="div_contenedor_negocioC">
      <div className="negocio-completo-header">
        <p className="negocio-completo-header-asunto">{negocio.neg_asunto}</p>
        <p className="negocio-completo-header-importe">
          {negocio.mon_iso +
            " " +
            negocio.neg_valor.toLocaleString("de-DE", {
              minimumFractionDigits: 0,
            })}
        </p>
        <div className="negocio-completo-header-linea-cliente">
          <ShopbagOutline />
          <p className="negocio-completo-header-texto">{negocio.cli_nombre}</p>
        </div>
        {negocio.con_nombre && (
          <div className="negocio-completo-header-linea">
            <UserOutline />
            <p className="negocio-completo-header-texto">
              {negocio.con_nombre}
            </p>
          </div>
        )}
        <div className="negocio-completo-header-linea">
          {/* <FilterOutline />
          <p className="negocio-completo-header-texto">{negocio.embudo}</p> */}
          <TagOutline style={{ marginLeft: "0px" }} />
          <p className="negocio-completo-header-texto">{negocio.eta_id}</p>
        </div>
        <div className="negocio-completo-header-linea">
          <p className="negocio-completo-header-fecha">
            {"Fecha de creacion: " +
              moment(negocio.neg_fechacreacion, "YYYY-MM-DD").format(
                "DD/MM/YYYY"
              )}
          </p>
        </div>
        <div className="negocio-completo-header-linea">
          {/* <BellOutline /> */}
          <p className="negocio-completo-header-fecha">
            {"Fecha de cierre estimada: " +
              moment(negocio.neg_fechacierreestimado, "YYYY-MM-DD").format(
                "DD/MM/YYYY"
              )}
          </p>
        </div>
      </div>
      <CapsuleTabs className="capsuletabs-negocio">
        <CapsuleTabs.Tab title="Info" key="1">
          <div className="div_lista_nrg">
            <div className="negocio-completo-caja-grafica">
              <div className="negocio-grafica-linea">
                <p className="negocio-antiguedad">Antigüedad del negocio</p>
                <p className="negocio-antiguedad-dias">
                  {moment(negocio.neg_fechacreacion, "YYYY-MM-DD").fromNow()}
                </p>
              </div>
              <div className="negocio-grafico-degrade"></div>
              <p className="negocio-tareas">Tareas</p>
              <div className="negocio-grafico-tareas">
                {tareasDefinitivo.map((tarea) => {
                  return (
                    <span
                      className="negocio-caja-tarea-grafico"
                      style={{
                        backgroundColor: `${getColor(tarea.tip_id)}`,
                        width: `${tarea.porcentajeTipoTarea}%`,
                      }}
                    ></span>
                  );
                })}
              </div>
              <div className="negocio-grafico-referencias">
                {tareasDefinitivo &&
                  tareasDefinitivo.map((tarea) => {
                    return (
                      <div className="negocio-grafico-referencias-linea">
                        <span
                          className="negocio-grafico-referencia-cuadrito"
                          style={{
                            backgroundColor: `${getColor(tarea.tip_id)}`,
                          }}
                        ></span>
                        <p className="negocio-tarea-texto">{`${tarea.tip_desc} (${tarea.cantidadTipoTarea})`}</p>
                        <p className="negocio-tarea-texto">{`- ${Math.round(tarea.porcentajeTipoTarea)}%`}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Planificado" key="2">
          {/* <div className="div_lista_neg">
            <div className="negocio-linea-tiempo-contenedor">
              <Steps direction="vertical">
                {tareas.map((tarea) => {
                  switch (tarea.tipo) {
                    case "#T":
                      return (
                        <Step
                          description={<TareaNegocio tarea={tarea} />}
                          icon={
                            <CalendarOutline style={{ color: "#00B33C" }} />
                          }
                        />
                      );
                    case "#N":
                      return (
                        <Step
                          description={<NotaTareaNegocio nota={tarea} />}
                          icon={<FileOutline style={{ color: "#00B33C" }} />}
                        />
                      );
                    case "#A":
                      return (
                        <Step
                          description={<ArchivoTareaNegocio archivo={tarea} />}
                          icon={<PictureOutline style={{ color: "#00B33C" }} />}
                        />
                      );
                  }
                })}
              </Steps>
            </div>
          </div> */}
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Completado" key="3">
          {/* <div className="div_lista_neg">
            <div className="negocio-linea-tiempo-contenedor">
              <Steps direction="vertical">
                {tareas.map((tarea) => {
                  switch (tarea.tipo) {
                    case "#T":
                      return (
                        <Step
                          description={<TareaNegocio tarea={tarea} />}
                          icon={
                            <CalendarOutline style={{ color: "#00B33C" }} />
                          }
                        />
                      );
                    case "#N":
                      return (
                        <Step
                          description={<NotaTareaNegocio nota={tarea} />}
                          icon={<FileOutline style={{ color: "#00B33C" }} />}
                        />
                      );
                    case "#A":
                      return (
                        <Step
                          description={<ArchivoTareaNegocio archivo={tarea} />}
                          icon={<PictureOutline style={{ color: "#00B33C" }} />}
                        />
                      );
                    default:
                      return (
                        <Step
                          description={
                            <p>
                              {" "}
                              <span className="detailItem">
                                {" "}
                                Fecha de Cierre:{" "}
                              </span>{" "}
                              <span className="strikeThrough">
                                {" "}
                                2022-06-20{" "}
                              </span>{" "}
                              <span className="middleDot"> · </span>{" "}
                              <span className="modifiedItem"> 2022-06-24 </span>{" "}
                            </p>
                          }
                        />
                      );
                  }
                })}
              </Steps>
            </div>
          </div> */}
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    </div>
  );
};
