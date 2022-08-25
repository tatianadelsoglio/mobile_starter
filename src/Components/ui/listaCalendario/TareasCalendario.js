import {
  Dialog,
  Ellipsis,
  List,
  Modal,
  SwipeAction,
} from "antd-mobile";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { EditSOutline, CheckOutline} from "antd-mobile-icons";
import moment from "moment";
import "./TareasCalendario.css";

const ListaCalendario = ({ItemListaTarea}) => {
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

  const handleHora = (val) => {
    let hora = moment(val).format("LT");
    return hora;
  };


  return (
    <>
      <div className="div_lista_tareas">
        {ItemListaTarea.map((ItemListaTarea) => (
          <div>
            <List>  
              <SwipeAction
                ref={ref}
                closeOnAction={false}
                closeOnTouchOutside={false}
                rightActions={rightActions}
              >
                <List.Item
                  className="lista_tarea_calendar"
                  key={ItemListaTarea.key}
                  description={ItemListaTarea.usu_nombre}
                  onClick={() =>
                    Modal.show({
                      title: ItemListaTarea.description,
                      content: ItemListaTarea.content,
                      closeOnMaskClick: true,
                    })
                  }
                >
                  <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                      {handleHora(ItemListaTarea.fechaHora)}
                    </div>
                    <div className="div_tarea_calendar" style={{display:"flex", justifyContent:"flex-end", alignItems:"center"}}>
                      <Ellipsis direction="end" content={ItemListaTarea.descripcion} />
                    </div>
                  </div>
                </List.Item>
              </SwipeAction>
            </List>
          </div>
        ))}

        <div style={{ height: "40px" }}></div>
  
      </div>
    </>
  );
};

export default ListaCalendario;
