import React from 'react';
import { NavBar, Space} from "antd-mobile";
import {
  CalendarOutline,
    AddCircleOutline,
  } from "antd-mobile-icons";

const Nav = () => {

    const right = (
        <div style={{ fontSize: 24 }}>
          <Space style={{ '--gap': '16px' }}>
            <CalendarOutline color='#56b43c' />
            <AddCircleOutline color='#56b43c' />
          </Space>
        </div>
      );

    return (

        <NavBar className="navBar" right={right} onBack>
            <h4>Nombre Usuario</h4>
        </NavBar>
    );
};

export default Nav;