/* eslint-disable no-unused-vars */
import { Badge, Calendar, Collapse } from "antd-mobile";
import React, { useContext, useState } from "react";
import ListaCalendario from "../listaCalendario/TareasCalendario";
import "./Calendario.css";
import moment from "moment";
import "moment/locale/es";
import TareasCalendario from "../listaCalendario/TareasCalendario";
import { GlobalContext } from "../../context/GlobalContext";
import dayjs from "dayjs";

const defaultSingle = new Date();

const Calendario = () => {
  const { fecha, setFecha } = useContext(GlobalContext);

  //let titulo = `Lista de tareas del ${fecha}`;

  const ItemListaTarea = [
    {
      id: 1,
      contacto: "Adrian Sabo",
      cliente: "La Ganadera",
      fechaHora: "08/22/2022 08:30",
      estado: 1,
      asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "ALTA",
      tipoTarea: "Visita de campo",
      tipo: "#T",
      origen: "NEGOCIO",
      anexo: [
        {
          id: 3,
          texto: "nota numero 1, primera prueba",
          fecha: "22/08/2022",
          prioridad: "ALTA",
          tipo: "#N",
        },
        {
          id: 4,
          nombre: "paisaje-02",
          descripcion: "foto de la entrada al campo",
          fecha: "20/08/2022 13:45",
          tipo: "#A",
          peso: "2035 Kb",
        },
      ],
    },
    {
      id: 2,
      contacto: "Horacio Mercol",
      cliente: "La Ganadera",
      fechaHora: "08/22/2022 08:40",
      estado: 1,
      asunto: "Visitar Campo Oeste",
      prioridad: "ALTA",
      tipoTarea: "Visita de campo",
      tipo: "#T",
      origen: "MAIL",
      anexo: [
        {
          id: 3,
          texto: "nota numero 1, primera prueba",
          fecha: "22/08/2022",
          prioridad: "ALTA",
          tipo: "#N",
        },
        {
          id: 4,
          nombre: "paisaje-02",
          descripcion: "foto de la entrada al campo",
          fecha: "20/08/2022 13:45",
          tipo: "#A",
          peso: "2035 Kb",
        },
      ],
    },
    {
      id: 3,
      contacto: "Jorge Mayorga",
      cliente: "La Ganadera",
      fechaHora: "08/23/2022 10:00",
      estado: 1,
      asunto: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
      origen: "TELEFONO",
      anexo: [
        {
          id: 3,
          texto: "nota numero 1, primera prueba",
          fecha: "22/08/2022",
          prioridad: "ALTA",
          tipo: "#N",
        },
      ],
    },
    {
      id: 4,
      contacto: "Aida Campos",
      cliente: "La Ganadera",
      fechaHora: "08/24/2022 11:15",
      estado: 1,
      asunto: "Venta Trigo",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
      anexo: [
        {
          id: 4,
          nombre: "paisaje/02",
          descripcion: "foto de la entrada al campo",
          fecha: "20/08/2022 13:45",
          tipo: "#A",
          peso: "2035 Kb",
        },
      ],
    },
    {
      id: 5,
      contacto: "Adrian Sabo",
      cliente: "Vitalforce",
      fechaHora: "08/30/2022 09:30",
      estado: 1,
      asunto: "Venta de Maíz",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 6,
      contacto: "Florencia Caverzasi",
      cliente: "Vitalforce",
      fechaHora: "08/31/2022 09:30",
      estado: 1,
      asunto: "Venta de Soja",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 7,
      contacto: "Adrian Sabo",
      cliente: "Vitalforce",
      fechaHora: "09/01/2022 09:40",
      estado: 1,
      asunto: "Venta de Maíz para temporada 2223",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 8,
      contacto: "Edgar jazz",
      cliente: "Vitalforce",
      fechaHora: "09/02/2022 10:00",
      estado: 1,
      asunto: "Llamar para conversar sobre nuevos insumos",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 9,
      contacto: "Adrian Sabo",
      cliente: "Darregueira",
      fechaHora: "08/17/2022 10:00",
      estado: 1,
      asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 10,
      contacto: "Horacio Mercol",
      cliente: "Darregueira",
      fechaHora: "08/17/2022 10:00",
      estado: 1,
      asunto: "Visitar Campo Oeste",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 11,
      contacto: "Jorge Mayorga",
      cliente: "Darregueira",
      fechaHora: "08/18/2022 10:30",
      estado: 1,
      asunto: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 12,
      contacto: "Aida Campos",
      cliente: "Darregueira",
      fechaHora: "08/19/2022 11:00",
      estado: 1,
      asunto: "Venta Trigo",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
  ];

  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD-MM-YYYY");
    setFecha(fechaSelec);
  };

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
  //! FIN DE METODO PARA FILTRADO POR DIA

  const renderbadge = () => {
    <Badge color="#56b43c" content={Badge.dot} />;  
  }

  return (
    <>
      <div className="div_content_calendario">
        <div>
          <Calendar
            selectionMode="single"
            defaultValue={defaultSingle}
            renderLabel={renderbadge}
            onChange={(val) => handleChange(val)}
          />
        </div>
        <div className="div_lista">
          <TareasCalendario ItemListaTarea={arrayHOY} />
        </div>
      </div>
    </>
  );
};

export default Calendario;
