import React from "react";
import {
  UnorderedListOutline,
  UserOutline,
  CalendarOutline,
} from "antd-mobile-icons";
import { TabBar } from "antd-mobile";
import "./Menu.css";
import { useHistory, useLocation } from "react-router-dom";



const Menu = () => {

  let history = useHistory;
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    history.push(value)
  }

  const tabs = [
    {
      key: "/home/tareas",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/home/clientes",
      icon: <UserOutline />,
    },
    {
      key: "/home/calendario",
      icon: <CalendarOutline />,
    },
  ];
  return (
    <>
      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon}/>
        ))}
      </TabBar>
    </>
  );
};

export default Menu;
