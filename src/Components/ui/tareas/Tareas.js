import { CapsuleTabs } from "antd-mobile";
import moment from "moment";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Tareas.css";

const Tareas = () => {

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
      fechaHora: "08-17-2022 08:30",
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

  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 1

  let arrayES = [];

  const listaTareasES = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")

    let StartES = moment().startOf("isoWeek").format("DD-MM-YYYY")

    let EndES = moment().endOf("isoWeek").format("DD-MM-YYYY")


    if (fecha >= StartES) {
      if (fecha <= EndES) {  
        arrayES.push(tarea);
      }
    }  
    return "Prueba lista tareas"
  })};

listaTareasES();
console.log("Lista de tareas ESTA SEMANA: ", arrayES);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 1



  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 2

  let arraySP = [];

  const listaTareasSP = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")

    let StartSP = moment().add(1, 'weeks').startOf('isoWeek').format('DD-MM-YYYY')

    let EndSP = moment().add(1, 'weeks').endOf('isoWeek').format('DD-MM-YYYY')


    if (fecha >= StartSP) {
      if (fecha <= EndSP) {  
        arraySP.push(tarea);
      }
    }  
    return "Prueba lista tareas"
  })};

listaTareasSP();
console.log("Lista de tareas SEMANA PROXIMA: ", arraySP);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 2


  //! FILTRO POR SEMANA LISTA DE TAREAS - INICIO DEL METODO TAB 3

  let arrayVC = [];

  const listaTareasVC = () => { ItemListaTarea.map((tarea) => {
    let fecha = moment(tarea.fechaHora).format("DD-MM-YYYY")

    let StartES = moment().startOf("isoWeek").format("DD-MM-YYYY")    

    if (fecha <= StartES) {
      arrayVC.push(tarea);
    }  
    return "Prueba lista tareas"
  })};

listaTareasVC();
console.log("Lista de tareas Vencidas: ", arrayVC);
//! FIN DE METODO PARA FILTRADO POR SEMANA TAB 3

  return (
    <CapsuleTabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
      {/* PESTAÑA TAREAS ESTA SEMANA */}
      <CapsuleTabs.Tab title="Esta Semana" key="1">
        <div style={{ height: "50px" }}></div>
        <ListaTarea ItemListaTarea={arrayES} />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS SEMANA PROXIMA */}
      <CapsuleTabs.Tab title="Semana Prox." key="2">
        <div style={{ height: "50px" }}></div>
        <ListaTarea ItemListaTarea={arraySP} />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS VENCIDAS */}
      <CapsuleTabs.Tab title="Vencido" key="3">
        <div style={{ height: "50px" }}></div>
        <ListaTarea ItemListaTarea={arrayVC} />
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
