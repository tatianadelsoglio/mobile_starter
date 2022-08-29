/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Badge,
  Calendar,
  CapsuleTabs,
  FloatingBubble,
  Modal,
} from "antd-mobile";
import moment from "moment";
import ListaTarea from "../listaTareas/ListaTarea";
import { CalendarOutline } from "antd-mobile-icons";
import "./Tareas.css";
import { useEffect, useState } from "react";
import { CalendarioModal } from "../calendarioModal/CalendarioModal";

const Tareas = () => {
  const [fechaSelect, setFechaSelect] = useState(moment().format("DD/MM/YYYY"));
  const [fechaSelecCalendar, setFechaCalendar] = useState();

  const ItemListaTarea = [
    {
      id: 1,
      contacto: "Adrian Sabo",
      cliente: "La Ganadera",
      fechaHora: "05/09/2022 08:30",
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
          fecha: "23/08/2022",
          prioridad: "ALTA",
          tipo: "#N",
        },
        {
          id: 4,
          nombre: "paisaje-02",
          descripcion: "foto de la entrada al campo",
          fecha: "24/08/2022 13:45",
          tipo: "#A",
          peso: "2035 Kb",
        },
      ],
    },
    {
      id: 2,
      contacto: "Horacio Mercol",
      cliente: "La Ganadera",
      fechaHora: "05/09/2022 08:40",
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
      fechaHora: "06/09/2022 10:00",
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
      fechaHora: "29/08/2022 11:15",
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
      fechaHora: "30/08/2022 09:30",
      estado: 1,
      asunto: "Venta de Maíz",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 6,
      contacto: "Florencia Caverzasi",
      cliente: "Vitalforce",
      fechaHora: "31/08/2022 09:30",
      estado: 1,
      asunto: "Venta de Soja",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 7,
      contacto: "Adrian Sabo",
      cliente: "Vitalforce",
      fechaHora: "01/09/2022 09:40",
      estado: 1,
      asunto: "Venta de Maíz para temporada 2223",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 8,
      contacto: "Edgar jazz",
      cliente: "Vitalforce",
      fechaHora: "02/09/2022 10:00",
      estado: 1,
      asunto: "Llamar para conversar sobre nuevos insumos",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 9,
      contacto: "Adrian Sabo",
      cliente: "Darregueira",
      fechaHora: "17/08/2022 10:00",
      estado: 1,
      asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 10,
      contacto: "Horacio Mercol",
      cliente: "Darregueira",
      fechaHora: "17/08/2022 10:00",
      estado: 1,
      asunto: "Visitar Campo Oeste",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 11,
      contacto: "Jorge Mayorga",
      cliente: "Darregueira",
      fechaHora: "18/08/2022 10:30",
      estado: 1,
      asunto: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "ALTA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 12,
      contacto: "Aida Campos",
      cliente: "Darregueira",
      fechaHora: "16/08/2022 11:00",
      estado: 1,
      asunto: "Venta Trigo",
      prioridad: "ALTA",
      tipoTarea: "Visita de campo",
    },
  ];


  let today = moment().format("DD/MM/YYYY");

  const [fecha, setFecha] = useState(today);
  const [fechaConfirmada, setFechaConfirmada] = useState(fecha);
  const [track, setTrack] = useState("comienzo");

  const fechaHandler = async () => {
    setTrack("comienzo");
    setTimeout(() => {
      setTrack("terminado");
    }, 500);
  };

  useEffect(() => {
    if (track === "terminado") {
      setFechaConfirmada(fechaSelect);
    }
  }, [track]);


    //! FILTRO PARA HOY LISTA DE TAREAS / INICIO DEL METODO TAB 1

    //*TAB 1 - SECCION CALENDARIO

    const handleChange = (val) => {
      let fechaSelecCalendar = moment(val).format("DD/MM/YYYY");
      setFechaCalendar(fechaSelecCalendar);
    }

    //*TAB 1 - SECCION CALENDARIO

    //*TAB 1 - SECCION LISTA TAREA  

    let hoy = [];

  const listaTareasHoy = () => {
    ItemListaTarea.map((tarea) => {
      let fechaFormato = tarea.fechaHora.split(" ");
      fechaFormato = fechaFormato[0];

      let fechaSeleccionada = fechaConfirmada;

      fechaFormato = moment(fechaFormato, "DD/MM/YYYY").format("DD/MM/YYYY");

      if (fechaFormato === fechaSeleccionada) {
        hoy.push(tarea);
      } else {
        return false;
      }
    });
  };

  listaTareasHoy();
  let arrayHoy = hoy;
  hoy = [];

  //*TAB 1 - SECCION LISTA TAREA

  //! FIN FILTRO PARA HOY LISTA DE TAREAS / INICIO DEL METODO TAB 1

  //! FILTRO POR SEMANA LISTA DE TAREAS / INICIO DEL METODO TAB 2

  let ES = [];
  let StartES = moment().startOf("isoWeek").format("DD/MM/YYYY");

  let EndES = moment().endOf("isoWeek").format("DD/MM/YYYY");

  const listaTareasES = () => {
    ItemListaTarea.map((tarea) => {
      let fechaSola = tarea.fechaHora.split(" ");
      fechaSola = fechaSola[0];
      let fecha = moment(fechaSola, "DD/MM/YYYY");

      StartES = moment(StartES, "DD/MM/YYYY");
      EndES = moment(EndES, "DD/MM/YYYY");

      if (fecha >= StartES) {
        if (fecha <= EndES) {
          ES.push(tarea);
        }
      }
      return "Prueba lista tareas";
    });
  };

  listaTareasES();
  let arrayES = ES;
  ES = [];
  // console.log("Lista de tareas ESTA SEMANA: ", arrayES);
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 2

  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 3

  let SP = [];
  let StartSP = moment()
    .add(1, "weeks")
    .startOf("isoWeek")
    .format("DD/MM/YYYY");

  let EndSP = moment().add(1, "weeks").endOf("isoWeek").format("DD/MM/YYYY");

  const listaTareasSP = () => {
    ItemListaTarea.map((tarea) => {
      let fechaSola = tarea.fechaHora.split(" ");
      fechaSola = fechaSola[0];
      let fecha = moment(fechaSola, "DD/MM/YYYY");

      StartSP = moment(StartSP, "DD/MM/YYYY");
      EndSP = moment(EndSP, "DD/MM/YYYY");

      if (fecha >= StartSP) {
        if (fecha <= EndSP) {
          SP.push(tarea);
        }
      }
      return "Prueba lista tareas";
    });
  };

  listaTareasSP();
  let arraySP = SP;
  SP = [];
  // console.log("Lista de tareas SEMANA PROXIMA: ", arraySP);
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 3

  //! FILTRO POR SEMANA LISTA DE TAREAS / INICIO DEL METODO TAB 4

  let VC = [];

  const listaTareasVC = () => {
    ItemListaTarea.map((tarea) => {
      let fechaSola = tarea.fechaHora.split(" ");
      fechaSola = fechaSola[0];
      let fecha = moment(fechaSola, "DD/MM/YYYY");

      StartES = moment(StartES, "DD/MM/YYYY");

      if (fecha <= StartES) {
        VC.push(tarea);
      }
      return "Prueba lista tareas";
    });
  };

  listaTareasVC();
  let arrayVC = VC;
  VC = [];
  // console.log("Lista de tareas VENCIDAS: ", arrayVC);
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 4

  const renderbadge = (val) => {
    <Badge color="#56b43c" content={Badge.dot} />;
  };

  return (
    <CapsuleTabs defaultActiveKey="1">
      {/* PESTAÑA TAREAS HOY */}
      <CapsuleTabs.Tab title={<CalendarOutline />} key="1">
        <div>
          <Calendar
            selectionMode="single"
            // defaultValue={defaultSingle}
            renderLabel={(val) => renderbadge(val)}
            onChange={(val) => handleChange(val)}
          />
        </div>
        <div>
          <ListaTarea ItemListaTarea={arrayHoy} />
        </div>
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS SEMANA */}
      <CapsuleTabs.Tab title="Semana" key="2">
        <ListaTarea ItemListaTarea={arrayES} />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS SEMANA PROXIMA */}
      <CapsuleTabs.Tab title="Semana Prox." key="3">
        <ListaTarea ItemListaTarea={arraySP} />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS VENCIDAS */}
      <CapsuleTabs.Tab title="Vencido" key="4">
        <ListaTarea ItemListaTarea={arrayVC} />
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
