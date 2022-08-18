/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Modal, NavBar, Space } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import useAuth from "../../../auth/useAuth";
import { GlobalContext } from "../../context/GlobalContext";
import { removeDataInStorage } from "../../storage/manageStorage";

const Nav = () => {
  let history = useHistory();
  const auth = useAuth();
  const { setUserData, setLogoutAlert, logoutAlert } =
    useContext(GlobalContext);

  const handleModalSalir = () => {
    setUserData({});
    removeDataInStorage("userInfo");
    setLogoutAlert(false);
    history.push("/");
    auth.logout();
  };

  // const handleModalCrearTarea = () => {
  //   history.push("/nuevatarea");
  // };

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <MoreOutline
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
