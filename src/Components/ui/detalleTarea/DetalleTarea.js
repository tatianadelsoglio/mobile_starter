/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Button, Card, Checkbox, TextArea, Toast } from "antd-mobile";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ClockCircleOutline,
  CalendarOutline,
} from "antd-mobile-icons";


const ItemListaTarea = [
  {
    id: 1,
    usu_nombre: "Adrian Sabo",
    empresa: "La Ganadera",
    fechaHora: "08-22-2022 08:30",
    estado: 1,
    descripcion: "Llamar a Adrian, conversar sobre nuevos insumos",
    prioridad: "ALTA",
  },]

const DetalleTarea = () => {

  const handleFechaVer = (val) => {
    let fecha = moment(val).format("DD-MM-YYYY");
    return fecha;
  };

  const handleHora = (val) => {
    let hora = moment(val).format("LT");
    return hora;
  };

  return (
    // <div>
    //   <Card title="Adrian Sabo" extra="29-07-2022">
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "flex-start",
    //         marginBottom: "5px",
    //       }}
    //     >
    //       <label style={{ fontSize: "15px" }}>Tarea:</label>
    //     </div>
    //     <div
    //       style={{
    //         paddingBottom: "11px",
    //         display: "flex",
    //         justifyContent: "flex-start",
    //       }}
    //     >
    //       <label style={{ fontSize: "14px" }}>
    //         Llamar a Adrian, conversar sobre nuevos insumos
    //       </label>
    //     </div>
    //     <div>
    //       <TextArea
    //         rows={5}
    //         placeholder="Anexe Nota Necesaria"
    //         style={{
    //           backgroundColor: "#f8f8f8",
    //           paddingTop: "11px",
    //           borderTop: "1px solid #e5e5e5",
    //         }}
    //       ></TextArea>
    //     </div>
    //     <div
    //       style={{
    //         paddingTop: "20px",
    //       }}
    //     >
    //     </div>
    //     <div
    //       style={{
    //         paddingTop: "11px",
    //         borderTop: "1px solid #e5e5e5",
    //         display: "flex",
    //         justifyContent: "flex-end",
    //       }}
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       <Button
    //         color="primary"
    //         onClick={() => {
    //           Toast.show("Guardado");
    //         }}
    //       >
    //         Guardar
    //       </Button>
    //     </div>
    //   </Card>
   
    // </div>
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
  );
};

export default DetalleTarea;
