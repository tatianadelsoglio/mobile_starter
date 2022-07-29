import { Calendar, Collapse, ConfigProvider } from "antd-mobile";
import React from "react";
import ListaTareaCalendar from "../listaTareas/ListaTarea";
import es_ES from 'antd-mobile/es/locales/es-ES';

const defaultSingle = new Date();

const Calendario = () => {
  return (
    <>
    <ConfigProvider locale={es_ES}>
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
    </ConfigProvider>
    </>
  );
};

export default Calendario;
