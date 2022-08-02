import { Dialog, Ellipsis, List, Modal, SwipeAction } from "antd-mobile";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { EditSOutline, CheckOutline } from 'antd-mobile-icons';

const ListaTarea = () => {
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
              color: 'var(--adm-color-primary)',
            }}
          />
        ),
        title: 'Tarea Cerrada Correctamente',
        confirmText:"Cerrar",
      });
  };


  return (
    <>
      <div>
        <List>
          <SwipeAction
            ref={ref}
            closeOnAction={false}
            closeOnTouchOutside={false}
            rightActions={[
              {
                key: "editar",
                text:<EditSOutline />,
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
                text:<CheckOutline />,
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
            <List.Item description="Adrian Sabo" extra="29-07-2022">
              <Ellipsis
                direction="end"
                content="Llamar a Adrian, conversar sobre nuevos insumos"
              />
            </List.Item>
          </SwipeAction>

          <List.Item description="Horacio Mercol" extra="29-07-2022">
            <Ellipsis direction="end" content="Visitar Campo Oeste" />
          </List.Item>

          <List.Item description="Adrian Sabo" extra="29-07-2022">
            <Ellipsis direction="end" content="Venta de Soja" />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="30-07-2022">
            <Ellipsis
              direction="end"
              content="Venta de Maíz para temporada 2022"
            />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="30-07-2022">
            <Ellipsis
              direction="end"
              content="Llamar a Adrian, conversar sobre nuevos insumos"
            />
          </List.Item>
          <List.Item description="Horacio Mercol" extra="31-07-2022">
            <Ellipsis direction="end" content="Visitar Campo Oeste" />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="31-07-2022">
            <Ellipsis direction="end" content="Venta de Soja" />
          </List.Item>
          <List.Item description="Jorge Mayorga" extra="01-08-2022">
            <Ellipsis
              direction="end"
              content="Llamar a Jorge para Venta de Herbicidas"
            />
          </List.Item>
          <List.Item description="Aida Campos" extra="01-08-2022">
            <Ellipsis direction="end" content="Venta de Maíz" />
          </List.Item>
        </List>
      </div>
    </>
  );
};

export default ListaTarea;
