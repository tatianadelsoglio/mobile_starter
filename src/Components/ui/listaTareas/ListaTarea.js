import { Dialog, Ellipsis, List, Modal, SwipeAction } from "antd-mobile";
import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { EditSOutline, CheckOutline } from "antd-mobile-icons";
import "./ListaTarea.css";
import { GlobalContext } from "../../context/GlobalContext";

const ListaTarea = () => {
  const { fecha } = useContext(GlobalContext);

  let history = useHistory();

  const ref = useRef(null);

  const handleModalDetalleTarea = () => {
    history.push("/detalletarea");
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

  const ItemListaTarea = [
    {
      description: "Adrian Sabo",
      //extra:{fecha},
      content: "Llamar a Adrian, conversar sobre nuevos insumos",
    },
    {
      description: "Horacio Mercol",
      //extra:{fecha},
      content: "Visitar Campo Oeste",
    },
    {
      description: "Jorge Mayorga",
      content: "Llamar a Jorge para Venta de Herbicidas",
    },
    {
      description: "Aida Campos",
      content: "Venta Trigo",
    },
    {
      description: "Adrian Sabo",
      content:"Venta de Maíz",
    },
    {
      description: "Florencia Caverzasi",
      content: "Venta de Soja",
    },
    {
      description: "Adrian Sabo",
      content: "Venta de Maíz para temporada 2223",
    },
    {
      description: "Adrian Sabo",
      //extra:{fecha},
      content: "Llamar a Adrian, conversar sobre nuevos insumos",
    },
    {
      description: "Horacio Mercol",
      //extra:{fecha},
      content: "Visitar Campo Oeste",
    },
    {
      description: "Jorge Mayorga",
      content: "Llamar a Jorge para Venta de Herbicidas",
    },
    {
      description: "Aida Campos",
      content: "Venta Trigo",
    },    
  ];

  return (
    <>
      <div className="div_tareas">
        <List>
          {ItemListaTarea.map((ItemListaTarea) => (
            <SwipeAction
              ref={ref}
              closeOnAction={false}
              closeOnTouchOutside={false}
              rightActions={rightActions}
            >
              <List.Item description={ItemListaTarea.description} extra={fecha}>
                <Ellipsis direction="end" content={ItemListaTarea.content} />
              </List.Item>
            </SwipeAction>
          ))}
        </List>
      </div>
    </>
  );
};

export default ListaTarea;
