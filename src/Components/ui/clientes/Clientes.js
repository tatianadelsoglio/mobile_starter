/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable array-callback-return */
import { List, SearchBar } from "antd-mobile";
import React, { useContext, useState, useQuery } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import "./Clientes.css";
import { GET_CLIENTE } from "../../../graphql/queries/Cliente";

const clientes = [
  {
    id: "1",
    empresa: "La Ganadera",
    telefono: "353987654",
    email: "ganadera@ganadera.com.ar",
  },
  {
    id: "2",
    empresa: "Caverzasi",
    telefono: "353654321",
    email: "caverzasi@caverzasi.com.ar",
  },
  {
    id: "3",
    empresa: "Vitalforce",
    telefono: "353456987",
    email: "vitalforce@vitalfocer",
  },
  {
    id: "4",
    empresa: "Darregueira",
    telefono: "353852963",
    email: "darregueira@darregueira.com.ar",
  },
];

const Clientes = () => {
  const [busqueda, setBusqueda] = useState("");

  const { userId } = useContext(GlobalContext);

  const { loading, error, data } = useQuery(GET_CLIENTE, {
    variables: {
      // cli_id:"",
      // cli_nombre:"",
      // cli_telefono1:"",
      // cli_email1:"",
      input: busqueda,
      idUsuario: userId,
    },
  });

  let history = useHistory();

  const redirecInfo = (id) => {
    let cliente = clientes.filter((cliente) => cliente.id === id);

    return history.push({
      pathname: `/cliente-individual/${id}`,
      state: { ...cliente },
    });
  };

  const handleChange = (value) => {
    // let filtro = clientes.filter((item) => {
    //   if (item.empresa.toUpperCase().includes(value.toUpperCase())) {
    //     return item;
    //   }
    // });

    // setBusqueda(filtro);

    setBusqueda(value);

    if (value === "" || value === null) {
      return handleClear();
    }
  };

  const handleClear = () => {
    setBusqueda("");
  };

  return (
    <div style={{ textAlign: "start" }}>
      <List
        header={
          <SearchBar
            placeholder="Ingrese Cliente"
            style={{ "--background": "#ffffff" }}
            onChange={(value) => handleChange(value)}
            onClear={handleClear}
          />
        }
      >
        <List.Item >
          <div className="div_empresa"></div>
        </List.Item>

        {/* {busqueda.length === 0 ? (
          clientes.map((cliente) => (
            <List.Item key={cliente.id} onClick={() => redirecInfo(cliente.id)}>
              <div className="div_empresa">{cliente.empresa}</div>
            </List.Item>
          ))
        ) : (
            <List.Item key={busqueda[0].id} onClick={() => redirecInfo(busqueda[0].id)}>
                <div className="div_empresa">{busqueda[0].empresa}</div>
            </List.Item>
        )} */}
      </List>
    </div>
  );
};

export default Clientes;
