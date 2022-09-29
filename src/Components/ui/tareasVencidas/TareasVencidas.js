/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { GET_TAREAS } from "../../../graphql/queries/Tarea";
import { GlobalContext } from "../../context/GlobalContext";
import QueryResult from "../../queryResult/QueryResult";
import ListaTarea from "../listaTareas/ListaTarea";
import ReactSpinnerTimer from "react-spinner-timer";
import { AutoSizer, List } from "react-virtualized";
import { TailSpin } from "react-loader-spinner";
import { FixedSizeList } from "react-window";

export const TareasVencidas = () => {
  const [tareas, setTareas] = useState();
  const [estado] = useState(1);

  const { userId } = useContext(GlobalContext);

  const { loading, error, data } = useQuery(GET_TAREAS, {
    variables: {
      idUsuario: userId,
      filtroFecha: "expired",
      fecha: moment().format("YYYY-MM-DD"),
      estado: estado,
      idUsuarioFiltro: "",
      idClienteFiltro: null,
    },
  });

  const ordenarDatos = (tareas) => {
    let tareasOrdenadas;

    if (tareas) {
      tareasOrdenadas = tareas.sort(function (a, b) {
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
  /* INTENTO 3000 REACT LISTA VIRTUAL*/
  // console.log("Tareas vencidas: ", tareas.length);

  const getItemSize = (index) => tareas[index];

  const row = () => {
    <>
      <QueryResult loading={loading} error={error} data={tareas}>
        <FixedSizeList
          height={500}
          width={500}
          itemSize={getItemSize}
          itemCount={tareas.length}
        >
          <div className="div_lista">
            <ListaTarea itemListaTarea={tareas} />
          </div>
        </FixedSizeList>
      </QueryResult>
    </>;
  };
  /* INTENTO 3000 REACT LISTA VIRTUAL*/

  useEffect(() => {
    if (data) {
      ordenarDatos(JSON.parse(data.getTareasIframeResolver));
    }
  }, [data]);

  const [timeOff, setTimeOff] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeOff(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryResult loading={loading} error={error} data={tareas}>
      {tareas && timeOff === true ? (
        <TailSpin
          height="30"
          width="30"
          color="#56b43c"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{marginLeft:"47%", marginTop:"12%"}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div className="div_lista">
          <ListaTarea itemListaTarea={tareas} />
        </div>
      )}
    </QueryResult>
    // <QueryResult loading={loading} error={error} data={tareas}>
    //   {tareas && (
    //     <FixedSizeList
    //       height={500}
    //       width={500}
    //       itemSize={getItemSize}
    //       itemCount={tareas.length}
    //     >
    //      {row}
    //     </FixedSizeList>
    //   )}
    // </QueryResult>
  );
};
