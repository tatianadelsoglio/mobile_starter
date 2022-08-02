import React, { useState } from "react";
import {
  UnorderedListOutline,
  UserOutline,
  CalendarOutline,
} from "antd-mobile-icons";
import { TabBar } from "antd-mobile";
import "./Menu.css";
import { useHistory } from "react-router-dom";



const Menu = () => {

  let history = useHistory;

  const tabs = [
    {
      key: "/tareas",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/clientes",
      icon: <UserOutline />,
    },
    {
      key: "/calendario",
      icon: <CalendarOutline />,
    },
  ];
  return (
    <>
      <TabBar onChange={(key) => history.push({key}, { replace: true })}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon}/>
        ))}
      </TabBar>
    </>
  );
};

export default Menu;
