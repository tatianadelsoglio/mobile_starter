/* eslint-disable no-unused-vars */
import { Calendar, Collapse } from "antd-mobile";
import React, { useContext, useState } from "react";
import ListaCalendario from "../listaCalendario/TareasCalendario";
import "./Calendario.css";
import moment from "moment";
import "moment/locale/es";
import TareasCalendario from "../listaCalendario/TareasCalendario";
import { GlobalContext } from "../../context/GlobalContext";

const defaultSingle = new Date();

const Calendario = () => {
  const { fecha, setFecha } = useContext(GlobalContext);

  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD-MM-YYYY");
    setFecha(fechaSelec);
    listaTareasHOY();
  };

  console.log(fecha);

  let titulo = `Lista de tareas del ${fecha}`;

  const ItemListaTarea = [
    {
      id: 1,
      usu_nombre: "Adrian Sabo",
      fechaHora: "08-17-2022 08:30",
      estado: 1,
      descripcion: "Llamar a Adrian, conversar sobre nuevos insumos",
    },
    {
      id: 2,
      usu_nombre: "Horacio Mercol",
      fechaHora: "08-17-2022 08:40",
      estado: 1,
      descripcion: "Visitar Campo Oeste",
    },
    {
      id: 3,
      usu_nombre: "Jorge Mayorga",
      fechaHora: "08-18-2022 09:00",
      estado: 1,
      descripcion: "Llamar a Jorge para Venta de Herbicidas",
    },
    {
      id: 4,
      usu_nombre: "Aida Campos",
      fechaHora: "08-18-2022 09:15",
      estado: 1,
      descripcion: "Venta Trigo",
    },
    {
      id: 5,
      usu_nombre: "Adrian Sabo",
      fechaHora: "08-19-2022 09:30",
      estado: 1,
      descripcion: "Venta de Maíz",
    },
    {
      id: 6,
      usu_nombre: "Florencia Caverzasi",
      fechaHora: "08-22-2022 09:30",
      estado: 1,
      descripcion: "Venta de Soja",
    },
    {
      id: 7,
      usu_nombre: "Adrian Sabo",
      fechaHora: "08-23-2022 09:40",
      estado: 1,
      descripcion: "Venta de Maíz para temporada 2223",
    },
    {
      id: 8,
      usu_nombre: "Edgar jazz",
      fechaHora: "08-23-2022 10:00",
      estado: 1,
      descripcion: "Llamar para conversar sobre nuevos insumos",
    },
    {
      id: 9,
      usu_nombre: "Adrian Sabo",
      fechaHora: "08-24-2022 10:00",
      estado: 1,
      descripcion: "Llamar a Adrian, conversar sobre nuevos insumos",
    },
    {
      id: 10,
      usu_nombre: "Horacio Mercol",
      fechaHora: "08-02-2022 10:00",
      estado: 1,
      descripcion: "Visitar Campo Oeste",
    },
    {
      id: 11,
      usu_nombre: "Jorge Mayorga",
      fechaHora: "08-03-2022 10:30",
      estado: 1,
      descripcion: "Llamar a Jorge para Venta de Herbicidas",
    },
    {
      id: 12,
      usu_nombre: "Aida Campos",
      fechaHora: "08-03-2022 11:00",
      estado: 1,
      descripcion: "Venta Trigo",
    },
  ];

  //! FILTRO POR DIA DE TAREAS - INICIO DEL METODO

  let arrayHOY = [];

  const listaTareasHOY = () => {
    ItemListaTarea.map((tarea) => {
      let fechaTarea = moment(tarea.fechaHora).format("DD-MM-YYYY");

      if (fechaTarea === fecha) {
        arrayHOY.push(tarea);
      }
      return "Prueba lista tareas";
    });
  };

  listaTareasHOY();
  console.log("Lista de tareas ESTA SEMANA: ", arrayHOY);
  //! FIN DE METODO PARA FILTRADO POR DIA

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
          <Collapse defaultActiveKey={["1"]}>
            <Collapse.Panel key="1" title={titulo}>
              <TareasCalendario ItemListaTarea={arrayHOY} />
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default Calendario;
