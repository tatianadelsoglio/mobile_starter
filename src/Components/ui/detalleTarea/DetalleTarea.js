/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Form, Input } from "antd-mobile";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetalleTarea.css";

const DetalleTarea = () => {
  const location = useLocation();

  const [tarea, setTarea] = useState(location.state[0]);

  console.log(tarea);

  const handleFechaVer = (val) => {
    let fecha = moment(val).format("DD-MM-YYYY");
    return fecha;
  };

  const handleHora = (val) => {
    let hora = moment(val).format("LT");
    return hora;
  };

  return (
    <div className="detalle-tarea-contenedor">
      <Form layout="horizontal">

        <Form.Item>
          
        </Form.Item>
        <div className="detalle-tarea-item">
          <p className="detalle-tarea-label">Asunto</p>
          <div className="">

          </div>
        </div>
      </Form>
    </div>
  );
};

export default DetalleTarea;
