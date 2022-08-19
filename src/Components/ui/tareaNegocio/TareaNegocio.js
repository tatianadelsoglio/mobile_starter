import moment from 'moment';
import './tareaNegocio.css';
import {CheckOutline} from "antd-mobile-icons";

export const TareaNegocio = ({tarea}) => {

  return (
    <div className="tarea-negocio-wrapper">
        <div className="tarea-negocio-linea-superior">
            <p className="tarea-negocio-titulo">{tarea.asunto}</p>
            <CheckOutline style={{color: "#00B33C", marginRight: "5px", fontSize: "1rem"}}/>
        </div>
        <div className="tarea-negocio-linea-inferior">
            <p className="tarea-negocio-fecha">{moment(tarea.fechaInicio, "DD/MM/YYYY").fromNow()}</p>
            <p className="tarea-negocio-contacto">{tarea.contacto}</p>
        </div>
    </div>
  )
}
