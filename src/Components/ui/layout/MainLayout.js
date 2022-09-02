import { SafeArea } from "antd-mobile";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Menu from "../menu/Menu";
import Nav from "../navBar/Nav";
import "./MainLayout.css";

const MainLayout = ({ children, titulo = "", modo = "" }) => {

  const {plataforma} = useContext(GlobalContext)
  return (
    <>
      <SafeArea position="top" style={{background:"white"}} />
        <div className="vista_home_wrapper">
          {/* <div className="vista_home_content1" /> */}

          <div className="vista_home_content">
            <div className="home_nav">
              <Nav titulo={plataforma} modo={modo} />
            </div>
            <div className="home_contenido">{children}</div>
            <div className="home_menuInf">
              <Menu />
            </div>
          </div>

          {/* <div className="vista_home_content1" /> */}
        </div>
      <SafeArea position="bottom" style={{background:"white", "--multiple":"3"}} />
    </>
  );
};

export default MainLayout;
