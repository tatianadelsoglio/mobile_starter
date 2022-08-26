/* eslint-disable array-callback-return */

import { Form, Input, Button, Selector, TextArea, Modal } from "antd-mobile";
import { CheckOutline } from "antd-mobile-icons";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetalleTarea.css";
import dayjs from "dayjs";
import moment from "moment";

const DetalleTarea = () => {
  const location = useLocation();

  const [tarea, setTarea] = useState(location.state[0]);

  const [idSelector, setIdSelector] = useState(tarea.prioridad);

  const handleFecha = (fecha) => {
    fecha = fecha.split(" ");

    fecha = moment(fecha[0], "DD/MM/YYYY").format("YYYY-MM-DD");

    return fecha;
  };

  const handleHora = (hora) => {
    hora = hora.split(" ");

    return hora[1];
  };

  const prioridad = [
    {
      label: (
        <div
          className={
            idSelector === "ALTA"
              ? "selector-alta seleccionado"
              : "selector-alta"
          }
        >
          <p className="selector-texto">ALTA</p>
        </div>
      ),
      value: "ALTA",
    },
    {
      label: (
        <div
          className={
            idSelector === "MEDIA"
              ? "selector-media seleccionado"
              : "selector-media"
          }
        >
          <p className="selector-texto">MEDIA</p>
        </div>
      ),
      value: "MEDIA",
    },
    {
      label: (
        <div
          className={
            idSelector === "BAJA"
              ? "selector-baja seleccionado"
              : "selector-baja"
          }
        >
          <p className="selector-texto">BAJA</p>
        </div>
      ),
      value: "BAJA",
    },
  ];

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const valoresIniciales = {
    cliente: tarea.cliente,
    asunto: tarea.asunto,
    fecha: handleFecha(tarea.fechaHora),
    hora: handleHora(tarea.fechaHora),
    nota: tarea.anexo?.map((anexo) => {
      if (anexo.tipo === "#N") {
        return anexo.texto;
      }
    }),
    tipoTarea: tarea.tipoTarea,
    fuente: tarea.origen,
    prioridad: tarea.prioridad,
  }

  return (
    <div className="detalle-tarea-contenedor">
      <Form
        name="tareaForm"
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={valoresIniciales}
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
                      color: "#00b33c",
                    }}
                  />
                ),
                title: "Tarea editada correctamente",
                confirmText: "Cerrar",
              });
            }}
          >
            Guardar
          </Button>
        }
      >
        <Form.Item label="Cliente"
        name="cliente">
          <select className="select_nueva_tarea" required>
            <option value="1" selected>
              {tarea.cliente}
            </option>
          </select>
        </Form.Item>
        <Form.Item label="Asunto"
        name="asunto">
          <TextArea autoSize={true} />
        </Form.Item>
        <Form.Item label="Tipo de Tarea"
        name="tipoTarea">
          <select className="select_nueva_tarea" required>
            <option value="1" selected>
              {tarea.tipoTarea}
            </option>
          </select>
        </Form.Item>
        <Form.Item label="Fuente"
        name="fuente">
          <select className="select_nueva_tarea" required>
            <option value="1" selected>
              {tarea.origen}
            </option>
          </select>
        </Form.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Form.Item label="Vencimiento"
            name="fecha">
              <input
                className="input-fechaHora"
                type="date"
                value={handleFecha(tarea.fechaHora)}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Hora" name="hora">
              <input
                className="input-fechaHora"
                type="time"
                value={handleHora(tarea.fechaHora)}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item label="Nota" name="nota">
          <TextArea
            autoSize={true}
          />
        </Form.Item>
        <Form.Item label="Prioridad" name="prioridad">
          <Selector
            style={{
              "--border-radius": "10px",
              "--border": "none",
              "--checked-border": "none",
              "--padding": "0px",
              fontSize: "16px",
            }}
            showCheckMark={false}
            label="Prioridad"
            options={prioridad}
            onChange={(v) => setIdSelector(v[0])}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DetalleTarea;
