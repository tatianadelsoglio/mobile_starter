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
import React, { useContext, useRef } from "react";
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
<<<<<<< HEAD
import { TareaNegocio } from "../tareaNegocio/TareaNegocio";
=======
import { GlobalContext } from "../../context/GlobalContext";
>>>>>>> ce0fbd74855532a2dcd2da7159254a914a946776

const ListaTarea = () => {
  let history = useHistory();

  const handleModalDetalleTarea = (id) => {
    let cliente = ItemListaTarea.filter((tarea) => tarea.id === id);

    return history.push({
      pathname: `/detalletarea/${id}`,
      state: { ...cliente },
    });
  };

  const ref = useRef(null);

<<<<<<< HEAD
=======
  const { tareaSeleccionada, setTareaSeleccionada } = useContext(GlobalContext);

  const handleModalDetalleTarea = (id) => {

    let tarea = ItemListaTarea.filter(tarea => tarea.id === id);
    console.log(id);

    return history.push({
      pathname: `/detalletarea/${id}`,
      state:{...tarea}
    });
  };
>>>>>>> ce0fbd74855532a2dcd2da7159254a914a946776

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

<<<<<<< HEAD
=======
  const rightActions = [
    {
      key: "editar",
      text: <EditSOutline />,
      color: "#2bc4e3",
      onClick: () => handleModalDetalleTarea(ref)
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
  ];
>>>>>>> ce0fbd74855532a2dcd2da7159254a914a946776

  const ItemListaTarea = [
    {
      id: 1,
      usu_nombre: "Adrian Sabo",
      empresa: "La Ganadera",
      fechaHora: "08-22-2022 08:30",
      estado: 1,
      descripcion: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "ALTA",
    },
    {
      id: 2,
      usu_nombre: "Horacio Mercol",
      empresa: "La Ganadera",
      fechaHora: "08-22-2022 08:40",
      estado: 1,
      descripcion: "Visitar Campo Oeste",
      prioridad: "ALTA",
    },
    {
      id: 3,
      usu_nombre: "Jorge Mayorga",
      empresa: "La Ganadera",
      fechaHora: "08-23-2022 09:00",
      estado: 1,
      descripcion: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "MEDIA",
    },
    {
      id: 4,
      usu_nombre: "Aida Campos",
      empresa: "La Ganadera",
      fechaHora: "08-24-2022 09:15",
      estado: 1,
      descripcion: "Venta Trigo",
      prioridad: "BAJA",
    },
    {
      id: 5,
      usu_nombre: "Adrian Sabo",
      empresa: "Vitalforce",
      fechaHora: "08-30-2022 09:30",
      estado: 1,
      descripcion: "Venta de Maíz",
      prioridad: "MEDIA",
    },
    {
      id: 6,
      usu_nombre: "Florencia Caverzasi",
      empresa: "Vitalforce",
      fechaHora: "08-31-2022 09:30",
      estado: 1,
      descripcion: "Venta de Soja",
      prioridad: "MEDIA",
    },
    {
      id: 7,
      usu_nombre: "Adrian Sabo",
      empresa: "Vitalforce",
      fechaHora: "09-01-2022 09:40",
      estado: 1,
      descripcion: "Venta de Maíz para temporada 2223",
      prioridad: "MEDIA",
    },
    {
      id: 8,
      usu_nombre: "Edgar jazz",
      empresa: "Vitalforce",
      fechaHora: "09-02-2022 10:00",
      estado: 1,
      descripcion: "Llamar para conversar sobre nuevos insumos",
      prioridad: "BAJA",
    },
    {
      id: 9,
      usu_nombre: "Adrian Sabo",
      empresa: "Darregueira",
      fechaHora: "08-17-2022 10:00",
      estado: 1,
      descripcion: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "BAJA",
    },
    {
      id: 10,
      usu_nombre: "Horacio Mercol",
      empresa: "Darregueira",
      fechaHora: "08-17-2022 10:00",
      estado: 1,
      descripcion: "Visitar Campo Oeste",
      prioridad: "BAJA",
    },
    {
      id: 11,
      usu_nombre: "Jorge Mayorga",
      empresa: "Darregueira",
      fechaHora: "08-18-2022 10:30",
      estado: 1,
      descripcion: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "BAJA",
    },
    {
      id: 12,
      usu_nombre: "Aida Campos",
      empresa: "Darregueira",
      fechaHora: "08-19-2022 11:00",
      estado: 1,
      descripcion: "Venta Trigo",
      prioridad: "BAJA",
    },
  ];

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
                key={ItemListaTarea.id}
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
