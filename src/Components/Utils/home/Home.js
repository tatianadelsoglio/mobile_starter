/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Nav from "../navBar/Nav";
import Tareas from "../tareas/Tareas";
import Menu from "../menu/Menu";
import Calendario from "../calendario/Calendario";
import Clientes from "../clientes/Clientes";
import DetalleTarea from "../detalleTarea/DetalleTarea";

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
