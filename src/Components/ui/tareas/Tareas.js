/* eslint-disable no-unused-vars */
import { Calendar, CapsuleTabs, SafeArea } from "antd-mobile";
import moment from "moment";
import ListaTarea from "../listaTareas/ListaTarea";
import { CalendarOutline } from "antd-mobile-icons";
import "./Tareas.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import dayjs from "dayjs";

const Tareas = () => {
  const { listaTareas, setListaTareas } = useContext(GlobalContext);

  const ItemListaTarea = [
    {
      id: 23,
      contacto: "Adrian Sabo",
      cliente: "La Ganadera",
      fechaHora: "01/09/2022 08:30",
      estado: 1,
      asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
      tipo: "#T",
      origen: "NEGOCIO",
      anexo: [
        {
          id: 3,
          texto: "nota numero 1, primera prueba",
          fecha: "01/09/2022",
          prioridad: "ALTA",
          tipo: "#N",
        },
        {
          id: 4,
          nombre: "paisaje-02",
          descripcion: "foto de la entrada al campo",
          fecha: "01/09/2022 13:45",
          tipo: "#A",
          peso: "2035 Kb",
        },
      ],
    },
    {
      id: 22,
      contacto: "Adrian Sabo",
      cliente: "La Ganadera",
      fechaHora: "01/09/2022 08:30",
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
          fecha: "01/09/2022",
          prioridad: "ALTA",
          tipo: "#N",
        },
        {
          id: 4,
          nombre: "paisaje-02",
          descripcion: "foto de la entrada al campo",
          fecha: "01/09/2022 13:45",
          tipo: "#A",
          peso: "2035 Kb",
        },
      ],
    },
    {
      id: 21,
      contacto: "Adrian Sabo",
      cliente: "La Ganadera",
      fechaHora: "22/08/2022 08:30",
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
      id: 20,
      contacto: "Adrian Sabo",
      cliente: "La Ganadera",
      fechaHora: "22/08/2022 08:30",
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
      id: 1,
      contacto: "Adrian Sabo",
      cliente: "La Ganadera",
      fechaHora: "22/08/2022 08:30",
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
    {
      id: 13,
      contacto: "Aida Campos",
      cliente: "Darregueira",
      fechaHora: "05/10/2022 11:00",
      estado: 1,
      asunto: "Venta Trigo",
      prioridad: "ALTA",
      tipoTarea: "Visita de campo",
    },
  ];

  useEffect(() => {
    setListaTareas(ItemListaTarea);
  }, []);

  let today = moment().format("DD/MM/YYYY");
  const [fecha, setFecha] = useState(today);

  //! FILTRO PARA HOY LISTA DE TAREAS / INICIO DEL METODO TAB 1

  //*TAB 1 - SECCION CALENDARIO

  const handleChange = (val) => {
    let fechaSelec = moment(val).format("DD/MM/YYYY");
    setFecha(fechaSelec);
  };

  //*TAB 1 - SECCION CALENDARIO

  //*TAB 1 - SECCION LISTA TAREA

  let hoy = [];

  const listaTareasHoy = () => {
    ItemListaTarea.map((tarea) => {
      let fechaFormato = tarea.fechaHora.split(" ");
      fechaFormato = fechaFormato[0];

      fechaFormato = moment(fechaFormato, "DD/MM/YYYY").format("DD/MM/YYYY");

      if (fechaFormato === fecha) {
        hoy.push(tarea);
        return hoy;
      } else {
        return false;
      }
    });

    return "Prueba lista tareas";
  };

  listaTareasHoy();
  let arrayHoy = hoy;
  hoy = [];

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
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 1

  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 2

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
  //! FIN DE METODO PARA FILTRADO POR SEMANA TAB 2

  //! FILTRO POR SEMANA LISTA DE TAREAS / INICIO DEL METODO TAB 3

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

  return (
    <>
      <CapsuleTabs className="capsule_contenedor" defaultActiveKey="1">
        {/* PESTAÑA TAREAS HOY */}
        <CapsuleTabs.Tab title={<CalendarOutline />} key="1">
          <div>
            <Calendar
              selectionMode="single"
              // defaultValue={defaultSingle}
              renderLabel={(date) => {
                let bandera = false;

                ItemListaTarea.map((tarea) => {
                  let fechaHoySola = tarea.fechaHora.split(" ");
                  fechaHoySola = fechaHoySola[0];
                  let fechaHoy = moment(fechaHoySola, "DD/MM/YYYY").format(
                    "DD/MM/YYYY"
                  );
                  let fechaCalendario = moment(date).format("DD/MM/YYYY");

                  if (fechaCalendario === fechaHoy) {
                    return (bandera = true);
                  }
                });

                if (bandera === true) {
                  return (
                    <p
                      style={{
                        fontSize: "25px",
                        color: "#56b43c",
                        margin: "0px",
                      }}
                    >
                      •
                    </p>
                  );
                }
              }}
              onChange={(val) => handleChange(val)}
            />
          </div>
          <div className="div_lista_calendario">
            <ListaTarea ItemListaTarea={arrayHoy} />
          </div>
        </CapsuleTabs.Tab>

        {/* PESTAÑA TAREAS ESTA SEMANA */}
        <CapsuleTabs.Tab title="Semana" key="2">
          <div className="div_lista">
            <ListaTarea ItemListaTarea={arrayES} />
          </div>
        </CapsuleTabs.Tab>

        {/* PESTAÑA TAREAS SEMANA PROXIMA */}
        <CapsuleTabs.Tab title="Semana Prox." key="3">
          <div className="div_lista">
            <ListaTarea ItemListaTarea={arraySP} />
          </div>
        </CapsuleTabs.Tab>

        {/* PESTAÑA TAREAS VENCIDAS */}
        <CapsuleTabs.Tab title="Vencido" key="4">
          <div className="div_lista">
            <ListaTarea ItemListaTarea={arrayVC} />
          </div>
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    </>
  );
};

export default Tareas;
