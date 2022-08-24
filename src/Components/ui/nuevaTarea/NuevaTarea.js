/* eslint-disable no-unused-vars */
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Picker,
  PickerView,
  Selector,
  TextArea,
} from "antd-mobile";
import React, { useState } from "react";
import dayjs from "dayjs";
import "./NuevaTarea.css";
import { CheckOutline } from "antd-mobile-icons";
import Nav from "../navBar/Nav";

const NuevaTarea = () => {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState([]);

  const [idSelector, setIdSelector] = useState();

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
    <>
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
            <Input placeholder="Ingrese Cliente" />
          </Form.Item>
          <Form.Item label="Asunto">
            <TextArea autoSize={true} placeholder="Detalle de Tarea"></TextArea>
          </Form.Item>
          <Form.Item label="Tipo de Tarea">
          <Input placeholder="Ingrese Tipo Tarea" />
          </Form.Item>
          <Form.Item label="Fuente">
          <Input placeholder="Ingrese Tipo Fuente" />
          </Form.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Form.Item label="Vencimiento">
                <input
                  className="input-fechaHora"
                  type="date"
                  placeholder="Seleccione Fecha"
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item label="Hora">
                <input
                  className="input-fechaHora"
                  type="time"
                  placeholder="Seleccione Hora"
                />
              </Form.Item>
            </div>
          </div>
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
    </>
  );
};

export default NuevaTarea;