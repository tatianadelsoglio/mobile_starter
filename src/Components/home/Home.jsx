import React from "react";
import "./Home.css";
import {
  UnorderedListOutline,
  UserOutline,
  CalendarOutline,
} from "antd-mobile-icons";
import { Ellipsis, List, TabBar, Tabs } from "antd-mobile";

const Home = () => {
  const tabs = [
    {
      key: "tareas",
      title: "Tareas",
      icon: <UnorderedListOutline />,
    },
    {
      key: "clientes",
      title: "Clientes",
      icon: <UserOutline />,
    },
    {
      key: "calendario",
      title: "Calendario",
      icon: <CalendarOutline />,
    },
  ];
  return (
    <>
      <div className="vista_home_wrapper">
        <div className="vista_home_content1" />
        <div className="vista_home_content">
          <div className="home_tabs">
            <Tabs defaultActiveKey="1">
              <Tabs.Tab className="home_tabs_item" title="Esta Semana" key="1">
                <List>
                  <List.Item
                    description="Adrian Sabo"
                    extra="27-07-2022"
                    clickable
                  >
                    <Ellipsis direction="end" content="Venta de Maíz" />
                  </List.Item>
                  <List.Item
                    description="Adrian Sabo"
                    extra="27-07-2022"
                    clickable
                  >
                    <Ellipsis direction="end" content="Llamar a Adrian" />
                  </List.Item>
                  <List.Item
                    description="Horacio Mercol"
                    extra="28-07-2022"
                    clickable
                  >
                    <Ellipsis direction="end" content="Visitar Campo Oeste" />
                  </List.Item>
                  <List.Item
                    description="Adrian Sabo"
                    extra="28-07-2022"
                    clickable
                  >
                    <Ellipsis direction="end" content="Venta de Soja" />
                  </List.Item>
                  <List.Item
                    description="Jorge Mayorga"
                    extra="29-07-2022"
                    clickable
                  >
                    <Ellipsis
                      direction="end"
                      content="Llamar a Jorge para Venta de Herbicidas"
                    />
                  </List.Item>
                  <List.Item
                    description="Aida Campos"
                    extra="30-07-2022"
                    clickable
                  >
                    <Ellipsis direction="end" content="Venta de Maíz" />
                  </List.Item>
                </List>
              </Tabs.Tab>
              <Tabs.Tab title="Semana Prox." key="2">
                2
              </Tabs.Tab>
              <Tabs.Tab title="Vencido" key="3">
                3
              </Tabs.Tab>
            </Tabs>
          </div>
          {/* <div className="home_contenido">
            <h3>Contenido Pestaña</h3>
            <h3>Contenido Pestaña</h3>
            <h3>Contenido Pestaña</h3>
            <h3>Contenido Pestaña</h3>
            <h3>Contenido Pestaña</h3>
            <h3>Contenido Pestaña</h3>
            <h3>Contenido Pestaña</h3>
          </div> */}
          <div className="home_menuInf">
            <TabBar>
              {tabs.map((item) => (
                <TabBar.Item
                  key={item.key}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </TabBar>
          </div>
        </div>
        <div className="vista_home_content1" />
      </div>
    </>
  );
};

export default Home;
