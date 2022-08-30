import { List, SearchBar } from "antd-mobile";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Clientes.css";

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

  let history = useHistory();

  const redirecInfo = (id) => {
    let cliente = clientes.filter((cliente) => cliente.id === id);

    return history.push({
      pathname: `/cliente-individual/${id}`,
      state: { ...cliente },
    });
  };

  const handleChange = (value) => {
    let filtro = clientes.filter((item) => {
      if (item.empresa.includes(value)) {
        return item;
      }
    });
    setBusqueda(filtro);

    if(value === "" || value === null){
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

        {busqueda.length === 0 ? (
          clientes.map((cliente) => (
            <List.Item key={cliente.id} onClick={() => redirecInfo(cliente.id)}>
              <div className="div_empresa">{cliente.empresa}</div>
            </List.Item>
          ))
        ) : (
            <List.Item key={busqueda[0].id} onClick={() => redirecInfo(busqueda[0].id)}>
                <div className="div_empresa">{busqueda[0].empresa}</div>
            </List.Item>
        )}

      </List>
    </div>
  );
};

export default Clientes;
