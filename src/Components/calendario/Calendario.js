import { Calendar } from "antd-mobile";
import React from "react";
import ListaTareaCalendar from "../listaTareasCalendar/ListaTareaCalendar";

const defaultSingle = new Date();

const Calendario = () => {
  return (
    <>
      <div>
        <div>
          <Calendar
            selectionMode="single"
            defaultValue={defaultSingle}
            onChange={(val) => {
              console.log(val);
            }}
          />
        </div>
        <div>
            <div>
                <h4>Lista de tareas para la fecha:dd-mm-yy</h4>
            </div>
            <div>
                <div style={{overflow:"auto"}}>
                    <ListaTareaCalendar/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Calendario;
