/* eslint-disable no-unused-vars */
import { Calendar, Collapse } from "antd-mobile";
import React, { useContext, useState } from "react";
import Tareas from "../tareas/Tareas";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Calendario.css";
import moment from "moment";
import 'moment/locale/es';
import { GlobalContext } from "../../context/GlobalContext";

const defaultSingle = new Date();

const Calendario = () => {

  const {fecha, setFecha} = useContext(GlobalContext);


  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD/MM/YYYY");
    setFecha(fechaSelec);
  }

  console.log(fecha);

  let titulo = `Lista de tareas del ${fecha}`;

  //*NO FUNCIONA PORQUE HAY QUE TRAER LA LISTA DE TAREAS POR CONSULTA, YA QUE AHORA ESTA INVENTADO EN EL PROYECTO

  return (
    <>
        <div className="div_content_calendario">
          <div>
            <Calendar
              selectionMode="single"
              defaultValue={defaultSingle}
              onChange={(val) => handleChange(val)}
            />
          </div>
          <div className="div_lista">
            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel  key="1" title={titulo}>
                <ListaTarea />
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
    </>
  );
};

export default Calendario;
