import { Empty, SpinLoading } from "antd-mobile";
import { useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./index.css";

const QueryResult = ({ loading, error, data, children }) => {

  const { cargando, setCargando } = useContext(GlobalContext);

  const cambioEstado = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 500);
  };

  if (cargando) {
    return (
      <SpinLoading
        color="primary"
        style={{ marginLeft: "48%", marginTop: "10%" }}
      />
    );
  }

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return <div className="center-wrapper">{cambioEstado()}</div>;
  }
  if (!data || data.length === 0) {
    return (
      <div className="center-wrapper">
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>
    );
  }
  if (data) {
    return <>{children}</>;
  }
};

export default QueryResult;
