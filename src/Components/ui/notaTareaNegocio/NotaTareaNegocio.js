import "./notaTareaNegocio.css";

export const NotaTareaNegocio = ({ nota, origen="", interno=false, display=true }) => {
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

  if(display===true) {
    return (
      <div className={origen ? "nota-tarea-wrapper-lista-negocio" : interno ? "nota-tarea-wrapper-interno" : "nota-tarea-wrapper"} >
        <div className="nota-tarea-linea-superior">
          <p className="nota-tarea-fecha">{nota.fecha}</p>
          <div
            className="nota-tarea-prioridad"
            style={{ backgroundColor: colorPrioridad(nota.prioridad) }}
          >
            <p style={{ margin: "0px" }}>{nota.prioridad}</p>
          </div>
        </div>
        <p className="nota-tarea-texto">{nota.texto}</p>
      </div>
    );
  }
  else {
    <div>
    </div>
  }
  
};
