import { CapsuleTabs } from "antd-mobile";
import ListaTarea from "../listaTareas/ListaTarea";
import "./Tareas.css";

const Tareas = () => {
  return (
    <CapsuleTabs defaultActiveKey="1">
      {/* PESTAÑA TAREAS ESTA SEMANA */}
      <CapsuleTabs.Tab title="Esta Semana" key="1">
        <div style={{ height: "50px" }}></div>
        <div className="lista_tareas">
          <ListaTarea />
        </div>
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS SEMANA PROXIMA */}
      <CapsuleTabs.Tab title="Semana Prox." key="2">
        <div style={{ height: "50px" }}></div>
        <ListaTarea />
      </CapsuleTabs.Tab>

      {/* PESTAÑA TAREAS VENCIDAS */}
      <CapsuleTabs.Tab title="Vencido" key="3">
        <div style={{ height: "50px" }}></div>
        <ListaTarea />
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default Tareas;
