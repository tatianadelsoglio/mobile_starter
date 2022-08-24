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
      { label: "08:00", value: "08:00" },
      { label: "08:10", value: "08:10" },
      { label: "08:20", value: "08:20" },
      { label: "08:30", value: "08:30" },
      { label: "08:40", value: "08:40" },
      { label: "08:50", value: "08:50" },
      { label: "09:00", value: "09:00" },
      { label: "09:10", value: "09:10" },
      { label: "09:20", value: "09:20" },
      { label: "09:30", value: "09:30" },
      { label: "09:40", value: "09:40" },
      { label: "09:50", value: "09:50" },
      { label: "10:00", value: "10:00" },
    ],
    [
      { label: "AM", value: "am" },
      { label: "PM", value: "pm" },
    ],
  ];

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
          <p className="titulo-form">Cliente</p>
          <Form.Item>
            <Input placeholder="Ingrese Cliente" />
          </Form.Item>
          <p className="titulo-form">Asunto</p>
          <Form.Item>
            <TextArea autoSize={true} placeholder="Detalle de Tarea"></TextArea>
          </Form.Item>
          <p className="titulo-form">Tipo de tarea</p>
          <Form.Item>
            <Input placeholder="Ingrese Tipo Tarea" />
          </Form.Item>
          <p className="titulo-form">Fuente</p>
          <Form.Item>
            <Input placeholder="Ingrese Fuente" />
          </Form.Item>
          <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
            <div>
              <p className="titulo-form">Vencimiento</p>
              <Form.Item>
                <input type="date" min="2014-09-08" />
              </Form.Item>
            </div>
            <div>
              <p className="titulo-form">Hora</p>
              <Form.Item>
                <input type="time" />
              </Form.Item>
            </div>
          </div>
          <p className="titulo-form">Nota</p>
          <Form.Item>
            <TextArea autoSize={true} placeholder="Detalle de Tarea"></TextArea>
          </Form.Item>
          <p className="titulo-form">Prioridad</p>
          <Form.Item>
            <Selector
              style={{
                "--border-radius": "100px",
                "--border": "solid transparent 1px",
                "--checked-border": "solid gray 1px",
                "--padding": "8px 10px",
                "--checked-text-color":"gray", 
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
