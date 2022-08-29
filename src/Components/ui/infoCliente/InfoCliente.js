import { Card } from "antd-mobile";
import React from "react";
import { PhonebookOutline, MailOutline } from "antd-mobile-icons";
import "./InfoCliente.css";

const InfoCliente = ({ clienteSelect }) => {
  const contactos = [
    {
      nombre_contacto: "Cosme Fulanito",
      telefono_contacto: "353321159",
      email_contacto: "cosme@fulanito.com",
    },
    {
      nombre_contacto: "Pepito zecc",
      telefono_contacto: "353374236",
      email_contacto: "Pepito@zecc.com",
    },
    {
      nombre_contacto: "Apolo Rey",
      telefono_contacto: "353398999",
      email_contacto: "Apolo@Rey.com",
    },
    {
      nombre_contacto: "Ciro Heiz",
      telefono_contacto: "353321888",
      email_contacto: "Ciro@Heiz.com",
    },
  ];

  return (
    <>
      <div className="lista_infoClient">
        <div className="div_contacto">
          <Card className="card_empresa">
            <div
              className="div_emp"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p className="p_infoEmpresa">{clienteSelect.empresa} </p>

              <a
                className="numCel p_info"
                href={"tel:+54" + clienteSelect.telefono}
              >
                <PhonebookOutline /> {clienteSelect.telefono}
              </a>

              <a
                className="numCel p_info"
                href={"mailto:" + clienteSelect.email}
              >
                <MailOutline /> {clienteSelect.email}
              </a>
            </div>
          </Card>
        </div>

        <div className="div_contacto">
          <Card title="CONTACTOS" className="card_contactos">
            <div className="div_contacto_lista">
              {contactos.map((contacto) => (
                <Card className="border">
                  <Card>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <div>
                        <p className="p_infoContacto">
                          {contacto.nombre_contacto}
                        </p>
                      </div>
                      <a
                        className="numCel p_info"
                        href={"tel:+54" + contacto.telefono_contacto}
                      >
                        <PhonebookOutline /> {contacto.telefono_contacto}
                      </a>

                      <a
                        className="numCel p_info"
                        href={"mailto:" + contacto.email_contacto}
                      >
                        <MailOutline /> {contacto.email_contacto}
                      </a>
                    </div>
                  </Card>
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
