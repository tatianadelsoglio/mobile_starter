/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { Calendar, CapsuleTabs } from "antd-mobile";
import moment from "moment";
import ListaTarea from "../listaTareas/ListaTarea";
import { CalendarOutline } from "antd-mobile-icons";
import "./Tareas.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useQuery } from "@apollo/client";
import { GET_TAREAS } from "../../../graphql/queries/Tarea";

const Tareas = () => {
  const { tareas, userId } = useContext(GlobalContext);

  let today = moment().format("DD/MM/YYYY");

  const [fecha, setFecha] = useState(today);

  const [tareasDiarias, setTareasDiarias] = useState();
  const [tareasSemana, setTareasSemana] = useState();
  const [tareasSemanaProxima, setTareasSemanaProxima] = useState();
  const [tareasVencidas, setTareasVencidas] = useState();

  /*Estados de consulta */
  const [filtro, setFiltro] = useState({
    idUsuario: userId,
    filtroFecha: "date",
    fecha: today,
    estado: 1,
    idUsuarioFiltro: "",
  });

  // const [filtroFecha, setFiltroFecha] = useState("date");
  // const [fechaConsulta, setFechaConsulta] = useState(fecha);

  console.log(filtro);

  const { loading, error, data } = useQuery(GET_TAREAS, {
    variables: { filtro },
  });

  useEffect(() => {
    if (data) {
      console.log(JSON.parse(data.getTareasIframeResolver));
    }
  }, [data]);

  useEffect(() => {
    console.log(tareasDiarias);
  }, [tareasDiarias]);

  const handleFiltro = (key) => {
    switch (true) {
      case key === "1":
        setFiltro({
          idUsuario: userId,
          filtroFecha: "date",
          fecha: fecha,
          estado: 1,
          idUsuarioFiltro: "",
        });
        break;
      case key === "2":
        setFiltro({
          idUsuario: userId,
          filtroFecha: "date",
          fecha: fecha,
          estado: 1,
          idUsuarioFiltro: "",
        });
        // setFiltroFecha("week");

        break;
      case key === "3":
        // setFiltroFecha("week");

        break;
      case key === "4":
        // setFiltroFecha("date");

        break;
      default:
        break;
    }
  };

  //! FILTRO PARA HOY LISTA DE TAREAS / INICIO DEL METODO TAB 1

  //*TAB 1 - SECCION CALENDARIO

  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD/MM/YYYY");
    setFecha(fechaSelec);
  };

  //*TAB 1 - SECCION CALENDARIO

  //*TAB 1 - SECCION LISTA TAREA

  //! FILTRO POR SEMANA LISTA DE TAREAS / INICIO DEL METODO TAB 2

  // // console.log("Lista de tareas ESTA SEMANA: ", arrayES);
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 1

  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 2

  // // console.log("Lista de tareas SEMANA PROXIMA: ", arraySP);
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 2

  //! FILTRO POR SEMANA LISTA DE TAREAS / INICIO DEL METODO TAB 3

  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 4

  return (
    <CapsuleTabs
      className="capsule_contenedor"
      defaultActiveKey="1"
      onChange={(key) => handleFiltro(key)}
    >
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
            <ListaTarea itemListaTarea={tareas} />
          </div>
        )}
      </CapsuleTabs.Tab>

      {/* <CapsuleTabs.Tab title="Semana" key="2">
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
      </CapsuleTabs.Tab> */}
    </CapsuleTabs>
  );
};

export default Tareas;
