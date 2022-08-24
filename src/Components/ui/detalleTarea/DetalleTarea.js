/* eslint-disable array-callback-return */

import {
  Form,
  Input,
  Button,
  DatePicker,
  Selector,
  TextArea,
  Modal,
} from "antd-mobile";
import { CheckOutline } from "antd-mobile-icons";
import React, {  useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetalleTarea.css";
import dayjs from "dayjs";

const DetalleTarea = () => {
  const location = useLocation();

  const [tarea, setTarea] = useState(location.state[0]);

  const [visible, setVisible] = useState(false);

  const [idSelector, setIdSelector] = useState(tarea.prioridad);

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


  return (
    <div className="detalle-tarea-contenedor">
      <Form
        layout="vertical"
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
        <Form.Item label="Cliente">
          <Input defaultValue={tarea.cliente} />
        </Form.Item>
        <Form.Item label="Asunto" >
          <TextArea autoSize={true} defaultValue={tarea.asunto} />
        </Form.Item>
        <Form.Item label="Tipo de Tarea">
          <Input defaultValue={tarea.tipoTarea} />
        </Form.Item>
        <Form.Item label="Fuente">
          <Input defaultValue={tarea.origen} />
        </Form.Item>
        <Form.Item
          onClick={() => {
            setVisible(true);
          }}
          label="Vencimiento"
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
          onClick={() => {
            setVisible(true);
          }}
          label="Hora"
        >
          <p>Hora</p>
        </Form.Item>
        <Form.Item label="Nota">
          <TextArea
            autoSize={true}
            defaultValue={tarea.anexo.map((anexo) => {
              if (anexo.tipo === "#N") {
                return anexo.texto;
              }
            })}
          />
        </Form.Item>
        <Form.Item label="Prioridad">
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
