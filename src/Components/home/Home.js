/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Nav from "../Utils/navBar/Nav";
import Tareas from "../Utils/tareas/Tareas";
import Menu from "../Utils/menu/Menu";
import Calendario from "../Utils/calendario/Calendario";
import Clientes from "../Utils/clientes/Clientes";
import DetalleTarea from "../Utils/detalleTarea/DetalleTarea";

const Home = () => {

  return (
    <>
      <div className="vista_home_wrapper">
        <div className="vista_home_content1" />
        <div className="vista_home_content">
          <div className="home_nav">
            <Nav/>
          </div>
          <div className="home_contenido">
            {/* <DetalleTarea/> */}
            <Tareas/>
            {/* <Calendario/> */}
            {/* <Clientes/> */}
          </div>
          <div className="home_menuInf">
            <Menu/>
          </div>
        </div>
        <div className="vista_home_content1" />
      </div>
    </>
  );
};

export default Home;
