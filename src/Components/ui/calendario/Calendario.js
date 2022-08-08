/* eslint-disable no-unused-vars */
import { Calendar, Collapse } from "antd-mobile";
import React, { useContext, useState } from "react";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Calendario.css";
import moment from "moment";
import 'moment/locale/es';
import { GlobalContext } from "../../context/GlobalContext";

const Calendario = () => {

  const {fecha, setFecha} = useContext(GlobalContext);



  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD/MM/YYYY");
    setFecha(fechaSelec);
  }

  console.log(fecha);

  let titulo = `Lista de tareas del ${fecha}`;


  return (
    <>
        <div className="div_content_calendario">
          <div>
            <Calendar
              selectionMode="single"
              defaultValue={fecha}
              onChange={(val) => handleChange(val)}
            />
          </div>
          <div className="div_lista">
            <Collapse>
              <Collapse.Panel key="1" title={titulo}>
                <ListaTarea />
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
    </>
  );
};

export default Calendario;
