/* eslint-disable no-unused-vars */
import {
  Card,
  Dialog,
  Ellipsis,
  FloatingBubble,
  List,
  Modal,
  Steps,
  SwipeAction,
} from "antd-mobile";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  EditSOutline,
  CheckOutline,
  AddOutline,
  ClockCircleOutline,
  CalendarOutline,
  UserCircleOutline,
  ShopbagOutline,
  InformationCircleOutline,
} from "antd-mobile-icons";
import "./ListaTarea.css";
import "../tareaNegocio/tareaNegocio.css";
import moment from "moment";
import "moment/locale/es";
import { Step } from "antd-mobile/es/components/steps/step";
import { TareaNegocio } from "../tareaNegocio/TareaNegocio";

const ListaTarea = ({ ItemListaTarea }) => {
  let history = useHistory();

  const handleModalDetalleTarea = (id) => {
    let cliente = ItemListaTarea.filter((tarea) => tarea.id === id);

    return history.push({
      pathname: `/detalletarea/${id}`,
      state: { ...cliente },
    });
  };

  const ref = useRef(null);


  const handleModalCrearTarea = () => {
    history.push("/nuevatarea");
  };

  const handleModalCerrar = () => {
    Modal.alert({
      header: (
        <CheckOutline
          style={{
            fontSize: 64,
            color: "var(--adm-color-primary)",
          }}
        />
      ),
      title: "Tarea Cerrada Correctamente",
      confirmText: "Cerrar",
    });
  };


  //*Handles para separar las fechasHoras en fecha y hora como viene de base de datos con moment.js

  let ultimaFecha = "";

  const handleFecha = (val) => {
    let fecha = moment(val).format("DD-MM-YYYY");

    if (fecha !== ultimaFecha) {
      ultimaFecha = fecha;

      return ultimaFecha;
    } else {
      ultimaFecha = "";
      return ultimaFecha;
    }
  };

  const handleFechaVer = (val) => {
    let fecha = moment(val).format("DD-MM-YYYY");
    return fecha;
  };

  const handleHora = (val) => {
    let hora = moment(val).format("LT");
    return hora;
  };

  return (
    <>
      <div className="div_lista_tareas">
        <div>
          <Steps direction="vertical">
            {ItemListaTarea.map((ItemListaTarea) => (
              <Step
                description={
                  <SwipeAction
                    ref={ref}
                    closeOnAction={false}
                    closeOnTouchOutside={false}
                    rightActions={[
                      {
                        key: "editar",
                        text: <EditSOutline />,
                        color: "#2bc4e3",
                        onClick: () => {
                          handleModalDetalleTarea(ItemListaTarea.id);
                        },
                      },
                      {
                        key: "cerrar",
                        text: <CheckOutline />,
                        color: "primary",
                        onClick: async () => {
                          await Dialog.confirm({
                            content: "¿Cerrar Tarea?",
                            cancelText: "Cancelar",
                            confirmText: "Aceptar",
                            onConfirm: handleModalCerrar,
                          });
                          ref.current?.close();
                        },
                      },
                    ]}
                  >
                    {/* <div className="tarea-negocio-contenedor borde_contenedor">
                      <div className="tarea-negocio-linea-superior">
                        <p className="tarea-negocio-titulo margenElip">
                          <Ellipsis
                            style={{
                              fontWeight: "bold",
                              width: "18rem",
                              fontSize: "16px",
                            }}
                            direction="end"
                            content={ItemListaTarea.descripcion}
                          />
                        </p>
                      </div>
                      <div className="tarea-negocio-linea-inferior flexColumn">
                        <div className="tarea-negocio-linea-inferior interlineado">
                          {ItemListaTarea.empresa ? (
                            <div className="tarea-negocio-item">
                              <ShopbagOutline style={{ color: "#00B33C" }} />{" "}
                              <p className="tarea-negocio-contacto">
                                {ItemListaTarea.empresa}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                          {ItemListaTarea.empresa ? (
                            <div className="tarea-negocio-item">
                              <InformationCircleOutline
                                style={{ color: "#00B33C" }}
                              />{" "}
                              <p className="tarea-negocio-tipoTarea">
                                {ItemListaTarea.empresa}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="tarea-negocio-linea-inferior interlineado">
                          <div className="tarea-contenedor-horario">
                            <ClockCircleOutline
                              style={{ color: "white", fontSize: "0.8rem" }}
                            />
                            <p className="texto-tarea-horario">
                              {handleFechaVer(ItemListaTarea.fechaHora)}
                            </p>
                            <p className="texto-tarea-horario">
                              {handleHora(ItemListaTarea.fechaHora)} hs
                            </p>
                          </div>

                          <div
                            className="tarea-negocio-linea-inferior interlineado"
                            style={{ marginLeft: "5px", paddingBottom: "10px" }}
                          >
                            <div>
                              {ItemListaTarea.prioridad === "ALTA" ? (
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
                              {ItemListaTarea.prioridad === "MEDIA" ? (
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
                              {ItemListaTarea.prioridad === "BAJA" ? (
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
                              <p>
                                <div
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
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <TareaNegocio tarea={ItemListaTarea}/>
                  </SwipeAction>
                }
                icon={
                  <CalendarOutline
                    color="#56b43c"
                    style={{ backgroundColor: "#f4f4f4" }}
                  />
                }
              />
            ))}
          </Steps>

          <div style={{ height: "40px" }}></div>
          <div>
            <FloatingBubble
              style={{
                "--initial-position-bottom": "60px",
                "--initial-position-right": "24px",
                "--edge-distance": "24px",
              }}
            >
              <AddOutline
                fontSize={32}
                onClick={() =>
                  Modal.confirm({
                    title: "¿Crear una nueva tarea?",
                    cancelText: "Cancelar",
                    confirmText: "Crear",
                    onConfirm: handleModalCrearTarea,
                  })
                }
              />
            </FloatingBubble>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaTarea;
