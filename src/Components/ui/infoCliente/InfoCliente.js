import { Card } from "antd-mobile";
import React from "react";
import { PhoneFill, MailFill, UserOutline } from "antd-mobile-icons";
import "./InfoCliente.css";

const InfoCliente = ({ clienteSelect }) => {
  return (
    <>
      <div className="lista_infoClient">
        <Card title="La Ganadera" >
          <div> <p className="p_infoClient"><UserOutline /> Nombre y Apellido: {clienteSelect.nombre} </p></div>
          <div> <p><PhoneFill /> Telefono: {clienteSelect.telefono}</p> </div>
          <div> <p><MailFill /> E-mail: {clienteSelect.email} </p></div>
        </Card>
      </div>
    </>
  );
};

export default InfoCliente;
