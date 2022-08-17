/* eslint-disable no-unused-vars */
import { Calendar, Collapse } from "antd-mobile";
import React, { useContext, useState } from "react";
import ListaCalendario from "../listaCalendario/TareasCalendario";
import "./Calendario.css";
import moment from "moment";
import 'moment/locale/es';
import TareasCalendario from "../listaCalendario/TareasCalendario";
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

  const ItemListaTarea = [
    {
      key: 1,
      description: "Adrian Sabo",
      hora: "08:30",
      fecha: "11/08/2022",
      content: "Llamar a Adrian, conversar sobre nuevos insumos",
    },
    {
      key: 2,
      description: "Horacio Mercol",
      hora: "08:30",
      fecha: "11/08/2022",
      content: "Visitar Campo Oeste",
    },
    {
      key: 3,
      description: "Jorge Mayorga",
      hora: "09:00",
      fecha: "12/08/2022",
      content: "Llamar a Jorge para Venta de Herbicidas",
    },
    {
      key: 4,
      description: "Aida Campos",
      hora: "09:15",
      fecha: "12/08/2022",
      content: "Venta Trigo",
    },
    {
      key: 5,
      description: "Adrian Sabo",
      hora: "09:30",
      fecha: "16/08/2022",
      content: "Venta de Maíz",
    },
    {
      key: 6,
      description: "Florencia Caverzasi",
      hora: "09:30",
      fecha: "17/08/2022",
      content: "Venta de Soja",
    },
    {
      key: 7,
      description: "Adrian Sabo",
      hora: "09:40",
      fecha: "17/08/2022",
      content: "Venta de Maíz para temporada 2223",
    },
    {
      key: 8,
      description: "Adrian Sabo",
      hora: "10:00",
      fecha: "18/08/2022",
      content: "Llamar a Adrian, conversar sobre nuevos insumos",
    },
    {
      key: 9,
      description: "Horacio Mercol",
      hora: "10:00",
      fecha: "02/08/2022",
      content: "Visitar Campo Oeste",
    },
    {
      key: 10,
      description: "Jorge Mayorga",
      hora: "10:30",
      fecha: "03/08/2022",
      content: "Llamar a Jorge para Venta de Herbicidas",
    },
    {
      key: 11,
      description: "Aida Campos",
      hora: "11:00",
      fecha: "03/08/2022",
      content: "Venta Trigo",
    },
  ];

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
                <ListaCalendario ItemListaTarea={ItemListaTarea}/>
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
    </>
  );
};

export default Calendario;
