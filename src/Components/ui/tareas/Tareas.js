/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { Calendar, CapsuleTabs } from "antd-mobile";
import moment from "moment";
import ListaTarea from "../listaTareas/ListaTarea";
import { CalendarOutline } from "antd-mobile-icons";
import "./Tareas.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";


const Tareas = () => {
  const { tareas } = useContext(GlobalContext);

  const [tareasDiarias, setTareasDiarias] = useState();
  const [tareasSemana, setTareasSemana] = useState();
  const [tareasSemanaProxima, setTareasSemanaProxima] = useState();
  const [tareasVencidas, setTareasVencidas] = useState();

  let today = moment().format("DD/MM/YYYY");
  const [fecha, setFecha] = useState(today);

  useEffect(() => {
    if (tareas) {
      listaTareasHoy();
      listaTareasES();
      listaTareasSP();
      listaTareasVC();
    }
  }, [tareas, fecha]);

  //! FILTRO PARA HOY LISTA DE TAREAS / INICIO DEL METODO TAB 1

  //*TAB 1 - SECCION CALENDARIO

  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD/MM/YYYY");
    setFecha(fechaSelec);
  };

  //*TAB 1 - SECCION CALENDARIO

  //*TAB 1 - SECCION LISTA TAREA

  const listaTareasHoy = () => {
    let hoy = [];

    tareas.map((tarea) => {
      let fechaFormato = tarea.fechaHora.split(" ");
      fechaFormato = fechaFormato[0];

      fechaFormato = moment(fechaFormato, "DD/MM/YYYY").format("DD/MM/YYYY");

      if (fechaFormato === fecha) {
        hoy.push(tarea);
      }
    });

    setTareasDiarias(hoy);

    return 1;
  };

  //! FILTRO POR SEMANA LISTA DE TAREAS / INICIO DEL METODO TAB 2

  let StartES = moment().startOf("isoWeek").format("DD/MM/YYYY");

  let EndES = moment().endOf("isoWeek").format("DD/MM/YYYY");

  const listaTareasES = () => {
    let ES = [];
    tareas.map((tarea) => {
      let fechaSola = tarea.fechaHora.split(" ");
      fechaSola = fechaSola[0];
      let fecha = moment(fechaSola, "DD/MM/YYYY");

      StartES = moment(StartES, "DD/MM/YYYY");
      EndES = moment(EndES, "DD/MM/YYYY");

      if (fecha >= StartES) {
        if (fecha <= EndES) {
          ES.push(tarea);
        }
      }
      return 1;
    });

    setTareasSemana(ES);
  };

  // // console.log("Lista de tareas ESTA SEMANA: ", arrayES);
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 1

  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 2

  let StartSP = moment()
    .add(1, "weeks")
    .startOf("isoWeek")
    .format("DD/MM/YYYY");

  let EndSP = moment().add(1, "weeks").endOf("isoWeek").format("DD/MM/YYYY");

  const listaTareasSP = () => {
    let SP = [];

    tareas.map((tarea) => {
      let fechaSola = tarea.fechaHora.split(" ");
      fechaSola = fechaSola[0];
      let fecha = moment(fechaSola, "DD/MM/YYYY");

      StartSP = moment(StartSP, "DD/MM/YYYY");
      EndSP = moment(EndSP, "DD/MM/YYYY");

      if (fecha >= StartSP) {
        if (fecha <= EndSP) {
          SP.push(tarea);
        }
      }
      return 1;
    });

    setTareasSemanaProxima(SP);
  };

  // // console.log("Lista de tareas SEMANA PROXIMA: ", arraySP);
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 2

  //! FILTRO POR SEMANA LISTA DE TAREAS / INICIO DEL METODO TAB 3

  
  let horaActual = moment().format("LT");

  const listaTareasVC = () => {

    let VC = [];
    tareas.map((tarea) => {
      let fechaSola = tarea.fechaHora.split(" ");
      let hora = fechaSola[1];
      fechaSola = fechaSola[0];
      let fecha = moment(fechaSola, "DD/MM/YYYY");
      hora = moment(hora, "LT");

      horaActual = moment(horaActual, "LT");

      let hoyVC = moment(today, "DD/MM/YYYY").add(1, "day");

      today = moment(today, "DD/MM/YYYY");

      if (fecha < today) {
        VC.push(tarea);
      } else if (fecha < hoyVC) {
        if (hora < horaActual) {
          VC.push(tarea);
        }
      }
      return "";
    });

    setTareasVencidas(VC);
  };

  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 4

  return (
    <CapsuleTabs className="capsule_contenedor" defaultActiveKey="1">
      {/* PESTAÑA TAREAS HOY */}
      <CapsuleTabs.Tab title={<CalendarOutline />} key="1">
        <div>
          <Calendar
            selectionMode="single"
            // defaultValue={defaultSingle}
            renderLabel={(date) => {
              let bandera = false;

              tareas.map((tarea) => {
                let fechaHoySola = tarea.fechaHora.split(" ");
                fechaHoySola = fechaHoySola[0];
                let fechaHoy = moment(fechaHoySola, "DD/MM/YYYY").format(
                  "DD/MM/YYYY"
                );
                let fechaCalendario = moment(date).format("DD/MM/YYYY");

                if (fechaCalendario === fechaHoy) {
                  return (bandera = true);
                }
              });

              if (bandera === true) {
                return (
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#56b43c",
                      margin: "0px",
                    }}
                  >
                    •
                  </p>
                );
              }
            }}
            onChange={(val) => handleChange(val)}
          />
        </div>
        {tareasDiarias && (
          <div className="div_lista_calendario">
            <ListaTarea itemListaTarea={tareasDiarias} />
          </div>
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Semana" key="2">
        {tareasSemana && (
          <div className="div_lista">
            <ListaTarea itemListaTarea={tareasSemana} />
          </div>
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Semana Prox." key="3">
        {tareasSemanaProxima && (
          <div className="div_lista">
            <ListaTarea itemListaTarea={tareasSemanaProxima} />
          </div>
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Vencido" key="4">
        {tareasVencidas && (
          <div className="div_lista">
            <ListaTarea itemListaTarea={tareasVencidas} />
          </div>
        )}
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
