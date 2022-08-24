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
import { TareaNegocio } from "../tareaNegocio/TareaNegocio";

const ListaTarea = ({ItemListaTarea}) => {
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
                    <TareaNegocio tarea={ItemListaTarea} origen="ListaTareas"/>
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
