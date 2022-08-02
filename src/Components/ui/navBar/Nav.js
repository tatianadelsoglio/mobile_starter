import React from "react";
import { Modal, NavBar, Space } from "antd-mobile";
import { UploadOutline, AddCircleOutline } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  let history = useHistory();

  const handleModalSalir = () => {
    history.push("/");
  };

  const handleModalCrearTarea = () => {
    history.push("/nuevatarea");
  };

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <AddCircleOutline
          color="#56b43c"
          onClick={() =>
            Modal.confirm({
              title: "¿Crear una nueva tarea?",
              cancelText: "Cancelar",
              confirmText: "Crear",
              onConfirm: handleModalCrearTarea,
            })
          }
        />
        <UploadOutline
          style={{ transform: "rotate(90deg)" }}
          color="#56b43c"
          onClick={() =>
            Modal.confirm({
              title: "¿Cerrar Sesión?",
              cancelText: "Cancelar",
              confirmText: "Cerrar",
              onConfirm: handleModalSalir,
            })
          }
        />
      </Space>
    </div>
  );

  return (
    <NavBar className="navBar" right={right} onBack={() => history.goBack()}>
      <h4>Nombre Usuario</h4>
    </NavBar>
  );
};

export default Nav;
