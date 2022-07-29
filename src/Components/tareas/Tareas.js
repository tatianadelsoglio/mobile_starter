import { Tabs } from "antd-mobile";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Tareas.css";

const Tareas = () => {

  return (

    <Tabs defaultActiveKey="1">
      {/* PESTAÑA TAREAS ESTA SEMANA */}
      <Tabs.Tab title="Esta Semana" key="1">
        <div className="lista_tareas">
          <ListaTarea/>
        </div>
      </Tabs.Tab>

      {/* PESTAÑA TAREAS SEMANA PROXIMA */}
      <Tabs.Tab title="Semana Prox." key="2">
        2
      </Tabs.Tab>

      {/* PESTAÑA TAREAS VENCIDAS */}
      <Tabs.Tab title="Vencido" key="3">
        3
      </Tabs.Tab>
    </Tabs>
  );
};

export default Tareas;
