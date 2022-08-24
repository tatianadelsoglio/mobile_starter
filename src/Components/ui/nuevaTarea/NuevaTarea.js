/* eslint-disable no-unused-vars */
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Picker,
  Selector,
  TextArea,
} from "antd-mobile";
import React, { useState } from "react";
import dayjs from "dayjs";
import "./NuevaTarea.css";
import { CheckOutline } from "antd-mobile-icons";

const NuevaTarea = () => {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState([]);

  const prioridad = [
    {
      label: "ALTA",
      value: "1",
    },
    {
      label: "MEDIA",
      value: "2",
    },
    {
      label: "BAJA",
      value: "3",
    },
  ];

  const horaPicker = [
    [
      { label: '上午', value: 'am' },
      { label: '下午', value: 'pm' },
    ],
  ]

  return (
    <>
      <div>
        <h3>Nueva Tarea</h3>
      </div>
      <div className="form_nuevaTarea">
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
          <p style={{display:"flex", justifyContent:"flex-start", margin:"10px 15px"}}>Cliente</p>
          <Form.Item>
            <Input placeholder="Ingrese Cliente" />
          </Form.Item>
          <p style={{display:"flex", justifyContent:"flex-start", margin:"10px 15px"}}>Asunto</p>
          <Form.Item
      
            style={{ borderBottom: "1px solid #f4f4f4" }}
          >
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
    </>
  );
};

export default NuevaTarea;

// flex : 1 1 auto;
// display : block;
// box-sizing : border-box;
// width : 1527.31px;
// max-width : 100%;
// max-height : 100%;
// padding : 0px;
// margin : 0px;

// background : rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
// border : 0px none rgb(51, 51, 51);
// outline : rgb(255, 0, 0) solid 1.99298px;
// appearance : none;
// min-height : 25.5px;
// text-align : left;
