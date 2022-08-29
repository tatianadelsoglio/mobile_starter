/* eslint-disable no-unused-vars */
import React from "react";
import "./ListaTarea.css";
import "../tareaNegocio/tareaNegocio.css";
import "moment/locale/es";
import { TareaNegocio } from "../tareaNegocio/TareaNegocio";

const ListaTarea = ({ ItemListaTarea }) => {

  return (
    <>
      <div className="div_lista_tareas">
        <div>
          {ItemListaTarea.map((ItemListaTarea) => (
            <TareaNegocio tarea={ItemListaTarea} origen="ListaTareas" />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListaTarea;
