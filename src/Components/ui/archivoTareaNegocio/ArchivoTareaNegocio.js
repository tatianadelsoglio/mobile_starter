import { LinkOutline } from "antd-mobile-icons";
import moment from "moment";
import "./archivoTareaNegocio.css";

export const ArchivoTareaNegocio = ({ archivo, interno=false, display=true}) => {

  if(display === true) {
    return (
      <div className={interno ? "archivo-tarea-wrapper-interno" : "archivo-tarea-wrapper"} >
        <div className="archivo-tarea-imagen">
          <img height={"50px"} width={"50px"} alt="#" src="https://cdn-icons-png.flaticon.com/512/136/136524.png" />
        </div>
        <div>
          <p className="archivo-tarea-nombre">{archivo.nombre}</p>
          <div className="archivo-tarea-linea-inferior">
            <p className="archivo-tarea-hora">
              {moment(archivo.fecha, "DD/MM/YYYY").fromNow()}
            </p>
            <p className="archivo-tarea-peso">{archivo.peso}</p>
            <div className="archivo-tarea-item">
              <LinkOutline />
              <p className="archivo-tarea-peso">{archivo.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <>
    </>
  }
  
};
