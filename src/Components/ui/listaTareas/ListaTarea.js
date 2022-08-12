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

const ListaTarea = ({ItemListaTarea}) => {
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

  // let ultimaFecha = "";
  // let ultimaHora = "";

  // if (ItemListaTarea.extra !== ultimaFecha) {
  //   ultimaFecha = ItemListaTarea.extra;
  //   if (ItemListaTarea.hora !== ultimaHora) {
  //     ultimaHora = ItemListaTarea.hora;
  //     return( 
  //       <>
          
  //       </>
  //     );
  //   }
  // }

  return (
    <>
      <div className="div_lista_tareas">
        {ItemListaTarea.map((ItemListaTarea) => (

          <div>            
            <div className="div_lista_tareas_fecha">{ItemListaTarea.fecha}</div>
            <List header={ItemListaTarea.hora}>
              <SwipeAction
                ref={ref}
                closeOnAction={false}
                closeOnTouchOutside={false}
                rightActions={rightActions}
              >
                <List.Item
                  key={ItemListaTarea.key}
                  description={ItemListaTarea.description}
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
