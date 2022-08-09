import {
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

const ListaTarea = () => {
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

  const ItemListaTarea = [
    {
      key: 1,
      description: "Adrian Sabo",
      hora:"08:30",
      extra: "11/08/2022",
      content: "Llamar a Adrian, conversar sobre nuevos insumos",
    },
    {
      key: 2,
      description: "Horacio Mercol",
      hora:"08:30",
      extra: "11/08/2022",
      content: "Visitar Campo Oeste",
    },
    {
      key: 3,
      description: "Jorge Mayorga",
      hora:"09:00",
      extra: "12/08/2022",
      content: "Llamar a Jorge para Venta de Herbicidas",
    },
    {
      key: 4,
      description: "Aida Campos",
      hora:"09:15",
      extra: "12/08/2022",
      content: "Venta Trigo",
    },
    {
      key: 5,
      description: "Adrian Sabo",
      hora:"09:30",
      extra: "16/08/2022",
      content: "Venta de Maíz",
    },
    {
      key: 6,
      description: "Florencia Caverzasi",
      hora:"09:30",
      extra: "17/08/2022",
      content: "Venta de Soja",
    },
    {
      key: 7,
      description: "Adrian Sabo",
      hora:"09:40",
      extra: "17/08/2022",
      content: "Venta de Maíz para temporada 2223",
    },
    {
      key: 8,
      description: "Adrian Sabo",
      hora:"10:00",
      extra: "18/08/2022",
      content: "Llamar a Adrian, conversar sobre nuevos insumos",
    },
    {
      key: 9,
      description: "Horacio Mercol",
      hora:"10:00",
      extra: "02/08/2022",
      content: "Visitar Campo Oeste",
    },
    {
      key: 10,
      description: "Jorge Mayorga",
      hora:"10:30",
      extra: "03/08/2022",
      content: "Llamar a Jorge para Venta de Herbicidas",
    },
    {
      key: 11,
      description: "Aida Campos",
      hora:"11:00",
      extra: "03/08/2022",
      content: "Venta Trigo",
    },
  ];

  //* Funciona, filtra correctamente:
  // let fechaCompare = ItemListaTarea.filter(ItemListaTarea => (ItemListaTarea.extra >= "08/08/2022" && ItemListaTarea.extra <= "12/08/2022"));
  // console.log(fechaCompare);

  // if (keyPest === 1 ){
  //   //console.log("Pestaña Esta Semana")
  //   let fechaSemanaActual = ItemListaTarea.filter(ItemListaTarea => (ItemListaTarea.extra >= "08/08/2022" && ItemListaTarea.extra <= "12/08/2022"));
  //   console.log(fechaSemanaActual);
  // };
  // if (keyPest === 2 ){
  //   //console.log("Pestaña Semana Prox.")
  //   let fechaSemanaProx = ItemListaTarea.filter(ItemListaTarea => (ItemListaTarea.extra >= "15/08/2022" && ItemListaTarea.extra <= "19/08/2022"));
  //   console.log(fechaSemanaProx);
  // };
  // if (keyPest === 3 ){
  //   //console.log("Pestaña Vencida")
  //   let fechaVencida = ItemListaTarea.filter(ItemListaTarea => (ItemListaTarea.extra >= "01/08/2022" && ItemListaTarea.extra <= "05/08/2022"));
  //   console.log(fechaVencida);
  // };

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
              <List.Item
                key={ItemListaTarea.key}
                description={ItemListaTarea.description}
                extra={ItemListaTarea.extra}
                onClick={() =>
                  Modal.show({
                    title: ItemListaTarea.description,
                    content: ItemListaTarea.content,
                    closeOnMaskClick: true,
                  })
                }
              >
                <Ellipsis direction="end" content={ItemListaTarea.content} />
              </List.Item>
            </SwipeAction>
          ))}
        </List>
        <div style={{height:"40px"}}></div>
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
