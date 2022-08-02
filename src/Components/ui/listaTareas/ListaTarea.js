import { Dialog, Ellipsis, List, SwipeAction } from "antd-mobile";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
// import { SwipeActionRef } from "antd-mobile/es/components/swipe-action";

const ListaTarea = () => {
  let history = useHistory();

  const ref = useRef(null);

  const handleModalDetalleTarea = () => {
    history.push("/detalletarea");
  };

  return (
    <>
      <div>
        <List>
          <SwipeAction
            ref={ref}
            closeOnAction={false}
            closeOnTouchOutside={false}
            leftActions={[
              {
                key: "cerrar",
                text: "Cerrar Tarea",
                color: "danger",

                onClick: async () => {
                  await Dialog.confirm({
                    content: "¿Cerrar Tarea?",
                    cancelText: "Cancelar",
                    confirmText: "Aceptar",
                  });
                  ref.current?.close();
                },
              },
            ]}
          >
            <List.Item
              description="Adrian Sabo"
              extra="29-07-2022"
              clickable
              onClick={() => {
                history.push("/detalletarea");
              }}
            >
              <Ellipsis
                direction="end"
                content="Llamar a Adrian, conversar sobre nuevos insumos"
              />
            </List.Item>
          </SwipeAction>
          <SwipeAction
            ref={ref}
            closeOnAction={false}
            closeOnTouchOutside={false}
            leftActions={[
              {
                key: "cerrar",
                text: "Cerrar Tarea",
                color: "danger",

                onClick: async () => {
                  await Dialog.confirm({
                    content: "¿Cerrar Tarea?",
                    cancelText: "Cancelar",
                    confirmText: "Aceptar",
                  });
                  ref.current?.close();
                },
              },
            ]}
            rightActions={[
              {
                key: "editar",
                text: "Editar Tarea",
                color: "primary",
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
            ]}
          >
            <List.Item
              description="Horacio Mercol"
              extra="29-07-2022"
              
            >
              <Ellipsis direction="end" content="Visitar Campo Oeste" />
            </List.Item>
          </SwipeAction>

          <List.Item description="Adrian Sabo" extra="29-07-2022" >
            <Ellipsis direction="end" content="Venta de Soja" />
          </List.Item>
          <List.Item
            description="Adrian Sabo"
            extra="30-07-2022"
          >
            <Ellipsis
              direction="end"
              content="Venta de Maíz para temporada 2022"
            />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="30-07-2022" >
            <Ellipsis
              direction="end"
              content="Llamar a Adrian, conversar sobre nuevos insumos"
            />
          </List.Item>
          <List.Item description="Horacio Mercol" extra="31-07-2022" >
            <Ellipsis direction="end" content="Visitar Campo Oeste" />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="31-07-2022" >
            <Ellipsis direction="end" content="Venta de Soja" />
          </List.Item>
          <List.Item description="Jorge Mayorga" extra="01-08-2022" >
            <Ellipsis
              direction="end"
              content="Llamar a Jorge para Venta de Herbicidas"
            />
          </List.Item>
          <List.Item description="Aida Campos" extra="01-08-2022" >
            <Ellipsis direction="end" content="Venta de Maíz" />
          </List.Item>
        </List>
      </div>
    </>
  );
};

export default ListaTarea;
