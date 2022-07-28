import React from "react";
import { Ellipsis, List, Tabs} from "antd-mobile";
import "./Tareas.css";

const Tareas = () => {
      
  return (
    <Tabs defaultActiveKey="1">
      {/* PESTAÑA TAREAS ESTA SEMANA */}
      <Tabs.Tab className="home_tabs_item" title="Esta Semana" key="1">
        <List>
          <List.Item description="Adrian Sabo" extra="27-07-2022" clickable>
            <Ellipsis direction="end" content="Venta de Maíz para temporada 2022" />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="27-07-2022" clickable>
            <Ellipsis direction="end" content="Llamar a Adrian, conversar sobre nuevos insumos" />
          </List.Item>
          <List.Item description="Horacio Mercol" extra="28-07-2022" clickable>
            <Ellipsis direction="end" content="Visitar Campo Oeste" />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="28-07-2022" clickable>
            <Ellipsis direction="end" content="Venta de Soja" />
          </List.Item>
          <List.Item description="Jorge Mayorga" extra="29-07-2022" clickable>
            <Ellipsis
              direction="end"
              content="Llamar a Jorge para Venta de Herbicidas"
            />
          </List.Item>
          <List.Item description="Aida Campos" extra="30-07-2022" clickable>
            <Ellipsis direction="end" content="Venta de Maíz" />
          </List.Item>

          {/* Se repite lista para probar scroll */}

          <List.Item description="Adrian Sabo" extra="27-07-2022" clickable>
            <Ellipsis direction="end" content="Venta de Trigo" />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="27-07-2022" clickable>
            <Ellipsis direction="end" content="Llamar a Adrian" />
          </List.Item>
          <List.Item description="Horacio Mercol" extra="28-07-2022" clickable>
            <Ellipsis direction="end" content="Visitar Campo Oeste" />
          </List.Item>
          <List.Item description="Adrian Sabo" extra="28-07-2022" clickable>
            <Ellipsis direction="end" content="Venta de Soja" />
          </List.Item>
          <List.Item description="Jorge Mayorga" extra="29-07-2022" clickable>
            <Ellipsis
              direction="end"
              content="Llamar a Jorge para Venta de Herbicidas"
            />
          </List.Item>
          <List.Item description="Aida Campos" extra="30-07-2022" clickable>
            <Ellipsis direction="end" content="Venta de Maíz" />
          </List.Item>
        </List>
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
