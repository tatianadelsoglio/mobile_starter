/* eslint-disable no-unused-vars */
import {
  Dialog,
  Modal,
  Steps,
  SwipeAction,
} from "antd-mobile";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  EditSOutline,
  CheckOutline,
  CalendarOutline,
} from "antd-mobile-icons";
import "./ListaTarea.css";
import "../tareaNegocio/tareaNegocio.css";
import "moment/locale/es";
import { Step } from "antd-mobile/es/components/steps/step";
import { TareaNegocio } from "../tareaNegocio/TareaNegocio";

const ListaTarea = ({ItemListaTarea}) => {
  let history = useHistory();

  const handleModalDetalleTarea = (tareaP) => {
    let cliente = ItemListaTarea.filter((tarea) => tarea.id === tareaP.id);

    return history.push({
      pathname: `/detalletarea/${tareaP.id}`,
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


  return (
    <>
      <div className="div_lista_tareas">
        <div>
          <Steps direction="vertical" style={{marginLeft:"8px"}}>
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
                          handleModalDetalleTarea(ItemListaTarea);
                          console.log(ItemListaTarea);
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
        </div>
      </div>
    </>
  );
};

export default ListaTarea;
