/* eslint-disable array-callback-return */

import { Form, Button, Selector, TextArea, Modal } from "antd-mobile";
import { CheckOutline } from "antd-mobile-icons";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetalleTarea.css";
import moment from "moment";
import { GlobalContext } from "../../context/GlobalContext";
import { useQuery } from "@apollo/client";
import { GET_CLIENTE } from "../../../graphql/queries/Cliente";
import { GET_TIPO_TAREA } from "../../../graphql/queries/TipoTarea";
import Select from "react-select";
import { GET_TIPO_ORIGEN } from "../../../graphql/queries/TipoOrigen";
import Note from "../note/Note";

const DetalleTarea = () => {
  const { userId } = useContext(GlobalContext);

  const location = useLocation();

  const [tarea, setTarea] = useState(location.state);

  const [idSelector, setIdSelector] = useState(tarea.pri_desc);

  const [clientes, setClientes] = useState([]);

  const [buscador, setBuscador] = useState("");
  const [ocultarC, setOcultarC] = useState(false);

  const handleChange = (value) => {
    console.log(value.target.value);
    if (value === "" || value === null) {
    }
    setBuscador(value.target.value);
  };

  const { loading, error, data } = useQuery(GET_CLIENTE, {
    variables: {
      input: buscador.length > 2 ? buscador : "",
      idUsuario: userId,
    },
  });

  useEffect(() => {
    if (data) {
      let dataClientes= [];

      data.getClientesLimitResolver.map((cliente) => {
        if(cliente.cli_id != tarea.cli_id)
        dataClientes.push(cliente);
      })

      // let temp = Object.assign(data.getClientesLimitResolver, dataClientes);
      dataClientes.push({
        __typename: "Clientes",
        cli_email: null,
        cli_id: tarea.cli_id.toString(),
        cli_nombre: tarea.cli_nombre,
        cli_telefono1: null,
      });
      console.log(dataClientes);
      setClientes(dataClientes);
    }
  }, [data]);

  const handleSelect = (value) => {
    setBuscador(value.target.value);

    if (ocultarC === true) {
      setOcultarC(false);
    }

    if (ocultarC === false) {
      setOcultarC(true);
    }
  };

  

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

  const [tiposOrigenes, setTiposOrigenes] = useState([]);

  const { data: dataTipoOrigen } = useQuery(GET_TIPO_ORIGEN, {});

  useEffect(() => {
    if (dataTipoOrigen) {
      setTiposOrigenes(dataTipoOrigen.getOrigenesResolver);
    }
  }, [dataTipoOrigen]);

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

  const [form] = Form.useForm();

  const onFinish = (values) => {};

  return (
    <div className="detalle-tarea-contenedor">
      <Form
        name="tareaForm"
        form={form}
        layout="vertical"
        onFinish={onFinish}
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
        <Form.Item
          label="Cliente"
          name="cli_id"
          initialValue={{ label: tarea.cli_nombre, id: tarea.cli_id }}
        >
          {ocultarC !== true ? (
            <input
              className="select_nueva_tarea input_cliente"
              placeholder="Ingrese Cliente"
              type="search"
              autoComplete="off"
              initialValue={{ label: tarea.cli_nombre, id: tarea.cli_id }}
              onChange={(value) => handleChange(value)}
            />
          ) : null}
          {clientes &&
            clientes.map((cliente) => (
              <>
                {buscador !== "" ? (
                  <>
                    <input
                      className="select_nueva_tarea"
                      type="text"
                      onClick={(value) => handleSelect(value)}
                      initialValue={cliente.cli_nombre}
                    />
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
        </Form.Item>
        <Form.Item
          label="Asunto"
          name="tar_asunto"
          initialValue={tarea.tar_asunto}
        >
          <TextArea autoSize={true} />
        </Form.Item>
        <Form.Item label="Tipo de Tarea" name="tip_id">
          <Select
            className="select_nueva_tarea"
            defaultValue={{ label: tarea.tip_desc, value: tarea.tip_id }}
            options={
              tiposTareas &&
              tiposTareas.map((tipoTarea) => ({
                label: tipoTarea.tip_desc,
                value: tipoTarea.tip_id,
              }))
            }
          />
        </Form.Item>
        <Form.Item label="Fuente" name="ori_id">
          <Select
            className="select_nueva_tarea"
            defaultValue={{ label: tarea.ori_desc, value: tarea.ori_id }}
            options={
              tiposOrigenes &&
              tiposOrigenes.map((tipoOrigen) => ({
                label: tipoOrigen.ori_desc,
                value: tipoOrigen.ori_id,
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
              initialValue={moment(
                tarea.tar_horavencimiento,
                "HH:mm:ss"
              ).format("LT")}
            >
              <input className="input-fechaHora" type="time" />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          label="Nota"
          name="not_desc"
          initialValue={
            <div dangerouslySetInnerHTML={{ __html: tarea.not_desc }} />
          }
        >
          <Note
            editValue={tarea.not_desc || ""}
            width="100%"
            height="100%"
          ></Note>
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
