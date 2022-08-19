import { List } from "antd-mobile";
import React from "react";
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

  let history = useHistory();

  const redirecInfo = (id) => {

    let cliente = clientes.filter(cliente => cliente.id === id);
  
    return history.push({
        pathname: `/cliente-individual/${id}`,
        state:{...cliente},
      });
  };

  return (
    <div style={{ textAlign: "start" }}>
      <List header="Clientes">
        {clientes.map((cliente) => (
          <List.Item
            key={cliente.empresa}
            onClick={() => redirecInfo(cliente.id)}
          >
            <div className="div_empresa">
              {cliente.empresa}
            </div>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default Clientes;
