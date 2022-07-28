import React from "react";
import {
  UnorderedListOutline,
  UserOutline,
  CalendarOutline,
} from "antd-mobile-icons";
import { TabBar } from "antd-mobile";
import "./Menu.css";


const Menu = () => {


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
      <TabBar>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
};

export default Menu;
