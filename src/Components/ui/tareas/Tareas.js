import { CapsuleTabs } from "antd-mobile";
import moment from "moment";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Tareas.css";

const Tareas = () => {

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
    },
    {
      id: 3,
      contacto: "Jorge Mayorga",
      cliente: "La Ganadera",
      fechaHora: "08/23/2022 09:00",
      estado: 1,
      asunto: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 4,
      contacto: "Aida Campos",
      cliente: "La Ganadera",
      fechaHora: "08-24-2022 09:15",
      estado: 1,
      asunto: "Venta Trigo",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 5,
      contacto: "Adrian Sabo",
      cliente: "Vitalforce",
      fechaHora: "08-30-2022 09:30",
      estado: 1,
      asunto: "Venta de Maíz",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 6,
      contacto: "Florencia Caverzasi",
      cliente: "Vitalforce",
      fechaHora: "08-31-2022 09:30",
      estado: 1,
      asunto: "Venta de Soja",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 7,
      contacto: "Adrian Sabo",
      cliente: "Vitalforce",
      fechaHora: "09-01-2022 09:40",
      estado: 1,
      asunto: "Venta de Maíz para temporada 2223",
      prioridad: "MEDIA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 8,
      contacto: "Edgar jazz",
      cliente: "Vitalforce",
      fechaHora: "09-02-2022 10:00",
      estado: 1,
      asunto: "Llamar para conversar sobre nuevos insumos",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 9,
      contacto: "Adrian Sabo",
      cliente: "Darregueira",
      fechaHora: "08-17-2022 10:00",
      estado: 1,
      asunto: "Llamar a Adrian, conversar sobre nuevos insumos",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 10,
      contacto: "Horacio Mercol",
      cliente: "Darregueira",
      fechaHora: "08-17-2022 10:00",
      estado: 1,
      asunto: "Visitar Campo Oeste",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 11,
      contacto: "Jorge Mayorga",
      cliente: "Darregueira",
      fechaHora: "08-18-2022 10:30",
      estado: 1,
      asunto: "Llamar a Jorge para Venta de Herbicidas",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
    {
      id: 12,
      contacto: "Aida Campos",
      cliente: "Darregueira",
      fechaHora: "08-19-2022 11:00",
      estado: 1,
      asunto: "Venta Trigo",
      prioridad: "BAJA",
      tipoTarea: "Visita de campo",
    },
  ];

  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 1

  let ES = [];
  let StartES = moment().startOf("isoWeek").format("DD-MM-YYYY")

  let EndES = moment().endOf("isoWeek").format("DD-MM-YYYY")

  const listaTareasES = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")

    if (fecha >= StartES) {
      if (fecha <= EndES) {  
        ES.push(tarea);
      }
    }  
    return "Prueba lista tareas"
  })};

listaTareasES();
let arrayES = ES;
ES = [];
console.log("Lista de tareas ESTA SEMANA: ", arrayES);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 1



  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 2

  let SP = [];
  let StartSP = moment().add(1, 'weeks').startOf('isoWeek').format('DD-MM-YYYY')
  console.log("StartSP: ", StartSP)

  let EndSP = moment().add(1, 'weeks').endOf('isoWeek').format('DD-MM-YYYY')
  console.log("EndSP: ", EndSP)

  const listaTareasSP = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")
    console.log("fecha: ", fecha)

    if (fecha >= StartSP) {
      console.log("paso1")
      if (fecha <= EndSP) {  
        console.log("paso2")
        SP.push(tarea);
      }
    }  
    return "Prueba lista tareas"
  })};

listaTareasSP();
let arraySP = SP;
SP = [];
console.log("Lista de tareas SEMANA PROXIMA: ", arraySP);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 2


  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 3

  let VC = [];

  const listaTareasVC = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")

    if (fecha <= StartES) {
      VC.push(tarea);
    }  
    return "Prueba lista tareas"
  })};

listaTareasVC();
let arrayVC = VC;
VC = [];
console.log("Lista de tareas VENCIDAS: ", arrayVC);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 3

  return (
    <CapsuleTabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
      {/* PESTAÑA TAREAS ESTA SEMANA */}
      <CapsuleTabs.Tab title="Esta Semana" key="1">

        <ListaTarea ItemListaTarea={arrayES} />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS SEMANA PROXIMA */}
      <CapsuleTabs.Tab title="Semana Prox." key="2">

        <ListaTarea ItemListaTarea={arraySP} />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS VENCIDAS */}
      <CapsuleTabs.Tab title="Vencido" key="3">

        <ListaTarea ItemListaTarea={arrayVC} />
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
