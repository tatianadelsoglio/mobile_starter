/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Checkbox, Form, Image, Input } from "antd-mobile";
import React, { useState } from "react";
import duo from "./logo-crm-prod.svg";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import "./Login.css";
import { useHistory } from "react-router-dom";
import useAuth from "../../../auth/useAuth";

const Login = () => {
  let history = useHistory();
  const auth = useAuth();

  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    console.log(1 + 1);
    // auth.login(1+1);
    history.push("/home");
  };

  return (
    <>
      <div className="vista_login_wrapper">
        <div className="vista_login_content1"></div>
        <div className="vista_login_content">
          <div className="img_content">
            <Image src={duo} width={150} height={150} />
          </div>
          <div className="form_login">
            <Form
              layout="horizontal"
              onFinish={onFinish}
              footer={
                <>
                  <div className="recordar">
                    <div className="recordar_texto">
                      <h3>Recordarme</h3>
                    </div>
                    <div className="recordar_check">
                      <Checkbox />
                    </div>
                  </div>
                  <div className="btn_content">
                    <Button className="btn_content_btn" type="submit">
                      INICIAR
                    </Button>
                  </div>
                </>
              }
            >
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
          {/* <div className="recordar">
            <div className="recordar_texto">
              <h3>Recordarme</h3>
            </div>
            <div className="recordar_check">
              <Checkbox />
            </div>
          </div> */}
        </div>
        <div className="vista_login_content1"></div>
      </div>
    </>
  );
};

export default Login;
