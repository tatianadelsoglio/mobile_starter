import { Card } from "antd-mobile";
import React from "react";
import {
  PhonebookOutline,
  MailOutline,
  ShopbagOutline,
  UserOutline,
} from "antd-mobile-icons";
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
        <Card className="card_empresa">
          <div
            className="div_emp"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p className="p_infoEmpresa">{clienteSelect.empresa} </p>

            {/* <p className="p_info">
              <PhonebookOutline /> {clienteSelect.telefono}
            </p>
            <p className="p_info">
              <MailOutline /> {clienteSelect.email}
            </p> */}
          </div>
        </Card>
        <div className="div_contacto" style={{ marginTop: "5px" }}>
          <Card className="card_empresa">
            <div
              className="div_emp"
              style={{ display: "flex", flexDirection: "column" }}
            >
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
          <Card className="card_contactos">
            <div className="div_contacto_lista">
              {contactos.map((contacto) => (
                <Card className="border">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className="p_infoContacto">{contacto.nombre_contacto}</p>
                    {/* <div className="div_content_enlace">
                      <p style={{ display: "inline", marginRight: "10px" }}>
                        <a
                          className="numCel"
                          href={"tel:+54" + contacto.telefono_contacto}
                        >
                          <div className="div_enlace">
                            <PhonebookOutline style={{ fontSize: "3rem" }} />
                            <p style={{ margin: "0px" }}>Llamar</p>
                          </div>
                        </a>
                      </p>
                      <p style={{ display: "inline" }}>
                        <a
                          className="numCel"
                          href={"mailto:" + contacto.email_contacto}
                        >
                          <div className="div_enlace">
                            <MailOutline style={{ fontSize: "3rem" }} />
                            <p style={{ margin: "0px" }}>Enviar</p>
                          </div>
                        </a>
                      </p>
                    </div> */}

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

                    {/* <p className="p_info">
                      <PhonebookOutline /> {contacto.telefono_contacto}
                    </p>
                    <p className="p_info">
                      <MailOutline /> {contacto.email_contacto}
                    </p> */}
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
