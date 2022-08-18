import {
  Card,
  Dialog,
  Ellipsis,
  FloatingBubble,
  List,
  Modal,
  SwipeAction,
} from "antd-mobile";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { EditSOutline, CheckOutline, AddOutline } from "antd-mobile-icons";
import "./ListaTarea.css";
import moment from "moment";
import "moment/locale/es";

const ListaTarea = ({ ItemListaTarea }) => {
  let history = useHistory();

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
      onClick: async () => {
        await Dialog.confirm({
          content: "¿Editar Tarea?",
          cancelText: "Cancelar",
          confirmText: "Aceptar",
          onConfirm: handleModalDetalleTarea,
        });
        ref.current?.close();
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

  const handleHora = (val) => {
    let hora = moment(val).format("LT");
    return hora;
  };

  return (
    <>
      <div className="div_lista_tareas">
        {ItemListaTarea.map((ItemListaTarea) => (
          <div>
            {handleFecha(ItemListaTarea.fechaHora) ? (
              <div className="div_lista_tareas_fecha">{ultimaFecha}</div>
            ) : null}
            <List header={handleHora(ItemListaTarea.fechaHora)}>
              <SwipeAction
                ref={ref}
                closeOnAction={false}
                closeOnTouchOutside={false}
                rightActions={rightActions}
              >
                <List.Item
                  key={ItemListaTarea.id}
                  description={ItemListaTarea.usu_nombre}
                  onClick={async() =>
                    await Dialog.confirm({
                      content: (
                        <>
                          <Card title={<div>{ItemListaTarea.usu_nombre}</div>}>
                            <div><p><span style={{fontWeight:"bold"}}>Fecha: </span>{ultimaFecha}</p></div>
                            <div><p><span style={{fontWeight:"bold"}}>Hora: </span>{handleHora(ItemListaTarea.fechaHora)}</p></div>
                            <div><p><span style={{fontWeight:"bold"}}>Tarea: </span>{ItemListaTarea.descripcion}</p></div>
                          </Card>
                        </>
                      ),
                      confirmText: "Editar",
                      cancelText:"Cerrar",
                      onConfirm: handleModalDetalleTarea,
                    })
                  }
                >
                  <Ellipsis
                    direction="end"
                    content={ItemListaTarea.descripcion}
                  />
                </List.Item>
              </SwipeAction>
            </List>
          </div>
        ))}

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
