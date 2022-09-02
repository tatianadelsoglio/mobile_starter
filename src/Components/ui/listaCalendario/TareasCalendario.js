import { Dialog, Ellipsis, List, Modal, SwipeAction } from "antd-mobile";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { EditSOutline, CheckOutline, ShopbagOutline } from "antd-mobile-icons";
import moment from "moment";
import "./TareasCalendario.css";

const ListaCalendario = ({ ItemListaTarea }) => {
  let history = useHistory();

  const ref = useRef(null);

  const handleModalDetalleTarea = (tareaP) => {
    let cliente = ItemListaTarea.filter((tarea) => tarea.id === tareaP.id);

    return history.push({
      pathname: `/detalletarea/${tareaP.id}`,
      state: { ...cliente },
    });
  };

  // const handleModalDetalleTarea = () => {
  //   history.push("/detalletarea");
  // };

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

  const handleHora = (val) => {
    let hora = moment(val).format("LT");
    return hora;
  };

  return (
    <div className="div_lista_tareas">
      {ItemListaTarea.map((ItemListaTarea) => (
        <div>
          <List>
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
              <List.Item
                className="lista_tarea_calendar"
                key={ItemListaTarea.key}
                description={
                  <div className="prioridad_cliente">
                    <div>
                      {ItemListaTarea.prioridad === "ALTA" ? (
                        <div
                          style={{
                            height: "20px",
                            width: "40px",
                            fontSize: "12px",
                            backgroundColor: "#da4453",
                            color: "white",
                            border: "solid 1px #da4453",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2px 5px",
                          }}
                        >
                          ALTA
                        </div>
                      ) : null}
                      {ItemListaTarea.prioridad === "MEDIA" ? (
                        <div
                          style={{
                            height: "20px",
                            width: "40px",
                            fontSize: "12px",
                            backgroundColor: "#f7c560",
                            color: "white",
                            border: "solid 1px #f7c560",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2px 5px",
                          }}
                        >
                          MEDIA
                        </div>
                      ) : null}
                      {ItemListaTarea.prioridad === "BAJA" ? (
                        <div
                          style={{
                            height: "20px",
                            width: "40px",
                            fontSize: "12px",
                            backgroundColor: "#8cc152",
                            color: "white",
                            border: "solid 1px #8cc152",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2px 5px",
                          }}
                        >
                          BAJA
                        </div>
                      ) : null}
                    </div>
                    <div className="icon_cliente">
                      <ShopbagOutline style={{ color: "#00B33C" }} />{" "}
                      <p className="p_cliente">{ItemListaTarea.cliente}</p>
                    </div>
                  </div>
                }
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    {handleHora(ItemListaTarea.fechaHora)}
                  </div>
                  <div
                    className="div_tarea_calendar"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Ellipsis direction="end" content={ItemListaTarea.asunto} />
                  </div>
                </div>
              </List.Item>
            </SwipeAction>
          </List>
        </div>
      ))}

      <div style={{ height: "40px" }}></div>
    </div>
  );
};

export default ListaCalendario;
