import { Card } from "antd-mobile";
import React from "react";
import { PhonebookOutline, MailOutline } from "antd-mobile-icons";
import "./InfoCliente.css";

const InfoCliente = ({ clienteSelect }) => {
  const contactos = [
    {
      nombre_contacto: "Cosme Fulanito",
      telefono_contacto: "353321654",
      email_contacto: "cosme@fulanito.com",
    },
    {
      nombre_contacto: "Pepito zecc",
      telefono_contacto: "353321654",
      email_contacto: "Pepito@zecc.com",
    },
    {
      nombre_contacto: "Apolo Rey",
      telefono_contacto: "353321654",
      email_contacto: "Apolo@Rey.com",
    },
    {
      nombre_contacto: "Ciro Heiz",
      telefono_contacto: "353321654",
      email_contacto: "Ciro@Heiz.com",
    },
  ];

  const Llamar = (cel) => {
    console.log("Llamando a ...", cel);
  };

  return (
    <>
      <div className="lista_infoClient">
        <Card className="card_empresa">
          <div className="div_emp">
            <p className="p_infoEmpresa"> {clienteSelect.empresa} </p>
            <p className="p_info">
              <PhonebookOutline />{" "}{clienteSelect.telefono}
            </p>
            <p className="p_info">
              <MailOutline />{" "}{clienteSelect.email}
            </p>
          </div>
        </Card>

        <div className="div_contacto">
          <Card className="card_contactos">
            <div className="div_contacto_lista">
              {contactos.map((contacto) => (
                <Card className="border" onClick={() => Llamar(contacto.telefono_contacto)}>
                  <div>
                    <p className="p_infoContacto">
                      {contacto.nombre_contacto}
                    </p>
                    <p className="p_info">
                      <PhonebookOutline />{" "}
                      <a className="numCel" href="tel:+543535639705">{contacto.telefono_contacto}</a>
                    </p>
                    <p className="p_info">
                      <MailOutline />{" "}{contacto.email_contacto}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default InfoCliente;
