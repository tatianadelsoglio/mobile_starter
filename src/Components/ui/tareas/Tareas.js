import { CapsuleTabs } from "antd-mobile";
import { useEffect, useState } from "react";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Tareas.css";

const Tareas = () => {

  const [tabSelect, setTabSelect] = useState("1");
  const [fechaListaTarea, setFechaListaTarea] = useState("");
  const [fechaEstaSemana, setFechaEstaSemana] = useState("");
  const [fechaSemanaProx, setFechaSemanaProx] = useState("");
  const [fechaVencida, setFechaVencida] = useState("");

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

  
  useEffect(() => {
    

  }, [])

  return (
    <CapsuleTabs defaultActiveKey="1">
      {/* PESTAÑA TAREAS ESTA SEMANA */}
      <CapsuleTabs.Tab title="Esta Semana" key="1">
        
        <div style={{ height: "50px" }}></div>
        <div className="lista_tareas">
          <ListaTarea ItemListaTarea={ItemListaTarea}/>
        </div>
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS SEMANA PROXIMA */}
      <CapsuleTabs.Tab title="Semana Prox." key="2">
        <div style={{ height: "50px" }}></div>
        <ListaTarea ItemListaTarea={ItemListaTarea}/>
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS VENCIDAS */}
      <CapsuleTabs.Tab title="Vencido" key="3">
        <div style={{ height: "50px" }}></div>
        <ListaTarea ItemListaTarea={ItemListaTarea}/>
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
