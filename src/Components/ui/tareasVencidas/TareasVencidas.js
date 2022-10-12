import moment from "moment";
import { useEffect, useState } from "react";
import QueryResult from "../../queryResult/QueryResult";
import ListaTarea from "../listaTareas/ListaTarea";
// import ReactSpinnerTimer from "react-spinner-timer";
// import { AutoSizer, List } from "react-virtualized";
import { TailSpin } from "react-loader-spinner";
import { FixedSizeList } from "react-window";

export const TareasVencidas = ({tareasParametro, error, loading}) => {
  const [tareas, setTareas] = useState();
  // const [estado] = useState(1);

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
    if (tareasParametro) {
      ordenarDatos(tareasParametro);
    }
  }, [tareasParametro]);

  const [timeOff, setTimeOff] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeOff(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryResult loading={loading} error={error} data={tareas}>
      {tareas && (    
        <div className="div_lista">
          <ListaTarea itemListaTarea={tareas} />
        </div>
      )}
    </QueryResult>
  );
};
