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
import { GET_TAREAS_CALENDARIO } from "../../../graphql/queries/TareaCalendario";

const Tareas = () => {
  const { tareas, setTareas, userId } = useContext(GlobalContext);

  let today = moment().format("DD/MM/YYYY");
  const [fecha, setFecha] = useState(today);

  const [tareasCalendario, setTareasCalendario] = useState();

  let d = moment(fecha).format("YYYY-MM-DD");

  /*Estados de consulta */
  const [filtroFecha, setFlitroFecha] = useState({
    typeDate: "date",
    filterDate: moment().format("YYYY-MM-DD"),
  });
  const [estado, setEstado] = useState(1);

  const { loading, error, data } = useQuery(GET_TAREAS, {
    variables: {
      idUsuario: userId,
      filtroFecha: filtroFecha.typeDate,
      fecha: filtroFecha.filterDate,
      estado: estado,
      idUsuarioFiltro: "",
    },
  });

  const { data: dataCalendario } = useQuery(GET_TAREAS_CALENDARIO, {
    variables: {
      idUsuario: userId,
      fecha: "1900-01-01",
    }
  })

  const tabHandleChange = (key) => {
    switch (true) {
      case key === "2":

        const b = moment().year();
        const a = moment().week();
        const c = `${b}${a}`;
        setFlitroFecha({
          typeDate: "week",
          filterDate: c,
        });
        break;
      case key === "3":
        const b1 = moment().year();
        const a1 = moment().week();
        const nextWeek = Number(a1) + 1;
        const c1 = `${b1}${nextWeek}`;

        setFlitroFecha({ typeDate: "week", filterDate: c1 });
        break;
      case key === "4":
        setFlitroFecha({
          typeDate: "expired",
          filterDate: moment().format("YYYY-MM-DD"),
        });
        break;
      default:
        setFlitroFecha({
          typeDate: "date",
          filterDate: moment().format("YYYY-MM-DD"),
        });
        break;
    }
  };

  useEffect(() => {
    if(data) {
      setTareas(JSON.parse(data.getTareasIframeResolver));
    }

    if(dataCalendario) {
      setTareasCalendario((JSON.parse(dataCalendario.getTareasParaCalendarioIframeResolver)).fechasVenc);
    }
  }, [data, dataCalendario]);

  // useEffect(() => {
  //   console.log(tareas);
  //   console.log(tareasCalendario);
  // }, [tareas, tareasCalendario]);

  //! FILTRO PARA HOY LISTA DE TAREAS / INICIO DEL METODO TAB 1

  //*TAB 1 - SECCION CALENDARIO

  const handleChange = (val) => {
    // let fechaSelec = moment(val).format("DD/MM/YYYY");
    // setFecha(fechaSelec);

    setFlitroFecha({
      typeDate: "date",
      filterDate: moment(val).format("YYYY-MM-DD"),
    });
  };


  return (
    <CapsuleTabs
      className="capsule_contenedor"
      defaultActiveKey="1"
      onChange={(key) => 
        tabHandleChange(key)}
    >
      {/* PESTAÑA TAREAS HOY */}
      <CapsuleTabs.Tab title={<CalendarOutline />} key="1">
        <div>
          <Calendar
            selectionMode="single"
            // defaultValue={defaultSingle}
            renderLabel={tareasCalendario && ((date) => {
              let bandera = false;

              tareasCalendario.map((tarea) => {
                
                let fechaCalendario = moment(date).format("YYYY-MM-DD");

                if (fechaCalendario === tarea.tar_vencimiento) {
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
            })}
            onChange={(val) =>handleChange(val)}
          />
        </div>
        {tareas && (
          <div className="div_lista_calendario">
            <ListaTarea itemListaTarea={tareas} />
          </div>
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Semana" key="2">
        {tareas && (
          <div className="div_lista">
            <ListaTarea itemListaTarea={tareas} />
          </div>
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Semana Prox." key="3">
        {tareas && (
          <div className="div_lista">
            <ListaTarea itemListaTarea={tareas} />
          </div>
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Vencido" key="4">
        {tareas && (
          <div className="div_lista">
            <ListaTarea itemListaTarea={tareas} />
          </div>
        )}
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
