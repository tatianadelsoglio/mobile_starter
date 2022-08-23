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
import moment from "moment";
import "moment/locale/es";
import { Step } from "antd-mobile/es/components/steps/step";

const ListaTarea = ({ ItemListaTarea }) => {
  let history = useHistory();

  // const handleModalDetalleTarea = (id) => {
  //   let cliente = ItemListaTarea.filter((tarea) => tarea.id === id);

  //   return history.push({
  //     pathname: `/detalletarea/${id}`,
  //     state: { ...cliente },
  //   });
  // };

  const ref = useRef(null);

  const handleModalDetalleTarea = () => {
    history.push("/detalletarea");
  };

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

  const rightActions = [
    {
      key: "editar",
      text: <EditSOutline />,
      color: "#2bc4e3",
      onClick: () => {
        handleModalDetalleTarea();
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
        {/* {ItemListaTarea.map((ItemListaTarea) => ( */}
        <div>
          <div style={{ marginLeft: "15px"}}>
            <Steps direction="vertical">
              {ItemListaTarea.map((ItemListaTarea) => (
                <Step
                  description={
                    <SwipeAction
                      ref={ref}
                      closeOnAction={false}
                      closeOnTouchOutside={false}
                      rightActions={rightActions}
                    >
                      <div className="div_contenedor_lista">
                        <div className="div_wrapper_lista">
                          <div className="div_superior">
                            <Ellipsis
                              style={{ fontWeight: "bold" }}
                              direction="end"
                              content={ItemListaTarea.descripcion}
                            />
                          </div>
                          <div className="div_inferior">
                            <div className="div_iconoEmp">
                              <ShopbagOutline color="#56b43c"/>
                              <p>{ItemListaTarea.empresa}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwipeAction>
                  }
                  icon={
                    <CalendarOutline color="#56b43c" />
                  }
                />
              ))}
            </Steps>
          </div>
          {/* {handleFecha(ItemListaTarea.fechaHora) ? (
              <div className="div_lista_tareas_fecha">{ultimaFecha}</div>
            ) : null} */}
          {/* <List header={handleHora(ItemListaTarea.fechaHora)}>
              <SwipeAction
                ref={ref}
                closeOnAction={false}
                closeOnTouchOutside={false}
                rightActions={rightActions}
              >
                <List.Item
                  key={ItemListaTarea.id}
                  onClick={async () =>
                    await Dialog.confirm({
                      content: (
                        <>
                          <Card>
                            <div>
                              <p>
                                <span className="bold">Cliente </span> <br />
                                <div
                                  style={{
                                    backgroundColor: "#f8f8f8",
                                    color: "gray",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    border: "solid 1px #f4f4f4",
                                    height: "30px",
                                    width: "100%",
                                  }}
                                >
                                  {ItemListaTarea.usu_nombre}
                                </div>
                              </p>
                            </div>
                            <div>
                              <p>
                                <span className="bold">Asunto </span> <br />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    border: "solid 1px #f4f4f4",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                >
                                  {ItemListaTarea.descripcion}
                                </div>
                              </p>
                            </div>
                            <div>
                              <p>
                                <span className="bold">Tipo de tarea </span>{" "}
                                <br />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    border: "solid 1px #f4f4f4",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                >
                                  Aca va tipo de tarea
                                </div>
                              </p>
                            </div>
                            <div>
                              <p>
                                <span className="bold">Fuente </span> <br />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    border: "solid 1px #f4f4f4",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                >
                                  Aca va Fuente
                                </div>
                              </p>
                            </div>
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  width: "70%",
                                }}
                              >
                                <p>
                                  <span className="bold">Vencimiento </span>{" "}
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-start",
                                      alignItems: "center",
                                      border: "solid 1px #f4f4f4",
                                      height: "30px",
                                      width: "100%",
                                    }}
                                  >
                                    {handleFechaVer(ItemListaTarea.fechaHora)}
                                    <CalendarOutline
                                      style={{ marginLeft: "20px" }}
                                    />
                                  </div>
                                </p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  width: "30%",
                                }}
                              >
                                <p>
                                  <span className="bold">Hora </span> <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-start",
                                      alignItems: "center",
                                      border: "solid 1px #f4f4f4",
                                      height: "30px",
                                      width: "100p%",
                                    }}
                                  >
                                    {handleHora(ItemListaTarea.fechaHora)}
                                    <ClockCircleOutline
                                      style={{ marginLeft: "20px" }}
                                    />
                                  </div>
                                </p>
                              </div>
                            </div>
                            <div>
                              <p>
                                <span className="bold">Prioridad </span> <br />
                                <div>
                                  {ItemListaTarea.prioridad === "ALTA" ? (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <div
                                        style={{
                                          height: "25px",
                                          width: "50px",
                                          backgroundColor: "#da4453",
                                          color: "white",
                                          border: "solid 1px #da4453",
                                          borderRadius:"4px",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        ALTA
                                      </div>
                                    </div>
                                  ) : null}

                                  {ItemListaTarea.prioridad === "MEDIA" ? (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <div
                                        style={{
                                          height: "25px",
                                          width: "50px",
                                          backgroundColor: "#f7c560",
                                          color: "white",
                                          border: "solid 1px #f7c560",
                                          borderRadius:"4px",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        MEDIA
                                      </div>
                                    </div>
                                  ) : null}
                                  {ItemListaTarea.prioridad === "BAJA" ? (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <div
                                        style={{
                                          height: "25px",
                                          width: "50px",
                                          backgroundColor: "#8cc152",
                                          color: "white",
                                          border: "solid 1px #8cc152",
                                          borderRadius:"4px",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                        }}
                                      >
                                        BAJA
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                              </p>
                            </div>
                          </Card>
                        </>
                      ),
                      confirmText: "Editar",
                      cancelText: "Cerrar",
                      onConfirm:handleModalDetalleTarea,
                    })
                  }
                >
                  <Ellipsis
                    style={{ fontWeight: "bold" }}
                    direction="end"
                    content={ItemListaTarea.descripcion}
                  />

                  <p style={{color:"#56b43c", margin:"3px 0px"}}>
                    <span>
                      <UserCircleOutline color="#56b43c"/>
                    </span>
                    {ItemListaTarea.empresa}
                  </p>

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
                      }}
                    >
                      BAJA
                    </div>
                  ) : null}
                </List.Item>
              </SwipeAction>
            </List> */}
        </div>
        {/* ))} */}

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
    </>
  );
};

export default ListaTarea;
