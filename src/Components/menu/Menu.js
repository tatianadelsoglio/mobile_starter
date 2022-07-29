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
      icon: <UnorderedListOutline />,
    },
    {
      key: "clientes",
      icon: <UserOutline />,
    },
    {
      key: "calendario",
      icon: <CalendarOutline />,
    },
  ];
  return (
    <>
      <TabBar>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon}/>
        ))}
      </TabBar>
    </>
  );
};

export default Menu;
