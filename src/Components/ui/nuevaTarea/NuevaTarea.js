/* eslint-disable no-unused-vars */
import { Button, Form, Modal, Selector, TextArea } from "antd-mobile";
import React, { useContext, useEffect, useState } from "react";
import "./NuevaTarea.css";
import { CheckOutline } from "antd-mobile-icons";
import { GlobalContext } from "../../context/GlobalContext";
import { useQuery } from "@apollo/client";
import { GET_CLIENTE } from "../../../graphql/queries/Cliente";
import moment from "moment";
import { GET_TIPO_TAREA } from "../../../graphql/queries/TipoTarea";
import { GET_TIPO_ORIGEN } from "../../../graphql/queries/TipoOrigen";
import Select from "react-select";

const NuevaTarea = () => {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState([]);

  const [form] = Form.useForm();

  const [idSelector, setIdSelector] = useState();

  const [clientes, setClientes] = useState([]);
  const { userId } = useContext(GlobalContext);

  //TODO INICIO SECCION DE ELEGIR CLIENTE

  const [buscador, setBuscador] = useState("");
  const [ocultarC, setOcultarC] = useState(false);

  const handleChange = (value) => {
    if (value === "" || value === null) {
    }
    console.log(value.target.value);
    setBuscador(value.target.value);
  };

  const { loading, error, data } = useQuery(GET_CLIENTE, {
    variables: {
      input: buscador.length > 2 ? buscador : "",
      idUsuario: userId,
    },
  });

  const onFinish = (v) => {
    // // let inputAdjunto;

    // const fechaVencimientoDefault = moment(v.tar_fecha._d).format("YYYY-MM-DD");
    // const horaVencimientoDefault = moment(v.tar_horavencimiento._d).format(
    //   "HH:mm"
    // );

    // // if (Object.keys(file).length) {
    // //   const extension = file.originalname.split(".")[1];
    // //   inputAdjunto = {
    // //     up_filename: file.fileName,
    // //     up_mimetype: extension,
    // //     up_hashname: file.filename,
    // //     usu_id: 1,
    // //     up_detalle: v.adj_detalle,
    // //     up_size: String(file.size),
    // //   };
    // // }

    // const inputTarea = {
    //   tar_asunto: v.tar_asunto,
    //   tar_vencimiento: dateFrom || fechaVencimientoDefault,
    //   tar_horavencimiento: timeFrom || horaVencimientoDefault,
    //   est_id: 1,
    //   usu_id: deal.usu_id,
    //   cli_id: v.cli_id,
    //   ale_id: Number(v.ale_id),
    //   tar_alertanum: Number(v.tar_alertanum),
    //   tip_id: Number(v.tip_id),
    //   pri_id: priority,
    // };

    // let inputNota = {
    //   not_desc: note === `<p><br></p>` ? "" : note,
    //   not_importancia: priority,
    // };

    // if (inputNota.not_desc === "") {
    //   inputNota = null;
    // }

    // if (fList.length === 0) {
    //   inputAdjunto = null;
    // }

    // newTareaResolver({
    //   variables: {
    //     idNegocio: negId,
    //     idUsuario: deal.usu_id,
    //     idCliente: deal.cli_id,
    //     idContacto: Number(v.con_id),
    //     inputTarea,
    //     inputNota,
    //     inputAdjunto,
    //     idUsuarioAsignado: v.usu_asig_id,
    //   },
    // }).then((tarea) => {
    //   const idTarea = tarea.data.newTareaResolver;
    //   const template = `####T_${idTarea}`;
    //   const his_detalle = template;
    //   setHistorial(
    //     newHistorialNegocioResolver,
    //     idUser,
    //     negId,
    //     Number(etaId),
    //     his_detalle,
    //     -1
    //   );
    // });

    // setNote("");
    // form.resetFields();
    // setFlist([]);
    // onClose();
  };

  useEffect(() => {
    if (data) {
      setClientes(data.getClientesLimitResolver);
    }
  }, [data]);

  useEffect(() => {
    console.log(clientes);
  }, [clientes]);

  useEffect(() => {
    console.log("Busqueda: ", buscador);
  }, [buscador]);

  const handleSelect = (value) => {
    console.log("cliente: ", value.target.value);
    setBuscador(value.target.value);

    if (ocultarC === true) {
      setOcultarC(false);
    }

    if (ocultarC === false) {
      setOcultarC(true);
    }
  };
  //TODO FIN SECCION DE ELEGIR CLIENTE
  //TODO INICIO SECCION DE ELEGIR TIPO TAREA
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
    console.log(tiposTareas);
  }, [tiposTareas]);


  const handleSelectTT = ({ value }) => {
    console.log(value);
  };
  //TODO FIN SECCION DE ELEGIR TIPO TAREA
  //TODO INICIO SECCION DE ELEGIR ORIGEN TAREA
  const [tiposOrigenes, setTiposOrigenes] = useState([]);
  const [buscadorO, setBuscadorO] = useState("");

  const { data: dataTipoOrigen } = useQuery(GET_TIPO_ORIGEN, {
  });

  useEffect(() => {
    if (dataTipoOrigen) {
      setTiposOrigenes(dataTipoOrigen.getOrigenesResolver);
    }
  }, [dataTipoOrigen]);

  useEffect(() => {
    console.log(tiposOrigenes);
  }, [tiposOrigenes]);

  const handleSelectO = ({ value }) => {
    console.log(value);
  };
  //TODO FIN SECCION DE ELEGIR ORIGEN TAREA

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

  const handleFormSubmit = (values) => {};

  return (
    <div className="detalle-tarea-contenedor">
      <Form
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
        <Form.Item
          label="Cliente"
          name="cliente"
          className="nueva_tarea_buscador_cliente"
        >
          {ocultarC !== true ? (
            <input
              className="select_nueva_tarea input_cliente"
              placeholder="Ingrese Cliente"
              type="search"
              autoComplete="off"
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
                      value={cliente.cli_nombre}
                    />
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
        </Form.Item>
        <Form.Item label="Asunto" name="asunto">
          <TextArea className="detalleTarea" autoSize={true} placeholder="Detalle de Tarea"></TextArea>
        </Form.Item>
        <Form.Item label="Tipo de Tarea" name="tipoTarea">
          <Select
            className="select_nueva_tarea"
            defaultValue={{ label: "Seleccione Tipo de Tarea" }}
            options={
              tiposTareas &&
              tiposTareas.map((tipoTarea) => ({
                label: tipoTarea.tip_desc,
                value: tipoTarea.tip_id,
              }))
            }
            onChange={handleSelectTT}
          />
        </Form.Item>
        <Form.Item label="Fuente" name="fuente">
          <Select
            className="select_nueva_tarea"
            defaultValue={{ label: "Seleccione Fuente" }}
            options={
              tiposOrigenes &&
              tiposOrigenes.map((tipoOrigen) => ({
                label: tipoOrigen.ori_desc,
                value: tipoOrigen.ori_id,
              }))
            }
            onChange={handleSelectO}
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Form.Item label="Vencimiento" name="vencimiento">
              <input
                className="input-fechaHora"
                type="date"
                placeholder="Seleccione Fecha"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Hora" name="hora">
              <input
                className="input-fechaHora"
                type="time"
                placeholder="Seleccione Hora"
              />
            </Form.Item>
          </div>
        </div>
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

export default NuevaTarea;
