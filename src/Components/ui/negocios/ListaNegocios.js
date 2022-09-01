import "./listaNegocios.css";
import {
  UserOutline,
  ClockCircleOutline,
  ShopbagOutline,
} from "antd-mobile-icons";
import moment from "moment";
import { Popover } from "antd-mobile";
import { useHistory } from "react-router-dom";

export const ListaNegocios = () => {
  let history = useHistory();

  let fechaActual = moment();

  const dateHandler = (fecha) => {
    let fechaParametro = moment(fecha, "DD/MM/YYYY");

    const diff = moment(fechaParametro).diff(fechaActual, "days");

    switch (true) {
      case diff <= 0:
        return "#F44336";
      case diff > 0 && diff <= 5:
        return "#faad14";

      default:
        return "#00b33c";
    }
  };

  const data = [
    {
      id: 1,
      asunto: "Venta de soja",
      cliente: "A.P.I.N.T.A.",
      importe: 12500,
      fechaInicio: "27/07/22",
      cierreEstimado: "27/08/2022",
      moneda: "USD",
      contacto: "",
      embudo: "ESTIMULUS",
      etapa: "Etapa 1",
      tareas: [
        "Cotización",
        "Visita de campo",
        "Cotización",
        "Visita de campo",
        "Otro",
        "Otro mas",
        "Último",
      ],
    },
    {
      id: 2,
      asunto: "Venta de trigo",
      cliente: "Tres Arroyos",
      importe: 500,
      fechaInicio: "27/07/22",
      cierreEstimado: "31/08/2022",
      moneda: "USD",
      contacto: "ADRIAN SABO",
      embudo: "ESTIMULUS",
      etapa: "Etapa 1",
      tareas: [
        "Cotización",
        "Visita de campo",
        "Cotización",
        "Visita de campo",
        "Otro",
        "Otro mas",
        "Último",
      ],
    },
    {
      id: 3,
      asunto: "Venta de soja",
      cliente: "SABO ADRIAN",
      importe: 850,
      fechaInicio: "27/07/22",
      cierreEstimado: "01/09/2022",
      moneda: "ARS",
      contacto: "ADRIAN SABO",
      embudo: "ESTIMULUS",
      etapa: "Etapa 1",
      tareas: [
        "Cotización",
        "Visita de campo",
        "Cotización",
        "Visita de campo",
        "Otro",
        "Otro mas",
        "Último",
      ],
    },
    {
      id: 4,
      asunto: "Venta de semillas",
      cliente: "SABO ADRIAN",
      importe: 1,
      fechaInicio: "27/07/22",
      cierreEstimado: "06/09/2022",
      moneda: "ARS",
      contacto: "ADRIAN SABO",
      embudo: "ESTIMULUS",
      etapa: "Etapa 1",
      tareas: [
        "Cotización",
        "Visita de campo",
        "Cotización",
        "Visita de campo",
        "Otro",
        "Otro mas",
        "Último",
      ],
    },
  ];

  const onCardClick = (id) => {
    let negocio = data.filter((negocio) => negocio.id === id);

    return history.push({
      pathname: `/negocio-completo/${id}`,
      state: { ...negocio },
    });
  };

  return (
    <div className="contenedor-negocios-principal">
      <div className="contenedor-negocios">
        {data.map((negocio) => {
          return (
            <div
              className="card-negocio"
              key={negocio.id}
              onClick={() => onCardClick(negocio.id)}
            >
              <p className="card-negocio-asunto">{negocio.asunto}</p>
              <p className="card-negocio-cliente">
                <span className="span-negocio-cliente">
                  <ShopbagOutline />
                </span>
                {negocio.cliente}
              </p>
              <div className="card-negocio-footer">
                <p className="footer-importe">
                  {negocio.moneda +
                    " " +
                    negocio.importe.toLocaleString("de-DE", {
                      minimumFractionDigits: 0,
                    })}
                </p>
                <div className="importe-iconos">
                  {negocio.contacto.length > 0 && (
                    <Popover
                      content={
                        <p className="popover-negocios">{negocio.contacto}</p>
                      }
                      trigger="click"
                      mode="dark"
                      placement="top-end"
                    >
                      <UserOutline />
                    </Popover>
                  )}
                  <Popover
                    content={
                      <p className="popover-negocios">{`Fecha de cierre: ${negocio.cierreEstimado}`}</p>
                    }
                    placement="top-end"
                    trigger="click"
                    mode="dark"
                  >
                    <ClockCircleOutline
                      // className={
                      //   dateHandler(negocio.cierreEstimado) && "reloj-rojo"
                      // }
                      style={{
                        marginLeft: "1rem",
                        color: dateHandler(negocio.cierreEstimado),
                      }}
                    />
                  </Popover>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
