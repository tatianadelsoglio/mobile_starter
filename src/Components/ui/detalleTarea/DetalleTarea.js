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
      <Form
        layout="vertical"
        mode="card"
        footer={
          <Button
            block
            type="submit"
            color="primary"
            size="large"
            onClick={() => {
              Modal.alert({
                header: (
                  <CheckOutline
                    style={{
                      fontSize: 64,
                      color: "var(--adm-color-primary)",
                    }}
                  />
                ),
                title: "Tarea Cargada Correctamente",
                confirmText: "Cerrar",
              });
            }}
          >
            Cargar Tarea
          </Button>
        }
      >
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "10px 15px",
          }}
        >
          Cliente
        </p>
        <Form.Item>
          <Input placeholder="Ingrese Cliente" />
        </Form.Item>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "10px 15px",
          }}
        >
          Asunto
        </p>
        <Form.Item style={{ borderBottom: "1px solid #f4f4f4" }}>
          <TextArea rows={5} placeholder="Detalle de Tarea"></TextArea>
        </Form.Item>
        <Form.Item label="Tipo de tarea">
          <Input placeholder="Ingrese Cliente" />
        </Form.Item>
        <Form.Item label="Fuente">
          <Input placeholder="Ingrese Cliente" />
        </Form.Item>
        <Form.Item
          label="Fecha"
          onClick={() => {
            setVisible(true);
          }}
        >
          <DatePicker
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
          >
            {(value) =>
              value ? dayjs(value).format("YYYY-MM-DD") : "Seleccione Fecha"
            }
          </DatePicker>
        </Form.Item>
        <Form.Item
          label="Hora"
          onClick={() => {
            setVisible(true);
          }}
        >
          <p>Hora</p>
        </Form.Item>
        <Form.Item label="Nota" style={{ borderBottom: "1px solid #f4f4f4" }}>
          <TextArea rows={5} placeholder="Detalle de Tarea"></TextArea>
        </Form.Item>
        <Form.Item label="Prioridad">
          <Selector
            style={{
              "--border-radius": "100px",
              "--border": "solid transparent 1px",
              "--checked-border": "solid var(--adm-color-primary) 1px",
              "--padding": "8px 10px",
              fontSize: "16px",
            }}
            showCheckMark={false}
            label="Prioridad"
            options={prioridad}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DetalleTarea;
