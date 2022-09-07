import moment from "moment";
import "./notaTareaNegocio.css";

export const NotaTareaNegocio = ({
  nota,
  origen = "",
  interno = false,
  display = true,
}) => {
  const colorPrioridad = (prioridad) => {
    let color = "";

    switch (prioridad) {
      case "ALTA":
        color = "#f12d2d";
        break;
      case "MEDIA":
        color = "#e8bc0d";
        break;
      default:
        color = "#00b33c";
        break;
    }
    return color;
  };

  let notaFecha = moment(nota.not_fechahora, "YYYY-MM-DD").format("LL");

  if (display === true) {
    return (
      <div
        className={
          origen
            ? "nota-tarea-wrapper-lista-negocio"
            : interno
            ? "nota-tarea-wrapper-interno"
            : "nota-tarea-wrapper"
        }
      >
        <div className="nota-tarea-linea-superior">
          <p className="nota-tarea-fecha">{notaFecha}</p>
          <div
            className="nota-tarea-prioridad"
            style={{ backgroundColor: colorPrioridad(nota.pri_desc) }}
          >
            <p style={{ margin: "0px" }}>{nota.pri_desc}</p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: nota.not_desc,
          }}
        ></div>
        {/* <p className="nota-tarea-texto">{nota.texto}</p> */}
      </div>
    );
  } else {
    <div style={{ display: "none" }}></div>;
  }
};
