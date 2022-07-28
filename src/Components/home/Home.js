import React from "react";
import "./Home.css";
import Nav from "../navBar/Nav";
import Tareas from "../tareas/Tareas";
import Menu from "../menu/Menu";

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
            <Tareas/>
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
