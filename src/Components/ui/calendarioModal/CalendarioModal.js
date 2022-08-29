import { ConfigProvider } from "antd-mobile";
import es_ES from 'antd-mobile/es/locales/es-ES';
import { Calendar } from "antd-mobile";
import './CalendarioModal.css';
import moment from "moment";
// import { useEffect, useState } from "react";

export const CalendarioModal = ({fechaCalendario}) => {

  // const [fecha, setFecha] = useState();

  const fechaChangeHandler = (v) => {
    // v.preventDefault();
    setTimeout(() => {
      fechaCalendario(v);
    }, 500)
  }

  // useEffect(() => {
  //   if(track==='terminado'){
  //     fechaCalendario(fechaProvisoria);
  //     console.log(fechaProvisoria);
  //   }
  // }, [track])
  

  return (
    <ConfigProvider locale={es_ES}>
        <Calendar selectionMode={'single'} 
        onChange={ (v) => {fechaChangeHandler(moment(v).format("DD/MM/YYYY"))}
          // console.log(moment(v).format("DD/MM/YYYY"))
          // {fechaProvisoria = moment(v).format("DD/MM/YYYY")}
        }
        />
    </ConfigProvider >
  )
}