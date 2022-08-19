import { CapsuleTabs, Ellipsis, Steps } from "antd-mobile";
import {
  UserCircleOutline,
  UserOutline,
  FilterOutline,
  BellOutline,
  CalendarOutline,
} from "antd-mobile-icons";
import { Step } from "antd-mobile/es/components/steps/step";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TareaNegocio } from "../tareaNegocio/TareaNegocio";
import "./negocioCompleto.css";

export const NegocioCompleto = () => {
  const tareas = [
    {
      id: 1,
      asunto: "Visitar para cerrar propuesta",
      cliente: "Tres Arroyos",
      fechaInicio: "27/07/22",
      cierreEstimado: "24/08/2022",
      contacto: "ADRIAN SABO",
      tipoTarea: "Visita de campo",
      tipo: "#T",
    },
    {
      id: 2,
      asunto: "Visita de seguimiento",
      cliente: "Tres Arroyos",
      fechaInicio: "28/07/22",
      cierreEstimado: "24/08/2022",
      contacto: "ADRIAN SABO",
      tipoTarea: "Visita de campo",
      tipo: "#T",
    },
  ];

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

  const tareasOrdenadas = (negocio) => {
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

  const location = useLocation();

  const [negocio, setNegocio] = useState(location.state[0]);
  
  useEffect(() => {
    setTareasDefinitivo(tareasOrdenadas(negocio));
  }, []);

  const componentHandler = () => {

  }

  return (
    <div className="contenedor-negocio-completo">
      <div className="negocio-completo-header">
        <p className="negocio-completo-header-asunto">{negocio.asunto}</p>
        <p className="negocio-completo-header-importe">
          {negocio.moneda +
            " " +
            negocio.importe.toLocaleString("de-DE", {
              minimumFractionDigits: 0,
            })}
        </p>
        <div className="negocio-completo-header-linea">
          <UserCircleOutline />
          <p className="negocio-completo-header-texto">{negocio.cliente}</p>
        </div>
        {negocio.contacto.length > 0 && (
          <div className="negocio-completo-header-linea">
            <UserOutline />
            <p className="negocio-completo-header-texto">{negocio.contacto}</p>
          </div>
        )}
        <div className="negocio-completo-header-linea">
          <FilterOutline />
          <p className="negocio-completo-header-texto">{negocio.embudo}</p>
        </div>
        <div className="negocio-completo-header-linea">
          <BellOutline />
          <p className="negocio-completo-header-texto">
            {negocio.cierreEstimado}
          </p>
        </div>
      </div>
      <CapsuleTabs className="capsuletabs-negocio">
        <CapsuleTabs.Tab title="Info" key="1">
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
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Planificado" key="2">
          <div className="negocio-linea-tiempo-contenedor">
            <Steps direction="vertical">
              {tareas.map( tarea => {
                  switch (tarea.tipo) {
                    case "#T":
                      return <Step description={<TareaNegocio tarea={tarea}/>} icon={<CalendarOutline style={{color:"#00B33C"}}/>} />
                      break;
                    case "#N":
                      break;
                    case "#A":
                      break;
                  }
                })
              }
              
            </Steps>
          </div>
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Completado" key="3"></CapsuleTabs.Tab>
      </CapsuleTabs>
    </div>
  );
};
