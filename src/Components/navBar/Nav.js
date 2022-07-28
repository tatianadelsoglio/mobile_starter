import React from 'react';
import { NavBar, Space} from "antd-mobile";
import {
    SearchOutline,
    MoreOutline,
  } from "antd-mobile-icons";

const Nav = () => {

    const right = (
        <div style={{ fontSize: 24 }}>
          <Space style={{ '--gap': '16px' }}>
            <SearchOutline />
            <MoreOutline />
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