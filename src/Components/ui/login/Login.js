/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Checkbox, Form, Image, Input } from "antd-mobile";
import React, { useState } from "react";
import duo from "./logo-crm-prod.svg";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {

  let history = useHistory();

  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="vista_login_wrapper">
        <div className="vista_login_content1"></div>
        <div className="vista_login_content">
          <div className="img_content">
            <Image src={duo} width={150} height={150} />
          </div>
          {/* <div className="form_login">
            <label className="form_login_label">USUARIO</label>
            <Input type="text" className="form_login_input" placeholder="Ingrese Usuario"/>
            <label className="form_login_label">CONTRASEÑA</label>
            <Input type="password" className="form_login_input" placeholder="Ingrese Contraseña"/>
          </div> */}
          <div className="form_login">
            <Form layout="horizontal">
              <Form.Item
                className="form_login_label"
                label="Usuario"
                name="username"
              >
                <Input
                  className="form_login_input"
                  placeholder="Ingrese Usuario"
                  clearable
                />
              </Form.Item>
              <Form.Item
                className="form_login_label"
                label="Contraseña"
                name="password"
                extra={
                  <div className="eye">
                    {!visible ? (
                      <EyeInvisibleOutline onClick={() => setVisible(true)} />
                    ) : (
                      <EyeOutline onClick={() => setVisible(false)} />
                    )}
                  </div>
                }
              >
                <Input
                  className="form_login_input"
                  placeholder="Ingrese Contraseña"
                  clearable
                  type={visible ? "text" : "password"}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="recordar">
            <div className="recordar_texto">
              <h3>Recordarme</h3>
            </div>
            <div className="recordar_check">
              <Checkbox />
            </div>
          </div>
          <div className="btn_content">
            <Button className="btn_content_btn" onClick={() =>  history.push("/home")}>INICIAR</Button>
          </div>
        </div>
        <div className="vista_login_content1"></div>
      </div>
    </>
  );
};

export default Login;
