/* eslint-disable no-unused-vars */
import { Calendar, Collapse } from "antd-mobile";
import React, { useState } from "react";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Calendario.css";
import moment from "moment";

const defaultSingle = new Date();

const Calendario = () => {
  const [fecha, setFecha] = useState({
    content: defaultSingle,
  });

  const [fechaLi, setFechaLi] = useState({
    content: defaultSingle,
  });


  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD/MM/YYYY");
    setFecha({
      content: fechaSelec,
    })

    console.log(fecha);
  }

  const calendarLista = () => {
    setFechaLi(setFecha);
  }


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
                <ListaTarea calendarLista={fechaLi} />
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
    </>
  );
};

export default Calendario;
