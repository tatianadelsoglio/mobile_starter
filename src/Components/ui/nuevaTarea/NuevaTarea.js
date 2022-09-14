/* eslint-disable no-unused-vars */
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  List,
  Modal,
  Picker,
  PickerView,
  SearchBar,
  Selector,
  TextArea,
} from "antd-mobile";
import React, { useContext, useEffect, useState } from "react";
import "./NuevaTarea.css";
import { CheckOutline } from "antd-mobile-icons";
import { GlobalContext } from "../../context/GlobalContext";
import { useQuery } from "@apollo/client";
import { GET_CLIENTE } from "../../../graphql/queries/Cliente";

const NuevaTarea = () => {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState([]);

  const [idSelector, setIdSelector] = useState();

  const [clientes, setClientes] = useState([]);
  const { userId } = useContext(GlobalContext);

  const [buscador, setBuscador] = useState("");

  const handleChange = (value) => {
    if (value === "" || value === null) {
    }
    console.log(value)
    return setBuscador(value);
  };

  const { loading, error, data } = useQuery(GET_CLIENTE, {
    variables: {
      input: buscador.length > 2 ? buscador : "",
      idUsuario: userId,
    },
  });

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

  const [searchVal, setSearchVal] = useState("");

  const handleBuscador = (val) => {
    let valor = clientes.filter((cliente) => cliente.cli_id === val);
    console.log(valor[0].cli_nombre);

    setSearchVal(valor[0].cli_nombre);

    setBuscador("");
  };

  const handleFormSubmit = (values) => {};

  return (
    <div className="detalle-tarea-contenedor">
      <Form
        layout="vertical"
        onFinish={(values) => handleFormSubmit(values)}
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
        <Form.Item label="Cliente" name="cliente" className="nueva_tarea_buscador_cliente">
          {/* <select className="select_nueva_tarea" required>
            <option value="" disabled selected hidden>
              Seleccione un cliente
            </option>
            {clientes && clientes.map((cliente) => (
              <option value={cliente.cli_id}>{cliente.cli_nombre}</option>
            ))}
          </select> */}

          

          <SearchBar
            className="select_nueva_tarea"
            icon={null}
            type="search"
            list="clientes"
            placeholder="Ingrese Cliente"
            onClear={() => setSearchVal("")}
            onChange={(value) => handleChange(value)}
          />

          {buscador !== "" ? (
            <List>
              {clientes &&
                clientes.map((cliente) => (
                  <List.Item
                    key={cliente.cli_id}
                    onClick={() => handleBuscador(cliente.cli_id)}
                  >
                    <div className="div_empresa">{cliente.cli_nombre}</div>
                  </List.Item>
                ))}
            </List>
          ) : (
            ""
          )}

          {searchVal === "" || searchVal === null ? (
            ""
          ) : (
            <div className="client_select">{searchVal}</div>
          )}


          {/* <input className="select_nueva_tarea" placeholder="Ingrese Cliente" type="search" list="clientes" onChange={(value) => handleChange(value)}/>
          <datalist id="clientes" >
            {clientes &&
              clientes.map((cliente) => (
                <option data-value={cliente.cli_id}>
                  {cliente.cli_nombre}
                </option>
              ))}
          </datalist> */}



        </Form.Item>
        <Form.Item label="Asunto" name="asunto">
          <TextArea autoSize={true} placeholder="Detalle de Tarea"></TextArea>
        </Form.Item>
        <Form.Item label="Tipo de Tarea" name="tipoTarea">
          <select className="select_nueva_tarea" required>
            <option value="" disabled selected hidden>
              Seleccione tipo de tarea
            </option>
            <option value="Visita de Campo">Visita de Campo</option>
          </select>
        </Form.Item>
        <Form.Item label="Fuente" name="fuente">
          <select className="select_nueva_tarea" required>
            <option value="" disabled selected hidden>
              Seleccione fuente
            </option>
            <option value="Negocio">Negocio</option>
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
