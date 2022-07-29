import { Calendar, Collapse } from "antd-mobile";
import React from "react";
import ListaTareaCalendar from "../listaTareas/ListaTarea";

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
              <Collapse defaultActiveKey={["1"]}>
                <Collapse.Panel
                  key="1"
                  title="Lista de tareas para la fecha: 29-07-2022"
                >
                  <ListaTareaCalendar />
                </Collapse.Panel>
              </Collapse>
            </div>
          </div>
      </div>
    </>
  );
};

export default Calendario;
