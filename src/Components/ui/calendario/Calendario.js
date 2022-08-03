/* eslint-disable no-unused-vars */
import { Calendar, Collapse } from "antd-mobile";
import React, { useContext, useState } from "react";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Calendario.css";
import moment from "moment";
import { GlobalContext } from "../../context/GlobalContext";

const defaultSingle = new Date();

const Calendario = () => {

  const {fecha, setFecha} = useContext(GlobalContext);



  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD/MM/YYYY");
    setFecha({
      content: fechaSelec,
    })
  }

  console.log(fecha);

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
            <Collapse>
              <Collapse.Panel key="1" title="Lista de tareas para la fecha">
                <ListaTarea handleChange={fecha} />
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
    </>
  );
};

export default Calendario;
