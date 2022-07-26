import {
  Button,
  Checkbox,
  Form,
  Image,
  Input,
  Stepper,
  Switch,
  TextArea,
} from "antd-mobile";
import React from "react";
import "./App.css";
import duo from "./logo-crm-prod.svg";

const App = () => {
  return (
    <div
      style={{ backgroundColor: "#f8f8f8", height: "100vh", width: "100vw" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image
          src={duo}
          width={150}
          height={150}
          style={{ padding: "0px", margin: "15vh 50px 20px" }}
        />

        <div style={{ height: "60vh", width: "80vw", margin: "-40px 45px" }}>
          <Form
            layout="vertical"
            footer={
              <>
                <h3>Mantener la sesión Iniciada <Checkbox style={{marginLeft:"15%"}}/></h3>

                <Button
                  block
                  type="submit"
                  style={{ backgroundColor: "#00b33b", marginTop:"50px" }}
                  size="large"
                >
                  INICIAR
                </Button>
              </>
            }
          >
            <Form.Item name="name" label="Usuario">
              <Input onChange={console.log} placeholder="Ingrese usuario" />
            </Form.Item>

            <Form.Item name="contraseña" label="Contraseña">
              <Input
                type="password"
                onChange={console.log}
                placeholder="Ingrese contraseña"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
