/* eslint-disable array-callback-return */

import { Form, Button, Selector, TextArea, Modal } from "antd-mobile";
import { CheckOutline } from "antd-mobile-icons";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./DetalleTarea.css";
import moment from "moment";
import { GlobalContext } from "../../context/GlobalContext";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TIPO_TAREA } from "../../../graphql/queries/TipoTarea";
import Select from "react-select";
import Note from "../note/Note";
import { UPDATE_TAREA } from "../../../graphql/mutations/tareas";
import { decode } from "base-64";

const DetalleTarea = () => {
  const { userId, note, setNote, pollTareas } = useContext(GlobalContext);

  const location = useLocation();
  const search = location.search;
  const history = useHistory();
  const [form] = Form.useForm();

  const [error, setError] = useState(false);
  const [tarea, setTarea] = useState(null);
  const [idSelector, setIdSelector] = useState();
  const [file] = useState({});
  const [fList, setFlist] = useState([]);

  const handleHora = (hs) => {
    let horaFormato = hs;
    if (hs.length < 5) {
      horaFormato = "0" + hs;
    }

    return horaFormato;
  };

  const [updateTareaResolver] = useMutation(UPDATE_TAREA, {
    onCompleted: () => {
      if (pollTareas) {
        pollTareas.inicial(1000);
        setTimeout(() => {
          pollTareas.stop();
        }, 1000);
      }

      Modal.alert({
        header: (
          <CheckOutline
            style={{
              fontSize: 64,
              color: "#56B43C",
            }}
          />
        ),
        title: "Tarea editada correctamente",
        confirmText: "Cerrar",
        onConfirm: history.goBack(),
      });
    },
  });

  const [tiposTareas, setTiposTareas] = useState([]);

  const { data: dataTipoTarea } = useQuery(GET_TIPO_TAREA, {
    variables: {
      idCategoria: 1,
    },
  });

  useEffect(() => {
    if (dataTipoTarea) {
      setTiposTareas(dataTipoTarea.getTiposTareaResolver);
    }
  }, [dataTipoTarea]);

  useEffect(() => {
    try {
      const data = new URLSearchParams(search).get("data");
      let tar = JSON.parse(decode(data));
      if (typeof tar === "object" && tar !== null) {
        setTarea(JSON.parse(decode(data)));
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  }, [location, search]);

  useEffect(() => {
    if (tarea) {
      setIdSelector(tarea.pri_id);

      form.setFieldsValue({
        tar_horavencimiento: handleHora(
          moment(tarea.tar_horavencimiento, "HH:mm:ss").format("LT")
        ),
      });
    }
  }, [tarea, form]);

  const prioridad = [
    {
      label: (
        <div
          className={
            idSelector === 1 ? "selector-alta seleccionado" : "selector-alta"
          }
        >
          <p className="selector-texto">ALTA</p>
        </div>
      ),
      value: 1,
    },
    {
      label: (
        <div
          className={
            idSelector === 2 ? "selector-media seleccionado" : "selector-media"
          }
        >
          <p className="selector-texto">MEDIA</p>
        </div>
      ),
      value: 2,
    },
    {
      label: (
        <div
          className={
            idSelector === 3 ? "selector-baja seleccionado" : "selector-baja"
          }
        >
          <p className="selector-texto">BAJA</p>
        </div>
      ),
      value: 3,
    },
  ];

  const onFinish = (v) => {
    let inputAdjunto;
    if (Object.keys(file).length) {
      const extension = file.originalname.split(".")[1];
      inputAdjunto = {
        up_filename: file.fileName,
        up_mimetype: extension,
        up_hashname: file.filename,
        usu_id: 1,
        up_detalle: v.adj_detalle,
        up_size: String(file.size),
      };
    }

    const inputTarea = {
      tar_asunto: v.tar_asunto,
      tar_vencimiento: v.tar_vencimiento,
      tar_horavencimiento: v.tar_horavencimiento,
      est_id: 1,
      usu_id: userId,
      cli_id: tarea.cli_id,
      ale_id: null,
      tar_alertanum: null,
      tip_id: v.tip_id ? v.tip_id.value : tarea.tip_id,
      pri_id: v.pri_id ? Number(v.pri_id[0]) : tarea.pri_id,
    };

    let inputNota = {
      not_desc: note ? note : "",
      not_importancia: v.pri_id ? Number(v.pri_id[0]) : tarea.pri_id,
      not_id: tarea.not_id,
    };

    if (fList.length === 0) {
      inputAdjunto = null;
    }

    if (inputNota.not_desc.length === 0 || tarea.not_desc === "<p><br></p>") {
      inputNota = null;
    }

    updateTareaResolver({
      variables: {
        idTarea: tarea.tar_id,
        inputTarea,
        inputAdjunto,
        inputNota,
        idUsuario: userId,
      },
    });

    setNote("");
    form.resetFields();
    setFlist([]);
  };

  return error ? (
    <span>Hubo un error, por favor vuelva a la lista de tareas</span>
  ) : (
    tarea && (
      <div className="detalle-tarea-contenedor">
        <Form
          name="tareaForm"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          footer={
            <Button block type="submit" color="primary" size="large">
              Guardar
            </Button>
          }
        >
          <Form.Item
            label="Cliente"
            name="cli_id"
            initialValue={{ label: tarea.cli_nombre, id: tarea.cli_id }}
          >
            <div className="div_clienteSelect_btn">
              <input
                className="input-cliente-nueva-tarea"
                type="text"
                value={tarea.cli_nombre}
                readOnly={true}
              />
            </div>
          </Form.Item>
          <Form.Item
            label="Asunto"
            name="tar_asunto"
            initialValue={tarea.tar_asunto}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea autoSize={true} />
          </Form.Item>
          <Form.Item
            label="Tipo de Tarea"
            name="tip_id"
            initialValue={{ label: tarea.tip_desc, value: tarea.tip_id }}
          >
            <Select
              className="select_nueva_tarea"
              // defaultValue={{ label: tarea.tip_desc, value: tarea.tip_id }}
              options={
                tiposTareas &&
                tiposTareas.map((tipoTarea) => ({
                  label: tipoTarea.tip_desc,
                  value: tipoTarea.tip_id,
                  key: tipoTarea.tip_id,
                }))
              }
            />
          </Form.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "50%",
              }}
            >
              <Form.Item
                label="Vencimiento"
                name="tar_vencimiento"
                initialValue={tarea.tar_vencimiento}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <input className="input-fechaHora" type="date" />
              </Form.Item>
            </div>
            <div
              style={{
                width: "50%",
              }}
            >
              <Form.Item
                label="Hora"
                name="tar_horavencimiento"
                // initialValue={hora && handleHora(hora)}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <input className="input-fechaHora" type="time" />
              </Form.Item>
            </div>
          </div>
          <Form.Item label="Nota" name="not_desc">
            <Note
              editValue={
                tarea.not_desc === "<p><br></p>" ? null : tarea.not_desc
              }
              width="100%"
              height="100%"
            ></Note>
          </Form.Item>

          <Form.Item
            label="Prioridad"
            name="pri_id"
            rules={[
              {
                required: true,
              },
            ]}
          >
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
    )
  );
};

export default DetalleTarea;
