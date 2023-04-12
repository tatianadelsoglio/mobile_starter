/* eslint-disable no-unused-vars */
import React from "react";
import "./ListaTarea.css";
import "../tareaNegocio/tareaNegocio.css";
import "moment/locale/es";
import { TareaNegocio } from "../tareaNegocio/TareaNegocio";

const ListaTarea = ({ itemListaTarea }) => {
  return (
    <>
      {itemListaTarea.map((tarea) => (
        <TareaNegocio tarea={tarea} origen="ListaTareas" key={tarea.tar_id}/>
      ))}
    </>
  );
};

export default ListaTarea;
