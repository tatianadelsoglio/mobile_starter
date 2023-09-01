import { Calendar, CapsuleTabs } from "antd-mobile";
import moment from "moment";
import ListaTarea from "../listaTareas/ListaTarea";
import { CalendarOutline } from "antd-mobile-icons";
import "./Tareas.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useQuery } from "@apollo/client";
import { GET_TAREAS_CALENDARIO } from "../../../graphql/queries/TareaCalendario";
import QueryResult from "../../queryResult/QueryResult";
import { TareasSemana } from "../tareasSemana/TareasSemana";
import { TareasSemanaProxima } from "../tareasSemanaProxima/TareasSemanaProxima";
import { TareasVencidas } from "../tareasVencidas/TareasVencidas";
import { GET_TAREAS_MOBILE } from "../../../graphql/queries/TareaMobile";

const Tareas = () => {
  const { tareas, setTareas, userId, setPollTareas, tabTareasActivo, setTabTareasActivo } =
    useContext(GlobalContext);

  const [tareasCalendario, setTareasCalendario] = useState();

  /*Estados de consulta */
  const [filtroFecha, setFiltroFecha] = useState(moment().format("YYYY-MM-DD"));

  const [tareasMobile, setTareasMobile] = useState();

  const {
    data: dataCalendario,
    error,
    loading,
    startPolling, 
    stopPolling
  } = useQuery(GET_TAREAS_CALENDARIO, {
    variables: {
      idUsuario: userId,
    },
  });

  const {
    data: dataMobile,
    error: errorMobile,
    loading: loadingMobile,
    startPolling: startPollingMobile, 
    stopPolling: stopPollingMobile
  } = useQuery(GET_TAREAS_MOBILE, {
    variables: {
      idUsuario: userId,
    },
  });

  const ordenarDatos = (tareasBasico, filtroFecha) => {
    let fecha = moment(filtroFecha, "YYYY-MM-DD").format("DD/MM/YYYY");
    let tareasOrdenadas;
    if (tareasBasico) {
      tareasBasico = tareasBasico.filter(
        (tarea) => tarea.fechavencimiento === fecha
      );
      tareasOrdenadas = tareasBasico.sort(function (a, b) {
        return (
          new Date(
            moment(b.fechavencimiento, "DD/MM/YYYY").format("YYYY,MM,DD")
          ) -
          new Date(
            moment(a.fechavencimiento, "DD/MM/YYYY").format("YYYY,MM,DD")
          )
        );
      });
      setTareas(tareasOrdenadas);
    }
  };

  const handleChange = (val) => {
    setFiltroFecha(moment(val).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    setPollTareas({inicial:startPolling, stop:stopPolling});
    if (dataCalendario) {
      if(JSON.parse(dataCalendario.getTareasPropiasMobileResolver)){
        console.log(JSON.parse(dataCalendario.getTareasPropiasMobileResolver))
        ordenarDatos(JSON.parse(dataCalendario.getTareasPropiasMobileResolver).tareasPropiasPorFecha,
          filtroFecha
        );
        setTareasCalendario(
          JSON.parse(dataCalendario.getTareasPropiasMobileResolver).fechasVenc
        );
      }
    }
  }, [dataCalendario, filtroFecha]);

  useEffect(() => {
    startPollingMobile(1000);
    setTimeout(() => {
      stopPollingMobile();
    }, 1000);
  }, [dataCalendario])

  useEffect(() => {
    if (dataMobile) {
      setTareasMobile(JSON.parse(dataMobile.getTareasMobileResolver));
    }
  }, [dataMobile]);
  
  return (
    <CapsuleTabs
      className="capsule_contenedor"
      defaultActiveKey={tabTareasActivo}
      onChange={(v) => setTabTareasActivo(v)}
    >
      {/* PESTAÑA TAREAS HOY */}
      <CapsuleTabs.Tab title={<CalendarOutline />} key="1">
        {tabTareasActivo === "1" && (
          <>
            <div>
              <Calendar
                selectionMode="single"
                weekStartsOn='Monday'
                defaultValue={filtroFecha}
                renderLabel={
                  tareasCalendario &&
                  ((date) => {
                    let bandera = false;

                    tareasCalendario.map((tarea) => {
                      let fechaCalendario = moment(date).format("YYYY-MM-DD");

                      if (fechaCalendario === tarea.tar_vencimiento) {
                        bandera = true;
                      }

                      return bandera;
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
                  })
                }
                onChange={(val) => handleChange(val)}
              />
            </div>
            <QueryResult loading={loading} error={error} data={tareas}>
              <div className="div_lista_calendario">
                {tareas && <ListaTarea itemListaTarea={tareas} />}
              </div>
            </QueryResult>
          </>
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Semana" key="2" disabled={!tareasMobile}>
        {tabTareasActivo === "2" && (
          <TareasSemana
            tareasParametro={tareasMobile && tareasMobile.tareasEstaSemana}
            error={errorMobile && errorMobile}
            loading={loadingMobile && loadingMobile}
          />
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Semana Prox." key="3" disabled={!tareasMobile}>
        {tabTareasActivo === "3" && (
          <TareasSemanaProxima
            tareasParametro={tareasMobile && tareasMobile.tareasProximaSemana}
            error={errorMobile && errorMobile}
            loading={loadingMobile && loadingMobile}
          />
        )}
      </CapsuleTabs.Tab>

      <CapsuleTabs.Tab title="Vencido" key="4" disabled={!tareasMobile}>
        {tabTareasActivo === "4" && (
          <TareasVencidas
            tareasParametro={tareasMobile && tareasMobile.tareasVencidas}
            error={errorMobile && errorMobile}
            loading={loadingMobile && loadingMobile}
          />
        )}
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
