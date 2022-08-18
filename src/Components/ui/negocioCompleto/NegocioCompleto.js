import { Ellipsis } from "antd-mobile";
import {
  UserCircleOutline,
  UserOutline,
  FilterOutline,
  BellOutline,
  CalendarOutline,
} from "antd-mobile-icons";
import moment from "moment";
import { useEffect, useState } from "react";
import "./negocioCompleto.css";

export const NegocioCompleto = () => {
  const negocio = {
    id: 2,
    asunto: "Venta de trigo asdgasdgasd has hsdfhsdf hsdfhsdfh sdfhsfhsdfhsfhs",
    cliente: "Tres Arroyos",
    importe: 500,
    fechaInicio: "27/07/22",
    cierreEstimado: "24/08/2022",
    moneda: "USD",
    contacto: "ADRIAN SABO",
    embudo: "ESTIMULUS",
    tareas: [
      "Cotización",
      "Visita de campo",
      "Cotización",
      "Visita de campo",
      "Otro",
      "Otro mas",
      "Último",
    ],
  };

  const getColor = (i) => {
    const colorList = [
      "#ff7f50",
      "#87cefa",
      "#da70d6",
      "#32cd32",
      "#6495ed",
      "#ff69b4",
      "#ffa500",
      "#40e0d0",
      "#66f666",
      "#FFA07A",
      "#0066ff",
      "#FA8072",
      "#8DC4DE",
      "#7FFF00",
      "#ba55d3",
      "#cd5c5c",
      "#ADFF2F",
      "#FF0000",
      "#00FF7F",
      "#ADD8E6",
      "#6B8E23",
      "#9ACD32",
      "#3322ff",
      "#32CD32",
    ];

    i = i - 1;

    while (i > colorList.length) {
      i = i - colorList.length;
    }

    return colorList[i];
  };

  const tareasOrdenadas = () => {
    let tareasParametro = negocio.tareas.sort(function (a, b) {
      return a.localeCompare(b);
    });

    let palabra = negocio.tareas[0];

    let objetoTareas = [];

    let cantidad = 0;

    let total = tareasParametro.length;

    for (let i = 0; i <= tareasParametro.length; i++) {
      if (tareasParametro[i] === palabra) {
        cantidad += 1;
      } else {
        objetoTareas.push({
          task: palabra,
          count: cantidad,
          suma: total,
          orden: i,
        });
        cantidad = 1;
        palabra = tareasParametro[i];
      }
    }
    return objetoTareas;
  };

  const [tareasDefinitivo, setTareasDefinitivo] = useState([{}]);

  useEffect(() => {
    setTareasDefinitivo(tareasOrdenadas());
  }, []);

  return (
    <div className="contenedor-negocio-completo">
      <div className="negocio-completo-header">
        <Ellipsis
          direction="end"
          content={negocio.asunto}
          className="negocio-completo-header-asunto"
          expandText="más"
          collapseText="...menos"
        />
        <Ellipsis
          direction="end"
          content={negocio.moneda + " " + negocio.importe}
          className="negocio-completo-header-importe"
          expandText="...más"
          collapseText="...menos"
        />
        <div className="negocio-completo-header-linea">
          <UserCircleOutline />
          <Ellipsis
            direction="end"
            content={negocio.cliente}
            className="negocio-completo-header-texto"
            expandText="...más"
            collapseText="...menos"
          />
        </div>
        {negocio.contacto.length > 0 && (
          <div className="negocio-completo-header-linea">
            <UserOutline />
            <Ellipsis
              direction="end"
              content={negocio.contacto}
              className="negocio-completo-header-texto"
              expandText="...más"
              collapseText="...menos"
            />
          </div>
        )}
        <div className="negocio-completo-header-linea">
          <FilterOutline />
          <Ellipsis
            direction="end"
            content={negocio.embudo}
            className="negocio-completo-header-texto"
            expandText="...más"
            collapseText="...menos"
          />
        </div>
        <div className="negocio-completo-header-linea">
          <BellOutline />
          <Ellipsis
            direction="end"
            content={negocio.cierreEstimado}
            className="negocio-completo-header-texto"
            expandText="...más"
            collapseText="...menos"
          />
        </div>
      </div>
      <div className="negocio-completo-caja-grafica">
        <div className="negocio-grafica-linea">
          <p className="negocio-antiguedad">Antigüedad del negocio</p>
          <p className="negocio-antiguedad-dias">
            {moment(negocio.fechaInicio, "DD/MM/YYYY").fromNow()}
          </p>
        </div>
        <div className="negocio-grafico-degrade"></div>
        <p className="negocio-tareas">Tareas</p>
        <div className="negocio-grafico-tareas">
          {tareasDefinitivo.map((tarea) => {
            return (
              <span
                className="negocio-caja-tarea-grafico"
                style={{
                  backgroundColor: `${getColor(tarea.orden)}`,
                  width: `${(tarea.count / tarea.suma) * 100}%`,
                }}
              ></span>
            );
          })}
        </div>
        <div className="negocio-grafico-referencias">
          {tareasDefinitivo.map((tarea) => {
            return (
              <div className="negocio-grafico-referencias-linea">
                <span
                  className="negocio-grafico-referencia-cuadrito"
                  style={{ backgroundColor: `${getColor(tarea.orden)}` }}
                ></span>
                <p className="negocio-tarea-texto">{`${tarea.task} (${tarea.count})`}</p>
                <p className="negocio-tarea-texto">{`- ${Math.round(
                  (tarea.count / tarea.suma) * 100
                )}%`}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="negocio-linea-tiempo-contenedor">
        <div className="negocio-linea-tiempo-header">
          <CalendarOutline style={{ color: "#00B33C" }} />
          <div className="negocio-descripcion">
            <Ellipsis
              direction="end"
              content={negocio.asunto}
              className="negocio-completo-header-asunto"
              expandText="más"
              collapseText="...menos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
