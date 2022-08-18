import "./listaNegocios.css";
import { UserOutline, ClockCircleOutline, UserCircleOutline } from "antd-mobile-icons";
import moment from "moment";
import { Popover } from "antd-mobile";
import { useHistory } from "react-router-dom";

export const ListaNegocios = () => {

  let history = useHistory();

  let fechaActual = moment();

  const dateHandler = (fecha) =>{

    let fechaParametro = (moment(fecha, "DD/MM/YYYY"))
    
    if(fechaParametro <= fechaActual) {
      return true;
    } 
    return false;
  }

  const onCardClick = (id) => {

    return history.push(`/negocio-completo/${id}`)
  }

  const data = [
    {
      id:1,
      asunto: "Venta de soja",
      cliente: "A.P.I.N.T.A.",
      importe: 12500,
      fechaInicio: "27/07/22",
      cierreEstimado: "20/08/2022",
      moneda: "USD",
      contacto: "",
    },
    {
      id:2,
      asunto: "Venta de trigo",
      cliente: "Tres Arroyos",
      importe: 500,
      fechaInicio: "27/07/22",
      cierreEstimado: "16/08/2022",
      moneda: "USD",
      contacto: "ADRIAN SABO"
    },
    {
      id:3,
      asunto: "Venta de soja",
      cliente: "SABO ADRIAN",
      importe: 850,
      fechaInicio: "27/07/22",
      cierreEstimado: "20/07/2022",
      moneda: "ARS",
      contacto: "ADRIAN SABO"
    },
    {
      id:4,
      asunto: "Venta de semillas",
      cliente: "SABO ADRIAN",
      importe: 1,
      fechaInicio: "27/07/22",
      cierreEstimado: "20/08/2022",
      moneda: "ARS",
      contacto: "ADRIAN SABO"
    },
  ];

  return (
    <div className="contenedor-negocios-principal">
      <p className="titulo-negocio">Negocios</p>
      <div className="contenedor-negocios">
        {data.map((negocio) => {
          return (
            <div 
              className="card-negocio"
              key={negocio.id}
              onClick={() => onCardClick(negocio.id)}>
              <p className="card-negocio-asunto">{negocio.asunto}</p>
              <p className="card-negocio-cliente">
                <span className="span-negocio-cliente">
                  <UserCircleOutline />
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
                  {negocio.contacto.length > 0 && 
                    <Popover 
                      content={<p className="popover-negocios">{negocio.contacto}</p>}
                      trigger="click"
                      mode="dark"
                      placement="top-end">
                      <UserOutline />
                    </Popover> }
                  <Popover 
                    content={<p className="popover-negocios">{`Fecha de cierre: ${negocio.cierreEstimado}`}</p>}
                    placement="top-end"
                    trigger="click"
                    mode="dark"
                    >
                    <ClockCircleOutline
                      className={dateHandler(negocio.cierreEstimado) && "reloj-rojo"}
                      style={{marginLeft:"1rem"}}
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
